// src/data/home.ts

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.227720743306!2d124.86818425707537!3d0.9858549054303656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNTknMDguOSJOIDEyNMKwNTInMDUuMSJF!5e0!3m2!1sen!2sid!4v1764754169889!5m2!1sen!2sid" ; // isi pake embed URL Tatengesan

export const STRUKTUR_DESA = [
  {
    nama: "Jouke Drisje Punusingon",
    jabatan: "Hukum Tua",
    foto: "/kumtuatatengesan.jpeg",
  },
  {
    nama: "Arie Sandy Rautoy",
    jabatan: "PLT. Sekretaris Desa",
    foto: "/ariesandy.jpeg",
  },
  {
    nama: "Fera F. Langi",
    jabatan: "Kaur Umum",
    foto: "/feralangi.jpeg",
  },
  {
    nama: "Rozalia Wungkana",
    jabatan: "Kaur Keuangan",
    foto: "/struktur/kades.jpg",
  },
  {
    nama: "Jefry Wahongan",
    jabatan: "Kaur Perencanaan",
    foto: "/struktur/sekdes.jpg",
  },
  {
    nama: "Arthur Wawongan",
    jabatan: "Kasie Pemerintahan",
    foto: "/struktur/kaur-keuangan.jpg",
  },
  {
    nama: "Arie Sandy Rautoy",
    jabatan: "Kasie Kesejahteraan",
    foto: "/ariesandy.jpeg",
  },
  {
    nama: "Fatimah Manumpil",
    jabatan: "Kasie Pelayanan",
    foto: "/struktur/sekdes.jpg",
  },
  {
    nama: "Rini Kalalo",
    jabatan: "Kepala Jaga I",
    foto: "/rinikalalo.jpeg",
  }, 
  {
    nama: "Chandra Maringka",
    jabatan: "Kepala Jaga II",
    foto: "/chandramaringka.jpeg",
  }, 
  {
    nama: "Alfani Silom",
    jabatan: "Kepala Jaga III",
    foto: "/alfanisilom.jpeg",
  }, 
  {
    nama: "Fajri Malingkas",
    jabatan: "Kepala Jaga IV",
    foto: "/fajrimalingkas.jpeg",
  }, 
  // tambah sendiri kalau perlu
];

export const PENDUDUK_STATS = [
  {
    label: "Laki - Laki",
    value: 349,
    icon: "/pria.png", // ganti path sesuai asetmu
  },
  {
    label: "Penduduk",
    value: 639,
    icon: "/penduduk.png",
  },
  {
    label: "Perempuan",
    value: 290,
    icon: "/wanita.png",
  },
  {
    label: "Kepala Keluarga",
    value: 209,
    icon: "/kepalakeluarga.png",
  },
  {
    label: "Jumlah Jaga",
    value: 4,
    icon: "/keluarga.png",
  },
];



export type NamedImageItem = {
  name: string;
  image: string; // path di /public
};

export const PENDIDIKAN_LIST: NamedImageItem[] = [
  { name: "TK Mutiara Tatengesan", image: "/tkmutiara.jpeg" },
  { name: "TK GMIM Ferat Tatengesan", image: "/tkferat.jpeg" },
  { name: "SD GMIM 361 Tatengesan", image: "/sdgmim.jpeg" },
  { name: "SD Inpres Tatengesan", image: "/sdinpres.jpeg" },
];

export const RUMAH_IBADAH_LIST: NamedImageItem[] = [
  { name: "GMIM Imanuel Tatengesan Makalu", image: "/gmim.jpeg" },
  { name: "GPdI Shekina Tatengesan", image: "/gpdi.jpeg" },
  { name: "Gereja Penyebaran Injil Jemaat Kapernaum Tatengesan", image: "/kapernaum.jpeg" },
  { name: "Masjid Al-Muhajirin Tatengesan", image: "/masjid.jpeg" },
];


export const GALERI_DESA = [
  { src: "/galeri/1.jpg", alt: "Kegiatan desa 1" },
  { src: "/galeri/2.jpg", alt: "Kegiatan desa 2" },
  { src: "/galeri/3.jpg", alt: "Kegiatan desa 3" },
  { src: "/galeri/4.jpg", alt: "Kegiatan desa 4" },
  { src: "/galeri/5.jpg", alt: "Kegiatan desa 5" },
  { src: "/galeri/6.jpg", alt: "Kegiatan desa 6" },
];
