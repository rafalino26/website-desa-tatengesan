import { GALERI_DESA } from "../data/home";
import Image from "next/image";
import Link from "next/link";

export default function GaleriPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-1 space-y-8 pb-10">

      {/* Judul */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e53935]">
          Galeri Desa
        </h2>
        <p className="mt-2 text-sm md:text-base text-slate-700">
          Dokumentasi kegiatan dan suasana Desa Tatengesan.
        </p>
      </div>

      {/* Grid foto */}
      <div className="grid gap-3 md:grid-cols-3">
        {GALERI_DESA.slice(0, 6).map((foto) => (
          <div
            key={foto.src}
            className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-200"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tombol lihat selengkapnya */}
      <div className="flex justify-center md:justify-end">
        <Link
          href="/galeri"
          className="
            mt-4 group inline-flex items-center gap-2
            text-xl font-bold text-slate-900
            transition-all duration-200
            hover:-translate-y-0.5 hover:text-[#7B0000]
          "
        >
          <span className="relative">
            <span className="relative z-10 tracking-wide">
              LIHAT GALERI LEBIH LENGKAP
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
