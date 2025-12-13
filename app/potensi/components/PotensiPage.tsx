"use client";

import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

// icons
import {
  Flame,
  Sparkles,
  Mountain,
  Users,
  Camera,
  MapPin,
  Leaf,
} from "lucide-react";

import { WISATA_FEATURES, PERTANIAN_ITEMS } from "@/app/potensi/data/potensi";

type TabKey = "pertanian" | "wisata";

export default function PotensiPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("pertanian");

  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      <div className="container mx-auto px-4 pt-6 sm:px-6 lg:px-8 space-y-10">
        {/* ====== TABS AREA ====== */}
        <div className="space-y-3">
          {/* MOBILE: icon grid */}
          <div className="md:hidden flex justify-center">
            <div className="grid grid-cols-2 gap-3">
              <MobileTabIconButton
                label="Pertanian"
                icon={Leaf}
                active={activeTab === "pertanian"}
                onClick={() => setActiveTab("pertanian")}
              />
              <MobileTabIconButton
                label="Wisata"
                icon={Mountain}
                active={activeTab === "wisata"}
                onClick={() => setActiveTab("wisata")}
              />
            </div>
          </div>

          {/* DESKTOP: text tabs */}
          <div className="hidden md:flex justify-center border-b border-slate-200 pb-2">
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <TabButton
                label="Potensi Pertanian"
                active={activeTab === "pertanian"}
                onClick={() => setActiveTab("pertanian")}
              />
              <TabButton
                label="Potensi Wisata"
                active={activeTab === "wisata"}
                onClick={() => setActiveTab("wisata")}
              />
            </div>
          </div>
        </div>

        {/* ====== CONTENT ====== */}
        {activeTab === "pertanian" && <PertanianSection />}
        {activeTab === "wisata" && <WisataSection />}
      </div>
    </main>
  );
}

/* ===========================
   TAB BUTTON (DESKTOP)
   =========================== */

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 sm:px-5 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors duration-200
        ${
          active
            ? "text-slate-900 border-slate-900 bg-white"
            : "text-slate-500 border-transparent hover:text-slate-900 hover:border-slate-300"
        }`}
    >
      {label}
    </button>
  );
}

/* ===========================
   TAB ICON (MOBILE)
   =========================== */

function MobileTabIconButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex flex-col items-center gap-2 rounded-xl px-1.5 py-1.5 text-xs font-medium
        transition-all duration-200
        ${
          active
            ? "bg-[#7B0000] text-white shadow-md shadow-[#7B0000]/40"
            : "bg-[#7B0000]/90 text-white/80 hover:bg-[#7B0000] hover:text-white"
        }
      `}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <span className="leading-tight text-[8px]">{label}</span>
    </button>
  );
}

/* ===========================
      PERTANIAN SECTION
   =========================== */

function PertanianSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
          Potensi Pertanian Desa Tatengesan
        </h1>
        <p className="max-w-3xl text-sm sm:text-base text-slate-700">
          Desa Tatengesan memiliki potensi pertanian dengan komoditas utama
          seperti padi, jagung, kelapa, dan nilam.
        </p>
      </div>

      <div className="rounded-3xl bg-white shadow-sm">
        <div className="relative h-52 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-3xl">
          <Image
            src="/potensi/pertanian-hero.jpg"
            alt="Lahan pertanian"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Pertanian (ZIGZAG) */}
      <div className="space-y-10">
        {PERTANIAN_ITEMS.map((item, idx) => (
          <div
            key={item.nama}
            className={`flex flex-col gap-6 md:gap-10 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative w-full md:w-1/2 h-56 sm:h-64 md:h-72 rounded-3xl overflow-hidden shadow-sm bg-slate-100">
              <Image
                src={item.gambar}
                alt={item.nama}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-2 md:self-center">
              <h3 className="text-xl font-semibold">{item.nama}</h3>
              <p className="text-slate-700">{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===========================
      WISATA SECTION
   =========================== */

const wisataIconMap = {
  flame: Flame,
  sparkles: Sparkles,
  mountain: Mountain,
  users: Users,
  camera: Camera,
  mapPin: MapPin,
  leaf: Leaf,
} as const;

function WisataSection() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 sm:p-8 lg:p-10 space-y-4 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Wisata Hutan Mangrove Desa Tatengesan
            </h1>
            <p className="text-sm sm:text-base text-slate-700">
              Hutan mangrove merupakan potensi wisata alam yang dapat
              dikembangkan sebagai ekowisata dan wisata edukasi lingkungan.
            </p>
          </div>

          <div className="relative p-3
              h-80
              sm:h-96
              md:h-[420px]
              lg:h-[480px]
            ">

            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/mangrove.jpeg"
                alt="Wisata Hutan Mangrove"
                fill
                className="object-cover object-[50%_85%]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Features */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WISATA_FEATURES.map((item) => {
          const Icon = wisataIconMap[item.icon] ?? Camera;

          return (
            <div
              key={item.title}
              className="bg-white p-5 rounded-2xl shadow-sm ring-1 ring-slate-100 space-y-2"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-sky-50 text-sky-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
