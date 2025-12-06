// src/app/potensi/data/potensi.ts

// ======================
// PERTANIAN
// ======================

export type PotensiItemWithImage = {
  nama: string;
  deskripsi: string;
  gambar: string;
};

export const HORTI_ITEMS: PotensiItemWithImage[] = [
  {
    nama: "Kubis",
    deskripsi:
      "Kubis adalah salah satu tanaman sayuran utama yang banyak dibudidayakan di Desa Tatengesan.",
    gambar: "/potensi/kubis.jpg",
  },
  {
    nama: "Cabai",
    deskripsi:
      "Cabai menjadi komoditas unggulan yang banyak dimanfaatkan untuk kebutuhan rumah tangga maupun dijual ke pasar.",
    gambar: "/potensi/cabai.jpg",
  },
  {
    nama: "Tomat",
    deskripsi:
      "Tomat dibudidayakan di lahan-lahan hortikultura dan menjadi sumber pendapatan tambahan bagi petani.",
    gambar: "/potensi/tomat.jpg",
  },
  {
    nama: "Daun Bawang & Sayuran Lain",
    deskripsi:
      "Selain kubis dan cabai, petani juga menanam daun bawang dan berbagai sayuran lain untuk kebutuhan lokal.",
    gambar: "/potensi/daun-bawang.jpg",
  },
];

export const PANGAN_ITEMS: PotensiItemWithImage[] = [
  {
    nama: "Padi",
    deskripsi:
      "Padi masih menjadi tanaman pangan penting untuk konsumsi keluarga dan masyarakat desa.",
    gambar: "/potensi/padi.jpg",
  },
  {
    nama: "Jagung",
    deskripsi:
      "Jagung dimanfaatkan sebagai bahan pangan, pakan ternak, dan komoditas jual di tingkat kecamatan.",
    gambar: "/potensi/jagung.jpg",
  },
];

// ======================
// PETERNAKAN
// ======================

export type PeternakanItem = {
  icon: "sapi" | "ayam" | "lainnya";
  nama: string;
  deskripsi: string;
};

export const PETERNAKAN_ITEMS: PeternakanItem[] = [
  {
    icon: "sapi",
    nama: "Ternak Sapi",
    deskripsi:
      "Sapi dipelihara sebagai tabungan jangka panjang dan menghasilkan pupuk kandang untuk lahan pertanian.",
  },
  {
    icon: "ayam",
    nama: "Ayam Kampung",
    deskripsi:
      "Ayam kampung dipelihara hampir di setiap rumah tangga sebagai sumber protein dan tambahan pendapatan.",
  },
  {
    icon: "lainnya",
    nama: "Ternak Babi & Kambing",
    deskripsi:
      "Babi dan kambing mendukung kebutuhan adat istiadat dan menjadi komoditas yang dijual antar desa.",
  },
  
];

// ======================
// WISATA
// ======================

export type WisataFeature = {
  icon: "flame" | "sparkles" | "mountain" | "users" | "camera" | "mapPin";
  title: string;
  desc: string;
};

export const WISATA_FEATURES: WisataFeature[] = [
  {
    icon: "flame",
    title: "keunggulan 1",
    desc: "Kaya mineral & belerang untuk relaksasi.",
  },
  {
    icon: "sparkles",
    title: "keunggulan 2",
    desc: "Perawatan kulit alami yang populer.",
  },
  {
    icon: "mountain",
    title: "keunggulan 3",
    desc: "Uap panas dan perbukitan fotogenik.",
  },
  {
    icon: "users",
    title: "keunggulan 4",
    desc: "Area berendam untuk semua usia.",
  },
  {
    icon: "camera",
    title: "keunggulan 5",
    desc: "Spot foto unik di kolam uap.",
  },
  {
    icon: "mapPin",
    title: "keunggulan 6",
    desc: "Rute jelas, parkir tersedia.",
  },
];
