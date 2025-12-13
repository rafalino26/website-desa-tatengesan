"use client";

import Image from "next/image";
import { useState } from "react";
import { RUMAH_IBADAH_LIST } from "../data/home";
import ImagePreviewModal from "./ImagePreviewModal";

export default function RumahIbadahSection() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<{ title: string; src: string } | null>(
    null
  );

  return (
    <section className="mx-auto max-w-7xl space-y-8 py-6 px-4 md:px-1">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* KIRI */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e53935]">
            Rumah Ibadah
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-700">
            Daftar rumah ibadah yang ada di Desa Tatengesan.
          </p>

          <div className="mt-6 space-y-3">
            {RUMAH_IBADAH_LIST.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                type="button"
                onClick={() => {
                  setActive({ title: item.name, src: item.image });
                  setOpen(true);
                }}
                className="w-full text-left rounded-xl bg-linear-to-r from-[#37474f] to-[#607d8b]
                  px-6 py-4 text-base font-semibold text-white transition
                  hover:-translate-y-0.5 hover:brightness-110
                  focus:outline-none focus:ring-2 focus:ring-[#e53935]/40"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* KANAN */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/rumahibadahfoto.png"
            alt="Ilustrasi Rumah Ibadah di Desa Tatengesan"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>

      <ImagePreviewModal
        open={open}
        title={active?.title ?? ""}
        imageSrc={active?.src ?? "/rumahibadahfoto.png"}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
