// src/app/home/components/PendidikanSection.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PENDIDIKAN_LIST } from "../data/home";
import ImagePreviewModal from "./ImagePreviewModal";

export default function PendidikanSection() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeTitle = PENDIDIKAN_LIST[activeIndex] ?? "Pendidikan";
  const activeImage = useMemo(() => {
    // ✅ ganti pola path ini sesuai folder gambar kamu
    // contoh: public/pendidikan/0.png, 1.png, dst
    return `/pendidikan/${activeIndex}.png`;
  }, [activeIndex]);

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 md:px-1">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* KIRI: Gambar ilustrasi (hidden di mobile) */}
        <div className="hidden md:flex justify-center md:justify-start">
          <Image
            src="/pendidikanfoto.png"
            alt="Ilustrasi Pendidikan Desa Tatengesan"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm md:max-w-md object-contain"
          />
        </div>

        {/* KANAN: Judul + list sekolah */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e53935]">
            Pendidikan
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-700">
            Sekolah-sekolah yang ada di Desa Tatengesan.
          </p>

          {/* List sekolah (klik untuk lihat gambar) */}
          <div className="mt-6 space-y-3">
            {PENDIDIKAN_LIST.map((nama, index) => (
              <button
                key={`${nama}-${index}`}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setOpen(true);
                }}
                className="
                  w-full text-left
                  rounded-xl bg-linear-to-r from-[#263238] to-[#455a64]
                  px-6 py-4 text-base font-semibold text-white
                  transition
                  hover:-translate-y-0.5 hover:brightness-110
                  focus:outline-none focus:ring-2 focus:ring-[#e53935]/40
                "
              >
                {nama}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal (reusable) */}
      <ImagePreviewModal
        open={open}
        title={activeTitle}
        imageSrc={activeImage}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
