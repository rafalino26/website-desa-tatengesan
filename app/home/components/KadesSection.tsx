import Image from "next/image";

export default function KadesSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-28 px-4 md:px-1">
      {/* JELAJAHI */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#c20000] md:text-4xl">
          Jelajahi Desa Tatengesan
        </h2>
        <p className="mt-10 text-sm text-slate-700 md:text-lg">
          Temukan informasi lengkap tentang Pemerintahan, Penduduk, Potensi,
          Kegiatan, dan layanan desa Tatengesan.
        </p>
      </div>

      {/* SAMBUTAN + FOTO KADES */}
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)]">
        {/* Foto Kades */}
        <div className="flex justify-center">
          <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-[#e53935]/80 bg-white shadow-md md:h-64 md:w-64">
            <Image
              src="/kumtuatatengesan.jpeg"
              alt="Kepala Desa Tatengesan"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Teks Sambutan */}
        <article className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-[#c20000] md:text-4xl">
            Sambutan Kepala Desa
          </h3>
          <p className="mt-2 text-base font-semibold text-slate-900 md:text-lg">
            Jouke Drisje Punusingon
          </p>
          <p className="mt-1 text-xs text-slate-500 md:text-sm">
            Kepala Desa Tatengesan
          </p>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-lg">
            <p>
              <span className="font-semibold">
                Syalom, salam sejahtera bagi kita semua.
              </span>{" "}
              Melalui website resmi ini, Pemerintah Desa Tatengesan
              berkomitmen untuk menghadirkan informasi yang transparan, akurat,
              dan mudah diakses oleh seluruh masyarakat.
            </p>
            <p>
              Website ini diharapkan menjadi jembatan komunikasi antara
              pemerintah desa dan masyarakat, serta wadah dokumentasi
              pembangunan dan berbagai kegiatan yang berlangsung di Desa
              Tatengesan.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
