import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Website Resmi Desa Tatengesan",
  description: "Portal informasi resmi Pemerintah Desa Tatengesan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-200px)] bg-white text-slate-900 px-4 pt-6 md:px-6 md:pt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

