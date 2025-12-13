"use client";

import Image from "next/image";

export default function HeroSlider() {
  return (
    <section className="mb-10 md:mb-16">
      <div
        className="
          relative w-full overflow-hidden bg-slate-200
          h-56 shadow-md rounded-xl
          md:h-screen md:min-h-[600px]
          md:shadow-none md:rounded-none
        "
      >
        {/* Gambar Hero */}
        <Image
          src="/selamatdatang.png"
          alt="Selamat Datang di Desa Tatengesan"
          fill
          priority
          className="object-cover"
        />

        {/* overlay gelap supaya teks kebaca */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TEKS DI TENGAH */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/90 md:text-lg">
            Selamat Datang di
          </p>
          <h1 className="mt-1 text-xl font-bold text-white drop-shadow-lg md:mt-2 md:text-5xl">
            Website Desa Tatengesan
          </h1>
          <p className="mt-2 max-w-3xl text-xs text-white/90 md:mt-3 md:text-lg">
            Temukan informasi lengkap tentang pemerintahan, penduduk, potensi,
             kegiatan, dan layanan publik Desa Tatengesan.
          </p>
        </div>
      </div>
    </section>
  );
}
