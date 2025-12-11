"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import type { BeritaTatengesan } from "@prisma/client";

type ActionResult<T = unknown> = {
  success: boolean;
  message?: string;
  data?: T;
};

/**
 * Cek apakah user sudah login sebagai admin dari cookie "tat_admin"
 */
async function isAdminFromCookies(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("tat_admin")?.value;
  return token === "1";
}

/**
 * Bikin slug URL-friendly dari judul
 */
function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // hilangkan aksen
    .replace(/[^a-z0-9]+/g, "-") // non-alnum jadi "-"
    .replace(/^-+|-+$/g, "") // trim -
    .substring(0, 80);
}

/**
 * Pastikan slug unik di tabel BeritaTatengesan
 */
async function generateUniqueSlug(title: string): Promise<string> {
  const base = slugify(title || "berita");
  let slug = base || "berita";
  let counter = 1;

  while (true) {
    const existing = await db.beritaTatengesan.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!existing) break;
    slug = `${base}-${counter++}`;
  }

  return slug;
}

/* ================================
   AUTH ADMIN SEDERHANA
   ================================ */

export async function adminLogin(password: string): Promise<ActionResult> {
  if (!password) {
    return { success: false, message: "Password wajib diisi." };
  }

  const expected = process.env.TATENGESAN_ADMIN_PASSWORD;
  if (!expected) {
    return {
      success: false,
      message:
        "Password admin belum dikonfigurasi di server (TATENGESAN_ADMIN_PASSWORD).",
    };
  }

  if (password !== expected) {
    return { success: false, message: "Password admin salah." };
  }

  const cookieStore = await cookies();
  cookieStore.set("tat_admin", "1", {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 6, // 6 jam
  });

  return { success: true };
}

export async function adminLogout(): Promise<ActionResult> {
  const cookieStore = await cookies();
  cookieStore.delete("tat_admin");
  return { success: true };
}

/* ================================
   CRUD BERITA (HANYA ADMIN)
   ================================ */

export async function createBerita(
  input: {
    judul: string;
    ringkasan?: string;
    isi: string;
    published?: boolean;
  }
): Promise<ActionResult<BeritaTatengesan>> {
  if (!(await isAdminFromCookies())) {
    return {
      success: false,
      message: "Tidak diizinkan. Silakan login sebagai admin.",
    };
  }

  try {
    const slug = await generateUniqueSlug(input.judul);

    const berita = await db.beritaTatengesan.create({
      data: {
        judul: input.judul,
        slug,
        ringkasan: input.ringkasan ?? null,
        isi: input.isi,
        published: input.published ?? true,
      },
    });

    revalidatePath("/berita");
    revalidatePath(`/berita/${slug}`);

    return { success: true, data: berita };
  } catch (err) {
    console.error("createBerita error:", err);
    return { success: false, message: "Gagal menambahkan berita." };
  }
}

export async function updateBerita(
  id: string,
  input: {
    judul: string;
    ringkasan?: string;
    isi: string;
    published?: boolean;
  }
): Promise<ActionResult<BeritaTatengesan>> {
  if (!(await isAdminFromCookies())) {
    return {
      success: false,
      message: "Tidak diizinkan. Silakan login sebagai admin.",
    };
  }

  try {
    const beritaLama = await db.beritaTatengesan.findUnique({ where: { id } });
    if (!beritaLama) {
      return { success: false, message: "Berita tidak ditemukan." };
    }

    let slug = beritaLama.slug;
    if (input.judul && input.judul !== beritaLama.judul) {
      slug = await generateUniqueSlug(input.judul);
    }

    const berita = await db.beritaTatengesan.update({
      where: { id },
      data: {
        judul: input.judul,
        ringkasan: input.ringkasan ?? null,
        isi: input.isi,
        published: input.published ?? beritaLama.published,
        slug,
      },
    });

    revalidatePath("/berita");
    revalidatePath(`/berita/${slug}`);

    return { success: true, data: berita };
  } catch (err) {
    console.error("updateBerita error:", err);
    return { success: false, message: "Gagal memperbarui berita." };
  }
}

export async function deleteBerita(id: string): Promise<ActionResult> {
  if (!(await isAdminFromCookies())) {
    return {
      success: false,
      message: "Tidak diizinkan. Silakan login sebagai admin.",
    };
  }

  try {
    const berita = await db.beritaTatengesan.findUnique({ where: { id } });
    if (!berita) {
      return { success: false, message: "Berita tidak ditemukan." };
    }

    await db.beritaTatengesan.delete({ where: { id } });

    revalidatePath("/berita");
    revalidatePath(`/berita/${berita.slug}`);

    return { success: true };
  } catch (err) {
    console.error("deleteBerita error:", err);
    return { success: false, message: "Gagal menghapus berita." };
  }
}
