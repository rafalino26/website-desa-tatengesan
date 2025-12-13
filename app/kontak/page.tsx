// src/app/kontak/page.tsx
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Kontak - Desa Tatengesan",
  description: "Informasi kontak resmi Desa Tatengesan.",
};

const KONTAK = {
  alamat: "Desa Tatengesan, Kecamatan Pusomaen, Kabupaten Minahasa Tenggara",
  whatsapp: "isi no wa", // ganti nomor WA (pakai format internasional tanpa +)
  telepon: "isi no wa", // optional (kalau mau beda dari WA)
  email: "isi email",
  jam: "Senin – Jumat, 08.00 – 15.00 WITA",
  mapsLink: "https://www.google.com/maps?q=0.9858549054303656,124.86818425707537",
};

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 pt-6 pb-12 sm:px-6 lg:px-8 space-y-10">
        {/* HERO */}
        <section className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 p-6 sm:p-8 lg:p-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Kontak Desa Tatengesan
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-700">
            Hubungi pemerintah desa untuk informasi dan pelayanan. Silakan gunakan
            WhatsApp atau email resmi berikut.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${KONTAK.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-[#7B0000] text-white text-sm font-semibold hover:bg-[#650000] transition-colors"
            >
              Chat WhatsApp
            </a>

            <a
              href={`mailto:${KONTAK.email}`}
              className="px-5 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-800 hover:bg-white transition-colors"
            >
              Kirim Email
            </a>

            <a
              href={KONTAK.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Lihat Lokasi
            </a>
          </div>
        </section>

        {/* INFORMASI UMUM */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Kartu info */}
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 p-6 sm:p-7 space-y-5">
            <h2 className="text-xl font-bold text-slate-900">Informasi Umum</h2>

            <ul className="space-y-4 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-600 mt-0.5" />
                <span>{KONTAK.alamat}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-slate-600" />
                <span>{KONTAK.telepon}</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-600" />
                <span>{KONTAK.email}</span>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-slate-600" />
                <span>{KONTAK.jam}</span>
              </li>
            </ul>
          </div>

          {/* Kartu catatan singkat */}
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 p-6 sm:p-7">
            <h2 className="text-xl font-bold text-slate-900">Catatan</h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              Untuk respon lebih cepat, silakan gunakan WhatsApp pada jam kerja.
              Pastikan menuliskan nama dan keperluan secara singkat dan jelas.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
