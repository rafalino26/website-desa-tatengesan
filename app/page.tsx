export default function HomePage() {
  return (
    <div className="space-y-10 md:space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-black/5 bg-linear-to-br from-[#e53935] via-[#f9683a] to-[#ffb74d] text-white shadow-sm">
        <div className="absolute inset-0 " />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:px-10 md:py-14">
          {/* Teks kiri */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffebee]">
              Website Resmi Desa Tatengesan
            </p>
            <h1 className="mt-3 text-2xl font-bold leading-snug md:text-4xl">
              Selamat Datang di Portal Informasi
              <span className="block">Desa Tatengesan</span>
            </h1>
            <p className="mt-3 text-sm text-[#ffebee] md:text-base md:leading-relaxed">
              Menyajikan informasi terkini mengenai pemerintahan desa, data
              penduduk, APBDes, berita kegiatan, dan layanan publik untuk
              masyarakat Desa Tatengesan.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#c62828] shadow-sm transition hover:bg-white">
                Lihat Profil Desa
              </button>
              <button className="rounded-full border border-white/70 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20">
                Berita & Pengumuman
              </button>
            </div>
          </div>

          {/* Foto desa placeholder */}
          <div className="relative ml-auto w-full max-w-sm">
            <div className="aspect-4/3 overflow-hidden rounded-xl border border-white/40 bg-white/10 shadow-lg backdrop-blur-sm" />
            <p className="mt-2 text-[11px] text-[#ffebee]">
              (Nanti bisa diisi foto kantor desa, tugu desa, atau pemandangan.)
            </p>
          </div>
        </div>
      </section>

      {/* MENU CEPAT */}
      <section className="-mt-6 space-y-4 md:-mt-10">
        <div className="mx-auto grid max-w-6xl gap-3 px-1 md:grid-cols-5 md:px-0">
          {[
            {
              title: "Profil Desa",
              desc: "Gambaran umum, visi misi, dan potensi desa.",
            },
            {
              title: "Penduduk",
              desc: "Data penduduk dan demografi Desa Tatengesan.",
            },
            {
              title: "APBDes",
              desc: "Transparansi anggaran dan realisasi APBDes.",
            },
            {
              title: "Berita Desa",
              desc: "Informasi kegiatan dan pengumuman penting.",
            },
            {
              title: "Kontak & Layanan",
              desc: "Informasi layanan dan pengaduan masyarakat.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-black/5 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:px-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#c62828]">
                {item.title}
              </p>
              <p className="mt-1 text-[11px] text-slate-600 md:text-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SAMBUTAN + INFO */}
      <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.3fr,1fr]">
        {/* Sambutan */}
        <article className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm md:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#c62828]">
            Sambutan Kepala Desa
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            Sambutan Kepala Desa Tatengesan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            <span className="font-semibold">Syalom, salam sejahtera bagi kita semua.</span>{" "}
            Melalui website resmi ini, Pemerintah Desa Tatengesan berkomitmen
            untuk menghadirkan informasi yang transparan, akurat, dan dapat
            diakses dengan mudah oleh seluruh masyarakat desa, dimanapun berada.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Kami berharap platform ini dapat menjadi jembatan komunikasi antara
            pemerintah desa dan masyarakat, sekaligus ruang dokumentasi
            pembangunan dan berbagai kegiatan yang berlangsung di Desa
            Tatengesan.
          </p>
          <p className="mt-4 text-sm font-semibold text-slate-900">
            [Nama Kepala Desa]
            <span className="block text-xs font-normal text-slate-500">
              Kepala Desa Tatengesan
            </span>
          </p>
        </article>

        {/* Info Singkat */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#c62828]">
              Sekilas Desa Tatengesan
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Informasi singkat mengenai lokasi, jumlah penduduk, dan potensi
              utama Desa Tatengesan akan ditampilkan di bagian ini.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li>• Lokasi: (isi kecamatan/kabupaten nanti)</li>
              <li>• Jumlah penduduk: (isi data jika sudah ada)</li>
              <li>• Potensi utama: (pertanian, perikanan, pariwisata, dll.)</li>
            </ul>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-black/5 bg-[#fff5f5] p-3 text-sm shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#c62828]">
                Data Penduduk
              </p>
              <p className="mt-1 text-[13px] text-slate-700">
                Ringkasan jumlah penduduk, KK, dan sebaran usia.
              </p>
            </div>
            <div className="rounded-xl border border-black/5 bg-[#fff8e1] p-3 text-sm shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#e65100]">
                APBDes & Pembangunan
              </p>
              <p className="mt-1 text-[13px] text-slate-700">
                Informasi pendapatan & belanja desa.
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* BERITA */}
      <section className="mx-auto max-w-6xl space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#c62828]">
              Berita & Kegiatan
            </p>
            <h2 className="text-lg font-semibold text-slate-900">
              Berita Terbaru Desa Tatengesan
            </h2>
          </div>
          <button className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 md:inline-flex">
            Lihat semua berita
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm"
            >
              <div className="h-24 bg-[#ffe0e0]" />
              <div className="flex flex-1 flex-col p-3">
                <p className="text-[11px] font-medium uppercase tracking-wide text-[#c62828]">
                  Kategori • Tanggal
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">
                  Judul Berita Desa (contoh {i})
                </h3>
                <p className="mt-1 line-clamp-2 text-[13px] text-slate-600">
                  Ringkasan singkat berita akan ditampilkan di sini.
                </p>
                <span className="mt-2 text-[11px] font-medium text-[#c62828]">
                  Baca selengkapnya →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
