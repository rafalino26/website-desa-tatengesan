import Link from "next/link";
import { MAP_EMBED_URL } from "../data/home";

export default function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-1 space-y-4">
      
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-[#e53935]">
          Peta Desa
        </h2>
        <p className="mt-6 text-base md:text-base text-slate-700">
          Menampilkan Peta Desa Tatengesan menggunakan Google Maps.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <iframe
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full md:h-96"
        />
      </div>

      {/* 🔥 Tombol Lihat Selengkapnya */}
      <div className="flex justify-end">
        <Link
          href="/profil#lokasi-desa"
          className="
            mt-6 group inline-flex items-center gap-2
            text-xl font-bold text-slate-900
            transition-all duration-200
            hover:-translate-y-0.5 hover:text-[#7B0000]
          "
        >
          <span className="relative">
            <span className="relative z-10 tracking-wide">
              LIHAT LOKASI SELENGKAPNYA
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
