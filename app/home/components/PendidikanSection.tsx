import Image from "next/image";
import { PENDIDIKAN_LIST } from "../data/home";

export default function PendidikanSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 md:px-1">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* KIRI: Gambar ilustrasi (hidden di mobile) */}
        <div className="hidden md:flex justify-center md:justify-start">
          <Image
            src="/pendidikanfoto.png" // ganti sesuai file kamu
            alt="Ilustrasi Pendidikan Desa Tatengesan"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm md:max-w-md object-contain"
          />
        </div>

        {/* KANAN: Judul + list sekolah + tombol */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e53935]">
            Pendidikan
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-700">
            Sekolah-sekolah yang ada di Desa Tatengesan.
          </p>

          {/* List sekolah */}
          <div className="mt-6 space-y-3">
          {PENDIDIKAN_LIST.map((nama, index) => (
            <div
              key={`${nama}-${index}`}
              className="rounded-xl bg-linear-to-r from-[#263238] to-[#455a64] px-6 py-4 text-base font-semibold text-white"
            >
              {nama}
            </div>
          ))}
        </div>


          
        </div>
      </div>
    </section>
  );
}
