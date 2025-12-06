import Link from "next/link";
import type { IconType } from "react-icons";

import {
  FiHome,
  FiTrendingUp,
  FiPieChart,
  FiFileText,
  FiPhoneCall,
} from "react-icons/fi";

type QuickLinkItem = {
  label: string;
  desc: string;
  href: string;
  icon: IconType;
};

const items: QuickLinkItem[] = [
  {
    label: "Profil Desa",
    desc: "Profil desa berisi gambaran menyeluruh tentang desa, termasuk data dasar, potensi sumber daya alam dan manusia, kelembagaan, serta perkembangan desa.",
    href: "/profil",
    icon: FiHome,
  },
  {
    label: "Potensi Desa",
    desc: "Informasi mengenai potensi desa seperti pertanian, perikanan, peternakan, UMKM, dan potensi lain yang menjadi kekuatan ekonomi lokal.",
    href: "/potensi",
    icon: FiTrendingUp,
  },
  {
    label: "APBDes",
    desc: "APBDes menampilkan laporan keuangan desa yang transparan, meliputi pendapatan, belanja, serta realisasi anggaran pembangunan.",
    href: "/apbdes",
    icon: FiPieChart,
  },
  {
    label: "Berita Desa",
    desc: "Berita desa menyajikan informasi terkini mengenai kegiatan pemerintahan, pembangunan, dan acara kemasyarakatan di Desa Tatengesan.",
    href: "/berita",
    icon: FiFileText,
  },
  {
    label: "Kontak & Layanan",
    desc: "Informasi kontak resmi pemerintah desa serta layanan pengaduan untuk mempermudah komunikasi dengan masyarakat.",
    href: "/kontak",
    icon: FiPhoneCall,
  },
];

function QuickLinkCard({ item }: { item: QuickLinkItem }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="mt-10 group flex min-h-[180px] flex-col gap-3 rounded-2xl 
      border border-slate-200 bg-white p-5 transition 
      hover:-translate-y-0.5 hover:border-transparent 
      hover:bg-linear-to-br hover:from-[#e53935] hover:via-[#f9683a] hover:to-[#f4511e]"
    >
      <div className="flex items-start gap-4">
        {/* ICON BULAT */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center 
        rounded-full bg-[#c20000] text-white transition 
        group-hover:bg-white group-hover:text-[#e53935]">
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 transition group-hover:text-white">
            {item.label}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 transition group-hover:text-white/90">
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function QuickLinksSection() {
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3);

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-1">
      <div className="space-y-5">
        {/* BARIS 1: 3 CARD */}
        <div className="grid gap-5 md:grid-cols-3">
          {firstRow.map((item) => (
            <QuickLinkCard key={item.label} item={item} />
          ))}
        </div>

        {/* BARIS 2: 2 CARD DI TENGAH */}
        <div className="grid gap-5 md:grid-cols-2 md:max-w-4xl md:mx-auto">
          {secondRow.map((item) => (
            <QuickLinkCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
