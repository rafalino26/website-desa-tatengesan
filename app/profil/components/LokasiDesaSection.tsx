// src/app/profil/components/LokasiDesaSection.tsx
import { PROFIL_LOKASI } from "../data/profil";

export default function LokasiDesaSection() {
  const { mapUrl, batas, luasWilayah } = PROFIL_LOKASI;

  return (
    <section id="lokasi-desa" className="space-y-6 scroll-mt-28">
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e53935]">
          Lokasi & Batas Wilayah
        </h2>
        <p className="mt-2 text-sm md:text-base text-slate-700">
          Letak geografis Desa Tatengesan beserta batas-batas wilayahnya.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* PETA */}
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full md:h-80"
          />
        </div>

        {/* KETERANGAN BATAS + LUAS */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">
            Batas & Luas Wilayah Desa
          </h3>

          {/* Batas-batas */}
          <dl className="mt-4 space-y-2 text-sm md:text-base text-slate-700">
            <div className="flex gap-2">
              <dt className="w-20 font-semibold">Utara</dt>
              <dd>: {batas.utara}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 font-semibold">Timur</dt>
              <dd>: {batas.timur}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 font-semibold">Selatan</dt>
              <dd>: {batas.selatan}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 font-semibold">Barat</dt>
              <dd>: {batas.barat}</dd>
            </div>
          </dl>

          {/* Garis pemisah */}
          <hr className="my-4 border-slate-200" />

          {/* Luas wilayah */}
          <div className="  px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Luas Wilayah
            </p>
            <p className="mt-1 text-2xl font-extrabold text-slate-900">
              {luasWilayah.angka} {luasWilayah.satuan}
            </p>
            {luasWilayah.keterangan && (
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                {luasWilayah.keterangan}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
