// app/apbdes/data/apbdes.ts

export const APBDES_TAHUN_BERJALAN = 2025 as const;

export type ApbdesTahunan = {
  tahun: number;
  pendapatan: number;
  belanja: number;
};

export const APBDES_TAHUNAN: ApbdesTahunan[] = [
  { tahun: 2020, pendapatan: 850_000_000, belanja: 830_000_000 },
  { tahun: 2021, pendapatan: 900_000_000, belanja: 880_000_000 },
  { tahun: 2022, pendapatan: 950_000_000, belanja: 940_000_000 },
  { tahun: 2023, pendapatan: 1_000_000_000, belanja: 980_000_000 },
  { tahun: 2025, pendapatan: 1_050_000_000, belanja: 1_020_000_000 },
];

// ===============================
// STRUKTUR PENDAPATAN TAHUN BERJALAN (2025)
// ===============================

export type ApbdesPendapatanItem = {
  id: string;
  kode: string;
  nama: string;
  jumlah: number;
  keterangan?: string;
};

export const APBDES_PENDAPATAN_2025: ApbdesPendapatanItem[] = [
  {
    id: "p1",
    kode: "4.1.1",
    nama: "Pendapatan Asli Desa (PADes)",
    jumlah: 120_000_000,
    keterangan:
      "Hasil usaha desa, aset desa, dan lain-lain pendapatan asli desa.",
  },
  {
    id: "p2",
    kode: "4.2.1",
    nama: "Dana Desa (DD)",
    jumlah: 650_000_000,
    keterangan: "Transfer dari Pemerintah Pusat.",
  },
  {
    id: "p3",
    kode: "4.2.2",
    nama: "Alokasi Dana Desa (ADD)",
    jumlah: 180_000_000,
    keterangan: "Transfer dari Pemerintah Kabupaten.",
  },
  {
    id: "p4",
    kode: "4.2.3",
    nama: "Bagi Hasil Pajak dan Retribusi",
    jumlah: 60_000_000,
  },
  {
    id: "p5",
    kode: "4.3.1",
    nama: "Lain-lain Pendapatan Desa yang Sah",
    jumlah: 40_000_000,
  },
];

// ===============================
// STRUKTUR BELANJA TAHUN BERJALAN (2025)
// ===============================

export type ApbdesBelanjaItem = {
  id: string;
  kode: string;
  nama: string;
  jumlah: number;
  kelompok:
    | "penyelenggaraan"
    | "pembangunan"
    | "pembinaan"
    | "pemberdayaan"
    | "takTerduga";
};

export const APBDES_BELANJA_2025: ApbdesBelanjaItem[] = [
  {
    id: "b1",
    kode: "5.1",
    nama: "Penyelenggaraan Pemerintahan Desa",
    jumlah: 350_000_000,
    kelompok: "penyelenggaraan",
  },
  {
    id: "b2",
    kode: "5.2",
    nama: "Pelaksanaan Pembangunan Desa",
    jumlah: 420_000_000,
    kelompok: "pembangunan",
  },
  {
    id: "b3",
    kode: "5.3",
    nama: "Pembinaan Kemasyarakatan",
    jumlah: 90_000_000,
    kelompok: "pembinaan",
  },
  {
    id: "b4",
    kode: "5.4",
    nama: "Pemberdayaan Masyarakat",
    jumlah: 110_000_000,
    kelompok: "pemberdayaan",
  },
  {
    id: "b5",
    kode: "5.5",
    nama: "Belanja Tak Terduga",
    jumlah: 50_000_000,
    kelompok: "takTerduga",
  },
];
