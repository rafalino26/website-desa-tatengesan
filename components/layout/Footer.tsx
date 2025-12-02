import Link from "next/link";

const footerNavItems = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil" },
  { label: "Penduduk", href: "/penduduk" },
  { label: "APBDes", href: "/apbdes" },
  { label: "Berita", href: "/berita" },
  { label: "Tentang", href: "/Tentang" },
];

export default function Footer() {
  return (
    <footer className="mt-12 bg-linear-to-br from-[#e53935] via-[#f9683a] to-[#f4511e] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:flex-row md:justify-between md:px-1">
        {/* Kolom kiri: info desa */}
        <div className="max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
            Pemerintah Desa Tatengesan
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Website Resmi Desa Tatengesan
          </h2>
          <p className="mt-2 text-sm text-white/85">
            Media informasi resmi mengenai profil desa, pemerintahan, data
            pembangunan, dan layanan kepada masyarakat Desa Tatengesan.
          </p>
        </div>

        {/* Kolom kanan: navigasi + kontak */}
        <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
          {/* Navigasi */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">
              Navigasi
            </h3>
            <ul className="mt-2 space-y-1.5">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-semibold text-white/90 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">
              Kontak
            </h3>
            <ul className="mt-2 space-y-1.5 text-white/85">
              <li>Alamat: (isi alamat desa nanti)</li>
              <li>Telepon: (isi nomor)</li>
              <li>Email: (isi email resmi)</li>
            </ul>
          </div>

          {/* Lainnya */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">
              Lainnya
            </h3>
            <ul className="mt-2 space-y-1.5">
              <li>
                <Link
                  href="/apbdes"
                  className="font-semibold text-white/90 hover:text-white hover:underline"
                >
                  Transparansi APBDes
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="font-semibold text-white/90 hover:text-white hover:underline"
                >
                  Layanan &amp; Pengaduan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-xs text-white/80 md:flex-row md:px-1">
          <p>© {new Date().getFullYear()} Pemerintah Desa Tatengesan.</p>
          <p>Developed by [Nama Kamu].</p>
        </div>
      </div>
    </footer>
  );
}
