"use client";

import { STRUKTUR_DESA } from "../home/data/home";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function StrukturPreview() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    // scroll kira-kira 1 kartu + gap
    const amount = dir === "left" ? -320 : 320;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl space-y-4 px-4 md:px-1">
      <div className="flex items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#e53935] md:text-4xl">
            Struktur Pemerintahan
          </h2>
          <p className="mt-6 text-base text-slate-700 md:text-base">
            Struktur organisasi dan tata kerja Pemerintah Desa Tatengesan.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Panah kiri */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-1">
          <button
            onClick={() => scrollByCards("left")}
            className="pointer-events-auto text-6xl md:text-7xl text-[#999999] hover:scale-110 transition"
          >
            <FiChevronLeft />
          </button>
        </div>

        {/* Panah kanan */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center pr-1">
          <button
            onClick={() => scrollByCards("right")}
            className="pointer-events-auto text-6xl md:text-7xl text-[#999999] hover:scale-110 transition"
          >
            <FiChevronRight />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300"
        >
          {STRUKTUR_DESA.map((p, idx) => (
          <div
  key={`${p.nama}-${idx}`}
  className="
    flex-none snap-start
    w-[48%] sm:w-64 md:w-72
    overflow-hidden rounded-2xl border border-slate-200 bg-white
  "
>
  <div className="relative h-72 w-full bg-slate-200 sm:h-80">
    <Image
      src={p.foto}
      alt={p.nama}
      fill
      className="object-cover"
    />
  </div>

  <div
    className="
      bg-[#e53935] px-4 py-3 text-center text-white
      flex flex-col items-center justify-center
      min-h-24 md:min-h-24
    "
  >
    <p className="text-sm font-semibold sm:text-base leading-snug">
      {p.nama}
    </p>
    <p className="text-xs text-[#ffebee] sm:text-sm leading-snug">
      {p.jabatan}
    </p>
  </div>
</div>

          ))}
        </div>
      </div>

    <div className="flex justify-end">
  <Link
    href="/struktur"
    className="
      group inline-flex items-center gap-2 
      text-xl font-bold text-slate-900
      transition-all duration-200
      hover:text-[#7B0000] hover:-translate-y-0.5
    "
  >
    <span className="relative">
      {/* teks utama */}
      <span className="relative z-10 tracking-wide">
        LIHAT STRUKTUR LEBIH LENGKAP
      </span>
      {/* garis bawah animasi */}
      <span
        className="
          absolute inset-x-0 -bottom-1 h-0.5
          origin-left scale-x-0
          bg-[#7B0000]
          transition-transform duration-200
          group-hover:scale-x-100
        "
      />
    </span>

    <span
      aria-hidden
      className="
        text-3xl leading-none
        transition-transform duration-200
        group-hover:translate-x-1
      "
    >
      ›
    </span>
  </Link>
</div>


    </section>
  );
}
