import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Website Resmi Desa Tatengesan",
  description: "Portal informasi resmi Pemerintah Desa Tatengesan.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main className="min-h-[calc(100vh-200px)] bg-white text-slate-900 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

