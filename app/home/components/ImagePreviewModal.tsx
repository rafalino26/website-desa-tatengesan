// src/components/ImagePreviewModal.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

type Props = {
  open: boolean;
  title: string;
  imageSrc: string;
  onClose: () => void;
};

export default function ImagePreviewModal({
  open,
  title,
  imageSrc,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* backdrop */}
      <button
        aria-label="Tutup modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      {/* dialog */}
      <div className="relative z-10 mx-auto flex min-h-full max-w-4xl items-center justify-center p-4">
        <div className="w-full overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
          {/* header */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
            >
              Tutup
            </button>
          </div>

          {/* image */}
          <div className="p-4 sm:p-5">
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-video w-full">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />
              </div>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-600">
              Klik area gelap atau tekan <span className="font-semibold">ESC</span> untuk menutup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
