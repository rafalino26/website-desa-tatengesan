import HeroSlider from "@/components/home/HeroSlider";
import KadesSection from "@/components/home/KadesSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-28">
      <HeroSlider />
      <KadesSection />
      <QuickLinksSection />
      {/* section lain (berita, peta, dll) nanti di bawah sini */}
    </div>
  );
}
