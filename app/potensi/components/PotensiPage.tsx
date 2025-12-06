"use client";

import { useState } from "react";
import Image from "next/image";

// icons (semua ini PASTI ada di lucide-react)
import {
  Flame,
  Sparkles,
  Mountain,
  Users,
  Camera,
  MapPin,
  Drumstick,
  Egg,
  Leaf,
} from "lucide-react";

import {
  HORTI_ITEMS,
  PANGAN_ITEMS,
  PETERNAKAN_ITEMS,
  WISATA_FEATURES,
} from "@/app/potensi/data/potensi";

type TabKey = "pertanian" | "peternakan" | "wisata";

export default function PotensiPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("pertanian");

  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      <div className="container mx-auto px-4 pt-6 sm:px-6 lg:px-8 space-y-10">
        {/* Tabs */}
        <div className="flex justify-center border-b border-slate-200 pb-2">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <TabButton
              label="Potensi Pertanian"
              active={activeTab === "pertanian"}
              onClick={() => setActiveTab("pertanian")}
            />
            <TabButton
              label="Potensi Peternakan"
              active={activeTab === "peternakan"}
              onClick={() => setActiveTab("peternakan")}
            />
            <TabButton
              label="Potensi Wisata"
              active={activeTab === "wisata"}
              onClick={() => setActiveTab("wisata")}
            />
          </div>
        </div>

        {/* Content */}
        {activeTab === "pertanian" && <PertanianSection />}
        {activeTab === "peternakan" && <PeternakanSection />}
        {activeTab === "wisata" && <WisataSection />}
      </div>
    </main>
  );
}

/* ===========================
      TAB BUTTON
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
          Desa Tatengesan memiliki potensi besar di sektor pertanian, khususnya
          hortikultura dan tanaman pangan.
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

      {/* Hortikultura */}
      <div className="space-y-10">
        {HORTI_ITEMS.map((item, idx) => (
          <div
            key={item.nama}
            className={`flex flex-col gap-6 md:gap-10 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative w-full md:w-1/2 h-56 sm:h-64 md:h-72 rounded-3xl overflow-hidden shadow-sm">
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

      {/* Pangan */}
      <div className="space-y-10 border-t pt-6">
        {PANGAN_ITEMS.map((item, idx) => (
          <div
            key={item.nama}
            className={`flex flex-col gap-6 md:gap-10 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="relative w-full md:w-1/2 h-56 sm:h-64 md:h-72 rounded-3xl overflow-hidden shadow-sm">
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
      PETERNAKAN SECTION
   =========================== */

const peternakanIconMap = {
  sapi: Drumstick, // ikon pasti ada
  ayam: Egg,
  lainnya: Leaf,
} as const;

function PeternakanSection() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Potensi Peternakan</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PETERNAKAN_ITEMS.map((item) => {
          const Icon = peternakanIconMap[item.icon] ?? Leaf; // fallback aman

          return (
            <div
              key={item.nama}
              className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-slate-100 space-y-3"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-sky-50 text-sky-700">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-base font-semibold">{item.nama}</h3>
              <p className="text-sm text-slate-700">{item.deskripsi}</p>
            </div>
          );
        })}
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
} as const;

function WisataSection() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 sm:p-8 lg:p-10 space-y-4 flex flex-col justify-center">
            <h1 className="text-3xl font-bold">Wisata yang ada di Desa Tatengesan</h1>
            <p className="text-slate-700">
              Penjelasan dan deskripsi singkat mengenai wisata.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                className="px-5 py-2 rounded-full bg-slate-800 text-white text-sm"
              >
                Lihat Lokasi
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                className="px-5 py-2 rounded-full border bg-slate-50 text-sm"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 md:h-full">
            <Image
              src="/potensi/wisata-rano.jpg"
              alt="Wisata Rano Reindang"
              fill
              className="object-cover"
            />
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
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
