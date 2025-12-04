import HeroSlider from "@/components/home/HeroSlider";
import KadesSection from "@/components/home/KadesSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";
import MapSection from "@/components/home/MapSection";
import StrukturPreview from "@/components/home/StrukturPreview";
import PendudukPreview from "@/components/home/PendudukPreview";
import ApbdesPreview from "@/components/home/ApbdesPreview";
import PendidikanSection from "@/components/home/PendidikanSection";
import RumahIbadahSection from "@/components/home/RumahIbadahSection";
import GaleriPreview from "@/components/home/GaleriPreview";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-28">
      <HeroSlider />
      <KadesSection />
      <QuickLinksSection  />
      <MapSection />
      <StrukturPreview />
      <PendudukPreview />
      <ApbdesPreview />
      <PendidikanSection />
      <RumahIbadahSection />
      <GaleriPreview />
    </div>
  );
}
