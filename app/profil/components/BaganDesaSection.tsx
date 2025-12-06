// src/app/profil/components/BaganDesaSection.tsx

import Image from "next/image";
import { BAGAN_DESA_DESKRIPSI, BAGAN_DESA_IMAGE } from "../data/profil";

export default function BaganDesaSection() {
  return (
    <section className="space-y-6">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e53935]">
          Struktur Desa
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Kalau kamu sudah punya gambar organigram, ini akan tampil */}
        <div className="mb-4 flex justify-center">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={BAGAN_DESA_IMAGE}
              alt="Bagan Struktur Pemerintahan Desa Tatengesan"
              width={1200}
              height={600}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <p className="text-sm text-slate-600 md:text-base">
          {BAGAN_DESA_DESKRIPSI}
        </p>
      </div>
    </section>
  );
}
