"use client";

import Link from "next/link";
import Image from "next/image";
import { PENDUDUK_STATS } from "../data/home";
import { AnimatedNumber } from "./AnimatedNumber";

export default function PendudukPreview() {
  return (
    <section className="mx-auto max-w-7xl space-y-4 px-4 md:px-1">
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-[#e53935]">
          Administrasi Penduduk
        </h2>
        <p className="mt-6 max-w-3xl text-sm text-slate-700 md:text-base">
          Informasi singkat terkait kependudukan sebagai gambaran pelayanan
          publik yang efektif dan efisien di Desa Tatengesan.
        </p>
      </div>

      {/* MOBILE: grid icon 3x2 */}
      <div className="md:hidden">
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 text-center">
          {PENDUDUK_STATS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <div className="h-12 w-12">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <AnimatedNumber
                value={item.value}
                className="text-2xl font-extrabold text-slate-900"
              />
              <div className="text-xs font-medium text-slate-700">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP: icon kiri, label tengah, angka full-height kanan */}
      <div className="hidden gap-4 md:grid md:grid-cols-2">
        {PENDUDUK_STATS.map((item) => (
          <div
            key={item.label}
            className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
          >
            <div className="flex h-18 items-center gap-4 pl-4 pr-0">
              {/* Icon kiri */}
              <div className="flex h-16 w-16 items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain"
                />
              </div>

              {/* Label tengah */}
              <div className="flex-1">
                <p className="text-xl font-bold text-slate-800">
                  {item.label}
                </p>
              </div>

              {/* Angka kanan */}
              <div
                className="
                  flex h-full min-w-[140px] items-center justify-center
                  bg-linear-to-r from-[#8b0000] to-[#e53935]
                  text-3xl font-extrabold text-white
                  rounded-r-xl
                "
              >
                <AnimatedNumber value={item.value} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lihat data selengkapnya */}
      <div className="flex justify-end">
        <Link
          href="/statistik"
          className="
            mt-6 group inline-flex items-center gap-2
            text-xl font-bold text-slate-900
            transition-all duration-200
            hover:-translate-y-0.5 hover:text-[#7B0000]
          "
        >
          <span className="relative">
            <span className="relative z-10 tracking-wide">
              LIHAT PENDUDUK LEBIH LENGKAP
            </span>
            <span
              className="
                absolute inset-x-0 -bottom-1 h-0.5
                origin-left scale-x-0 bg-[#7B0000]
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
