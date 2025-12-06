import VisiMisiSection from "./VisiMisiSection";
import BaganDesaSection from "./BaganDesaSection";
import SejarahDesaSection from "./SejarahDesaSection";
import LokasiDesaSection from "./LokasiDesaSection";

export default function ProfilPage() {
  return (
    <main>
      {/* Visi & Misi -> ADA background lembut full width */}
      <section className="bg-[#ffe6e6]">
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <VisiMisiSection />
        </div>
      </section>

      {/* Bagan -> TANPA background (putih) */}
      <section>
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <BaganDesaSection />
        </div>
      </section>

      {/* Sejarah -> ADA background lembut lagi */}
      <section className="bg-[#ffeef0]">
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <SejarahDesaSection />
        </div>
      </section>

      {/* Lokasi -> TANPA background */}
      <section>
        <div className="mx-auto max-w-7xl px-4 md:px-1 py-12 md:py-16">
          <LokasiDesaSection />
        </div>
      </section>
    </main>
  );
}
