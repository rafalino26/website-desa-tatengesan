"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil" },
  { label: "Penduduk", href: "/penduduk" },
  { label: "APBDes", href: "/apbdes" },
  { label: "Berita", href: "/berita" },
  { label: "Tentang", href: "/Tentang" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <>
      <header className="sticky top-0 z-30 bg-linear-to-br from-[#e53935] via-[#f9683a] to-[#f4511e] text-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-1">
          {/* KIRI (mobile: hamburger + logo, desktop: logo saja) */}
          <div className="flex items-center gap-3">
            {/* MOBILE MENU BUTTON - kiri */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 p-1.5 text-white shadow-sm hover:bg-white/20 md:hidden"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5H12"
                  />
                )}
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="leading-tight">
                <p className="text-md font-semibold text-white">
                  Desa Tatengesan
                </p>
                <p className="text-[11px] font-semibold text-white/80">
                  Website Resmi Pemerintah Desa
                </p>
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative pb-1 text-md font-semibold text-white/90 transition hover:text-white"
                >
                  {item.label}

                  {/* ACTIVE UNDERLINE */}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-white" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR + OVERLAY (selalu ada di DOM, animasi pakai class) */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Overlay hitam */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar kiri */}
        <div
          className={`
            relative h-full w-64 bg-linear-to-br from-[#e53935] via-[#f9683a] to-[#f4511e] p-4 shadow-xl
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Desa Tatengesan
              </p>
              <p className="text-[11px] font-semibold text-white/80">
                Menu Navigasi
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-white/10 p-1 text-white hover:bg-white/20"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-2 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* FLOATING CTA – hanya di halaman Beranda */}
      {isHome && (
        <Link
          href="/kontak"
          className="fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 rounded-full bg-linear-to-br from-[#e53935] via-[#f9683a] to-[#f4511e] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:brightness-110 md:bottom-6 md:right-6 md:z-30"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs">
            📞
          </span>
          <span>Hubungi Kami</span>
        </Link>
      )}
    </>
  );
}
