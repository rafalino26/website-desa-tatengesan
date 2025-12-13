// src/app/potensi/data/potensi.ts

// ======================
// PERTANIAN UMUM
// ======================

export type PotensiItemWithImage = {
  nama: string;
  deskripsi: string;
  gambar: string;
};

export const PERTANIAN_ITEMS: PotensiItemWithImage[] = [
  {
    nama: "Padi",
    deskripsi:
      "Padi merupakan tanaman pangan utama yang dibudidayakan oleh masyarakat Desa Tatengesan untuk kebutuhan konsumsi sehari-hari.",
    gambar: "/padi.jpeg",
  },
  {
    nama: "Nilam",
    deskripsi:
      "Nilam menjadi komoditas unggulan yang dimanfaatkan untuk menghasilkan minyak atsiri bernilai ekonomi tinggi.",
    gambar: "/nilam.jpeg",
  },
  {
    nama: "Kelapa",
    deskripsi:
      "Kelapa tumbuh subur di wilayah desa dan dimanfaatkan untuk berbagai kebutuhan rumah tangga dan ekonomi.",
    gambar: "/kelapa.jpeg",
  },
  {
    nama: "Jagung",
    deskripsi:
      "Jagung dibudidayakan sebagai bahan pangan alternatif dan sumber penghasilan tambahan bagi petani desa.",
    gambar: "/jagung.jpeg",
  },
];

// ======================
// WISATA (HUTAN MANGROVE)
// ======================

export type WisataFeature = {
  icon:
    | "flame"
    | "sparkles"
    | "mountain"
    | "users"
    | "camera"
    | "mapPin"
    | "leaf";
  title: string;
  desc: string;
};

export const WISATA_FEATURES: WisataFeature[] = [
  {
    icon: "mountain",
    title: "Pelindung Alami Pesisir",
    desc: "Hutan mangrove berfungsi sebagai benteng alami yang melindungi wilayah pesisir dari abrasi, gelombang laut, angin kencang, serta dampak badai dan banjir rob.",
  },
  {
    icon: "leaf",
    title: "Menjaga Keseimbangan Ekosistem",
    desc: "Mangrove menjadi habitat penting bagi berbagai jenis ikan, kepiting, udang, burung, dan biota lainnya sehingga mendukung keanekaragaman hayati dan keseimbangan ekosistem pesisir.",
  },
  {
    icon: "sparkles",
    title: "Penyerap Karbon Alami",
    desc: "Hutan mangrove memiliki kemampuan tinggi dalam menyerap dan menyimpan karbon sehingga berperan penting dalam mengurangi dampak perubahan iklim dan pemanasan global.",
  },
  {
    icon: "flame",
    title: "Menjaga Kualitas Lingkungan",
    desc: "Akar mangrove mampu menyaring limbah dan sedimen sehingga membantu menjaga kualitas air laut dan lingkungan sekitar tetap bersih dan sehat.",
  },
  {
    icon: "users",
    title: "Potensi Wisata Edukasi & Ekowisata",
    desc: "Hutan mangrove memiliki potensi besar untuk dikembangkan sebagai wisata alam dan wisata edukasi yang meningkatkan kesadaran lingkungan sekaligus menambah pendapatan desa.",
  },
  {
    icon: "mapPin",
    title: "Warisan Alam untuk Generasi Mendatang",
    desc: "Pelestarian hutan mangrove merupakan investasi jangka panjang guna menjaga kelestarian alam dan kesejahteraan generasi masa depan.",
  },
];
