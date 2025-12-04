import { MAP_EMBED_URL } from "./data/home";

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
    </section>
  );
}
