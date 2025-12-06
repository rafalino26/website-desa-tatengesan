// src/app/profil/components/VisiMisiSection.tsx

import { MISI_DESA, VISI_DESA } from "../data/profil";

export default function VisiMisiSection() {
  return (
    <section className="space-y-6">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e53935]">
          Visi & Misi Desa
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Visi */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Visi</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
            {VISI_DESA}
          </p>
        </div>

        {/* Misi */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Misi</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 md:text-base">
            {MISI_DESA.map((misi, idx) => (
              <li key={idx}>• {misi}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
