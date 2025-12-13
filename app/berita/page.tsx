// app/berita/page.tsx
import { db } from "@/app/lib/prisma";
import BeritaTatengesanListClient from "./components/BeritaTatengesanListClient";
import type { BeritaTatengesan } from "@prisma/client";

async function getAllBerita(): Promise<BeritaTatengesan[]> {
  return db.beritaTatengesan.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
}

export default async function BeritaPage() {
  const posts = await getAllBerita();

  // TODO: kalau nanti ada sistem login/admin, ganti nilai ini
  const isAdmin = false;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-1 md:py-10">
      {/* HERO SECTION */}
      <section
        className="relative mb-10 overflow-hidden rounded-3xl border border-slate-200/60
        bg-linear-to-r from-[#e53935] via-[#f9683a] to-[#f4511e]
        px-6 py-8 shadow-md md:px-10 md:py-12"
      >
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Informasi Desa Tatengesan
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Kegiatan Desa
          </h1>
          <p className="mt-2 text-sm text-white/90 md:text-base">
            Ikuti perkembangan terbaru seputar kegiatan pemerintahan,
            pembangunan, dan kehidupan masyarakat Desa Tatengesan.
          </p>
        </div>

        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
      </section>

     <BeritaTatengesanListClient
    initialPosts={posts}
    initialIsAdmin={isAdmin}
    />

    </div>
  );
}
