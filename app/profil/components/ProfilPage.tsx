import VisiMisiSection from "./VisiMisiSection";
import BaganDesaSection from "./BaganDesaSection";
import SejarahDesaSection from "./SejarahDesaSection";
import LokasiDesaSection from "./LokasiDesaSection";
import PendudukProfilSection from "./PendudukProfilSection";

export default function ProfilPage() {
  return (
    <main>
      {/* Visi & Misi */}
      <section className="bg-[#ffe6e6]">
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <VisiMisiSection />
        </div>
      </section>

      {/* Bagan */}
      <section>
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <BaganDesaSection />
        </div>
      </section>

      {/* Sejarah */}
      <section className="bg-[#ffeef0]">
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <SejarahDesaSection />
        </div>
      </section>

      {/* === PENDUDUK (baru) === */}
      <section>
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <PendudukProfilSection />
        </div>
      </section>

      {/* Lokasi */}
      <section>
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <LokasiDesaSection />
        </div>
      </section>
    </main>
  );
}
