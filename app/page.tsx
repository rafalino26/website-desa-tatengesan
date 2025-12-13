// app/page.tsx
import HeroSlider from "@/app/home/components/HeroSlider";
import KadesSection from "@/app/home/components/KadesSection";
import QuickLinksSection from "@/app/home/components/QuickLinksSection";
import MapSection from "@/app/home/components/MapSection";
import StrukturPreview from "@/app/home/components/StrukturPreview";
import PendudukPreview from "@/app/home/components/PendudukPreview";
import PendidikanSection from "@/app/home/components/PendidikanSection";
import RumahIbadahSection from "@/app/home/components/RumahIbadahSection";
import GaleriPreview from "@/app/home/components/GaleriPreview";
import LayananKesehatanSection from "@/app/home/components/LayananKesehatanSection";


export default function HomePage() {
  return (
     <div className="space-y-20 md:space-y-28">
      {/* Hero: ada padding di mobile, full-bleed di desktop */}
      <div className="py-4 md:py-0 px-4 md:px-0">
        <HeroSlider />
      </div>

      <KadesSection />
      <QuickLinksSection />
      <MapSection />
      <StrukturPreview />
      <PendudukPreview />
      <PendidikanSection />
      <RumahIbadahSection />
      <LayananKesehatanSection />
      <GaleriPreview />
    </div>
  );
}
