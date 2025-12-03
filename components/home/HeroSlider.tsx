"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/hero-1.jpg", alt: "Kegiatan desa Tatengesan 1" },
  { src: "/hero-2.jpg", alt: "Kegiatan desa Tatengesan 2" },
  { src: "/hero-3.jpg", alt: "Kegiatan desa Tatengesan 3" },
];

const SLIDE_INTERVAL = 6000; // 6 detik

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    // Mobile: normal (ikut padding main), Desktop: full bleed (-mx / -mt)
    <section className="mt-0 md:-mx-6 md:-mt-8">
      <div
        className="
          relative w-full overflow-hidden bg-slate-200
          h-56 rounded-xl shadow-md
          md:h-screen
 md:min-h-[600px] md:rounded-none
        "
      >
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* overlay gelap supaya teks kebaca */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* TEKS DI TENGAH */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/90 md:text-lg">
            Selamat Datang di
          </p>
          <h1 className="mt-1 text-xl font-bold text-white drop-shadow-lg md:mt-2 md:text-5xl">
            Website Desa Tatengesan
          </h1>
          <p className="mt-2 max-w-3xl text-xs text-white/90 md:mt-3 md:text-lg">
            Temukan informasi lengkap tentang pemerintahan, penduduk, APBDes,
            berita kegiatan, dan layanan publik Desa Tatengesan.
          </p>
        </div>

        {/* BULLET INDICATOR */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-6">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-4 rounded-full transition ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
