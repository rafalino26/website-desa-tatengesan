import Image from "next/image";

export default function LayananKesehatanSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-6 px-4 md:px-1">
      {/* Judul */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e53935]">
          Layanan Kesehatan
        </h2>
        <p className="mt-2 text-sm md:text-base text-slate-700">
          Fasilitas layanan kesehatan yang tersedia di Desa Tatengesan.
        </p>
      </div>

      {/* CARD UTAMA */}
      <div
        className="
          rounded-3xl border border-slate-200 bg-white shadow-sm
          transition hover:-translate-y-0.5 hover:shadow-md
        "
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* FOTO (KIRI) */}
          <div className="relative h-96 sm:h-80 md:h-full overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
            <Image
              src="/puskesmas.jpeg"
              alt="Puskesmas Tatengesan"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* TEKS (KANAN) */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Puskesmas Tatengesan
            </h3>

            <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700">
              Puskesmas Tatengesan merupakan fasilitas layanan kesehatan utama
              yang melayani kebutuhan kesehatan dasar masyarakat Desa Tatengesan,
              mulai dari pelayanan pemeriksaan kesehatan, imunisasi, hingga
              layanan promotif dan preventif bagi masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
