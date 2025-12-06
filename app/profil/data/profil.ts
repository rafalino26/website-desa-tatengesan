// src/app/profil/data/profil.ts

// === Visi & Misi ===
export const VISI_DESA =
  "Visi desa.";

export const MISI_DESA: string[] = [
  "Misi 1",
  "Misi 2",
  "Misi 3",
  "Misi 4",
  "Misi 5",
  "Misi 6",
];

// === Bagan / Struktur Pemerintahan ===
export const BAGAN_DESA_IMAGE = "/bagan-desa.png";
export const BAGAN_DESA_DESKRIPSI =
  "Gambar struktur pemerintahan.";

// === Sejarah Desa ===
export const SEJARAH_DESA_PARAGRAPHS: string[] = [
  // Paragraf 1 – asal-usul permukiman
  "Orang yang pertama-tama mendiami wilayah Desa Tatengesan adalah sekelompok manusia dari keturunan anak suku Ratahan yang semakin bertambah dan mengalami kesulitan dalam penghidupan. Mereka berpindah dari Ratahan menuju bagian utara, ke daerah perbukitan yang kemudian dikenal dengan sebutan “Kinawunaan Taretetyne” sekitar tahun 1825–1850. Di tempat baru ini mereka dipimpin oleh seorang tokoh bernama Lolatih Lowongan yang oleh masyarakat diberi panggilan Tonaas Kojo.",

  // Paragraf 2 – gangguan orang Mangindano dan perlawanan
  "Pada masa awal, penduduk Tatengesan sering diganggu oleh orang Mangindano yang datang merampok dan membunuh. Serangan-serangan ini begitu sering terjadi sampai-sampai penduduk membuat syair sebagai tanda peringatan bila musuh datang. Di bawah pimpinan Tonaas Kojo, masyarakat melakukan perlawanan dan banyak bukti perjuangan mereka yang masih dikenang, termasuk kisah-kisah tentang pemindahan penduduk ke tempat yang lebih aman serta keberadaan waruga sebagai tempat penyimpanan kepala para Mangindano yang gugur.",

  // Paragraf 3 – asal-usul nama “Tatengesan”
  "Nama Tatengesan sendiri berhubungan dengan sebuah peristiwa di masa lalu. Diceritakan bahwa seorang anak disuruh ibunya mengambil air di sebuah pancuran. Karena hujan deras dan hari menjelang malam, anak itu terlambat kembali sehingga orang-orang cemas dan mencarinya. Ketika anak itu ditemukan sedang menangis, banyak orang yang menyaksikan peristiwa tersebut lalu menyebut tempat itu sebagai “Tatangisan” (dari kata dalam bahasa Ratahan yang berarti menangis). Seiring waktu, sebutan inilah yang kemudian berkembang menjadi Tatengesan.",

  // Paragraf 4 – pemindahan desa ke lokasi sekarang
  "Setelah keadaan mulai aman dari gangguan Mangindano dan pemerintahan desa semakin tertata, wilayah Tatengesan terus berkembang. Sekitar tahun 1866, di bawah kepemimpinan Hukum Tua Thomas Goniwala, daerah yang lama sering dilanda banjir sungai Makalu dan menimbulkan kesangsian bagi penduduk. Selain itu, penduduk juga mulai diserang penyakit malaria. Atas pertimbangan bersama antara pimpinan dan masyarakat, desa kemudian dipindahkan ke arah timur, ke daerah perbukitan yang lebih tinggi dan sehat, yang menjadi lokasi Desa Tatengesan seperti dikenal sekarang."
];

// === Lokasi & Batas Wilayah ===
export const PROFIL_LOKASI = {
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.227720743306!2d124.86818425707537!3d0.9858549054303656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNTknMDguOSJOIDEyNMKwNTInMDUuMSJF!5e0!3m2!1sid!2sid!4v1764754169889!5m2!1sid!2sid",

  batas: {
    utara: "…… (isi batas utara)",
    timur: "…… (isi batas timur)",
    selatan: "…… (isi batas selatan)",
    barat: "…… (isi batas barat)",
  },

  luasWilayah: {
    angka: 345,               // angka saja
    satuan: "Ha",             // misalnya "Ha" atau "km²"
    keterangan: "± 3,45 km² wilayah administratif Desa Tatengesan.",
  },
};
