// src/app/profil/components/SejarahDesaSection.tsx

import { SEJARAH_DESA_PARAGRAPHS } from "../data/profil";

export default function SejarahDesaSection() {
  return (
    <section className="space-y-6">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e53935]">
          Sejarah Desa
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {SEJARAH_DESA_PARAGRAPHS.map((paragraf, idx) => (
          <p
            key={idx}
            className="mb-3 text-sm leading-relaxed text-slate-700 md:text-base last:mb-0"
          >
            {paragraf}
          </p>
        ))}
      </div>
    </section>
  );
}
