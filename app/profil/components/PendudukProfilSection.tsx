"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AnimatedNumber } from "@/app/home/components/AnimatedNumber";
import { PENDUDUK_STATS } from "@/app/home/data/home";
import { PENDUDUK_BY_JAGA } from "../data/profil";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Palette warna pie
const PIE_COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#E34234",
  "#F3A0F2",
  "#A0E6F3",
  "#F3E7A0",
  "#A0F3AD",
];

export default function PendudukProfilSection() {
  // Animasi chart baru jalan saat discroll ke bagian ini
  const chartsRef = useRef<HTMLDivElement | null>(null);
  const [animateCharts, setAnimateCharts] = useState(false);

  useEffect(() => {
    if (!chartsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimateCharts(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(chartsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="data-penduduk" className="space-y-8">
      {/* Judul & deskripsi */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e53935]">
          Data Penduduk
        </h2>
      </div>

      {/* Kartu angka penduduk */}
      <div className="space-y-4 rounded-2xl bg-slate-50 p-4 md:p-6">
        {/* MOBILE: grid 3x2 */}
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

        {/* DESKTOP: icon kiri, label tengah, angka di kanan */}
        <div className="hidden gap-4 md:grid md:grid-cols-2">
          {PENDUDUK_STATS.map((item) => (
            <div
              key={item.label}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex h-18 items-center gap-4 pl-4 pr-0">
                <div className="flex h-16 w-16 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xl font-bold text-slate-800">
                    {item.label}
                  </p>
                </div>
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

        {/* Tombol menuju statistik / section lain */}
        <div className="flex justify-end">
          <Link
            href="/profil#data-penduduk"
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
      </div>

      {/* ====== GRAFIK (REVISI) ====== */}
      <div ref={chartsRef} className="space-y-8">
        {/* Pie Jaga di tengah sendiri */}
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <h3 className="text-sm font-semibold text-slate-800 md:text-base text-center">
            Distribusi Penduduk per Jaga
          </h3>

          <div className="mt-4 h-72">
            {animateCharts && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PENDUDUK_BY_JAGA}
                    dataKey="value"
                    nameKey="name"
                    outerRadius="80%"
                    label
                    animationBegin={0}
                    animationDuration={1200}
                  >
                    {PENDUDUK_BY_JAGA.map((entry, index) => (
                      <Cell
                        key={`cell-jaga-${entry.name}`}
                        fill={PIE_COLORS[index % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Legend custom */}
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs md:text-sm">
            {PENDUDUK_BY_JAGA.map((item, index) => (
              <div
                key={`legend-jaga-${item.name}`}
                className="inline-flex items-center gap-2"
              >
                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: PIE_COLORS[index % PIE_COLORS.length],
                  }}
                />
                <span className="text-slate-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Card teks (Profesi & Agama) */}
        <div className="grid gap-5 md:grid-cols-2 md:max-w-4xl md:mx-auto">
          <InfoCard
            title="Distribusi Profesi"
            desc="Pekerjaan masyarakat di Tatengesan mayoritasnya petani, sisanya nelayan, ASN, dan karyawan swasta."
          />
          <InfoCard
            title="Distribusi Agama"
            desc="Agama di Desa Tatengesan terdiri dari Kristen dan Muslim, namun mayoritas penduduk beragama Muslim."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        group flex min-h-[180px] flex-col gap-3 rounded-2xl
        border border-slate-200 bg-white p-5 transition
        hover:-translate-y-0.5 hover:border-transparent
        hover:bg-linear-to-br hover:from-[#e53935] hover:via-[#f9683a] hover:to-[#f4511e]
      "
    >
      <div className="flex items-start gap-4">
        {/* ICON BULAT */}
        <div
          className="
            flex h-12 w-12 shrink-0 items-center justify-center
            rounded-full bg-[#c20000] text-white transition
            group-hover:bg-white group-hover:text-[#e53935]
          "
        >
          <span className="text-xl font-extrabold">i</span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 transition group-hover:text-white/90">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
