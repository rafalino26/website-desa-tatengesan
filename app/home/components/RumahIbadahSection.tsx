import Image from "next/image";
import { RUMAH_IBADAH_LIST } from "../data/home";

export default function RumahIbadahSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 py-6 px-4 md:px-1">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* KIRI: Judul + list rumah ibadah + tombol */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e53935]">
            Rumah Ibadah
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-700">
            Daftar rumah ibadah yang ada di Desa Tatengesan.
          </p>

          <div className="mt-6 space-y-3">
            {RUMAH_IBADAH_LIST.map((nama, index) => (
              <div
                key={`${nama}-${index}`}
                className="rounded-xl bg-linear-to-r from-[#37474f] to-[#607d8b] px-6 py-4 text-base font-semibold text-white"
              >
                {nama}
              </div>
            ))}
          </div>

        </div>

        {/* KANAN: Gambar ilustrasi (hidden di mobile) */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/rumahibadahfoto.png" // ganti sesuai file kamu
            alt="Ilustrasi Rumah Ibadah di Desa Tatengesan"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
