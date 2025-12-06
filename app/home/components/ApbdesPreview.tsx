"use client";

import Link from "next/link";
import Image from "next/image";
import { APBDES_PREVIEW } from "../data/home";
import { AnimatedNumber } from "./AnimatedNumber";

const parseRupiah = (str: string) =>
  Number(str.replace(/[^\d]/g, "")); // ambil hanya angka

const formatRupiah = (val: number) =>
  new Intl.NumberFormat("id-ID").format(val);

export default function ApbdesPreview() {
  const pendapatanNum = parseRupiah(APBDES_PREVIEW.pendapatan);
  const belanjaNum = parseRupiah(APBDES_PREVIEW.belanja);

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 md:px-1">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* KIRI: Teks + kartu APBDes + tombol */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#e53935]">
            APBDes Desa Tatengesan
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-700">
            Gambaran singkat pendapatan dan belanja desa tahun berjalan.
          </p>

          {/* Kartu pendapatan & belanja */}
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#c20000]">
                Pendapatan Desa
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                Rp{" "}
                <AnimatedNumber
                  value={pendapatanNum}
                  format={formatRupiah}
                />
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Total pendapatan desa dari berbagai sumber dana.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#c20000]">
                Belanja Desa
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                Rp{" "}
                <AnimatedNumber
                  value={belanjaNum}
                  format={formatRupiah}
                />
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Realisasi belanja desa untuk program dan kegiatan pembangunan.
              </p>
            </div>
          </div>

          {/* Tombol lihat APBDes selengkapnya */}
          <div className="mt-8 flex justify-start">
            <Link
              href="/apbdes"
              className="
                group inline-flex items-center gap-2
                text-xl font-bold text-slate-900
                transition-all duration-200
                hover:-translate-y-0.5 hover:text-[#7B0000]
              "
            >
              <span className="relative">
                <span className="relative z-10 tracking-wide">
                  LIHAT APBDES LEBIH LENGKAP
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
        </div>

        {/* KANAN: Gambar ilustrasi */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/kurvalagi.png"
            alt="Ilustrasi APBDes Desa Tatengesan"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
