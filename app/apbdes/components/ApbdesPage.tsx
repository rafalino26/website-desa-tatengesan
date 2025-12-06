"use client";

import { AnimatedNumber } from "@/app/home/components/AnimatedNumber";
import {
  APBDES_TAHUNAN,
  APBDES_TAHUN_BERJALAN,
  APBDES_PENDAPATAN_2025,
  APBDES_BELANJA_2025,
} from "../data/apbdes";
import type { ApbdesBelanjaItem } from "../data/apbdes";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const formatRupiah = (val: number) =>
  new Intl.NumberFormat("id-ID").format(val);

const parseNumberSafe = (val: number | undefined | null) => val ?? 0;

// warna-warna chart
const BAR_PENDAPATAN = "#16a34a"; // hijau
const BAR_BELANJA = "#dc2626"; // merah
const PIE_COLORS = ["#0f766e", "#22c55e", "#eab308", "#f97316", "#ef4444"];

// === helper untuk pie belanja per kelompok ===
type BelanjaKelompokSummary = {
  nama: string;
  value: number;
};

const BELANJA_LABEL_MAP: Record<ApbdesBelanjaItem["kelompok"], string> = {
  penyelenggaraan: "Penyelenggaraan Pemdes",
  pembangunan: "Pembangunan Desa",
  pembinaan: "Pembinaan Kemasyarakatan",
  pemberdayaan: "Pemberdayaan Masyarakat",
  takTerduga: "Belanja Tak Terduga",
};

function computeBelanjaByKelompok(
  items: ApbdesBelanjaItem[]
): BelanjaKelompokSummary[] {
  const map = new Map<ApbdesBelanjaItem["kelompok"], BelanjaKelompokSummary>();

  for (const item of items) {
    const key = item.kelompok;
    if (!map.has(key)) {
      map.set(key, { nama: BELANJA_LABEL_MAP[key], value: 0 });
    }
    map.get(key)!.value += item.jumlah;
  }

  return Array.from(map.values());
}

// helper untuk formatter tooltip (handle number, string, array)
function tooltipValueToNumber(value: unknown): number {
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number(value.replace(/[^\d]/g, "")) || 0;
  if (Array.isArray(value) && value.length > 0) {
    const first = value[0];
    if (typeof first === "number") return first;
    if (typeof first === "string")
      return Number(first.replace(/[^\d]/g, "")) || 0;
  }
  return 0;
}

export default function ApbdesPage() {
  const tahunBerjalanData = APBDES_TAHUNAN.find(
    (t) => t.tahun === APBDES_TAHUN_BERJALAN
  );

  const totalPendapatan = parseNumberSafe(tahunBerjalanData?.pendapatan);
  const totalBelanja = parseNumberSafe(tahunBerjalanData?.belanja);
  const selisih = totalPendapatan - totalBelanja;

  const totalPendapatanRinci = APBDES_PENDAPATAN_2025.reduce(
    (sum, item) => sum + item.jumlah,
    0
  );
  const totalBelanjaRinci = APBDES_BELANJA_2025.reduce(
    (sum, item) => sum + item.jumlah,
    0
  );

  const belanjaByKelompok = computeBelanjaByKelompok(APBDES_BELANJA_2025);

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8 space-y-10">
        {/* HERO + RINGKASAN */}
        <section className="space-y-6">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c20000]">
              Keuangan Desa Tatengesan
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              APBDes Tahun {APBDES_TAHUN_BERJALAN}
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-700">
              Halaman ini menampilkan gambaran umum Anggaran Pendapatan dan
              Belanja Desa (APBDes) Desa Tatengesan, termasuk tren pendapatan
              dan belanja beberapa tahun terakhir serta rincian struktur
              pendapatan dan belanja tahun berjalan.
            </p>
          </div>

          {/* Kartu ringkasan */}
          <div className="grid gap-4 sm:grid-cols-3">
            <SummaryCard
              label="Total Pendapatan"
              highlight="Pendapatan Desa"
              value={totalPendapatan}
              variant="green"
            />
            <SummaryCard
              label="Total Belanja"
              highlight="Belanja Desa"
              value={totalBelanja}
              variant="red"
            />
            <SummaryCard
              label={selisih >= 0 ? "Sisa Lebih (SiLPA)" : "Defisit Anggaran"}
              highlight={
                selisih >= 0 ? "Surplus / SiLPA Sementara" : "Kekurangan Anggaran"
              }
              value={Math.abs(selisih)}
              variant={selisih >= 0 ? "blue" : "red"}
            />
          </div>
        </section>

        {/* GRAFIK 5 TAHUN TERAKHIR */}
        <section className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                Pendapatan & Belanja Desa 5 Tahun Terakhir
              </h2>
              <p className="text-sm text-slate-600">
                Membantu melihat tren kenaikan pendapatan dan belanja desa dari
                tahun ke tahun.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              *Data contoh – dapat disesuaikan dengan realisasi APBDes.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={APBDES_TAHUNAN} margin={{ top: 10, right: 20 }}>
                  <CartesianGrid
                    stroke="#E5E7EB"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="tahun"
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    tickLine={false}
                    axisLine={{ stroke: "#E5E7EB" }}
                  />
                  <YAxis
                    tickFormatter={(v) => `${v / 1_000_000} Jt`}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    tickLine={false}
                    axisLine={{ stroke: "#E5E7EB" }}
                  />
                  <Tooltip
                    formatter={(value: unknown) => {
                      const num = tooltipValueToNumber(value);
                      return `Rp ${formatRupiah(num)}`;
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="pendapatan"
                    name="Pendapatan"
                    fill={BAR_PENDAPATAN}
                    radius={[6, 6, 0, 0]}
                    barSize={28}
                  />
                  <Bar
                    dataKey="belanja"
                    name="Belanja"
                    fill={BAR_BELANJA}
                    radius={[6, 6, 0, 0]}
                    barSize={28}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* GRID 2 KOLOM: STRUKTUR PENDAPATAN & PIE BELANJA */}
        <section className="grid gap-6 lg:grid-cols-2">
          {/* STRUKTUR PENDAPATAN */}
          <div className="space-y-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                  Struktur Pendapatan Tahun {APBDES_TAHUN_BERJALAN}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Ringkasan sumber pendapatan desa berdasarkan kelompok utama.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  Total Pendapatan
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Rp {formatRupiah(totalPendapatanRinci)}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-100">
              <table className="min-w-full divide-y divide-slate-100 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Kode
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Uraian
                    </th>
                    <th className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {APBDES_PENDAPATAN_2025.map((item) => (
                    <tr key={item.id}>
                      <td className="px-3 py-2 text-xs font-medium text-slate-700">
                        {item.kode}
                      </td>
                      <td className="px-3 py-2">
                        <p className="text-xs sm:text-sm font-medium text-slate-900">
                          {item.nama}
                        </p>
                        {item.keterangan && (
                          <p className="mt-0.5 text-[11px] text-slate-500">
                            {item.keterangan}
                          </p>
                        )}
                      </td>
                      <td className="px-3 py-2 text-right text-xs sm:text-sm text-slate-900">
                        Rp {formatRupiah(item.jumlah)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50">
                  <tr>
                    <td className="px-3 py-2" />
                    <td className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Total Pendapatan
                    </td>
                    <td className="px-3 py-2 text-right text-xs sm:text-sm font-semibold text-slate-900">
                      Rp {formatRupiah(totalPendapatanRinci)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* PIE BELANJA */}
          <div className="space-y-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                  Struktur Belanja Tahun {APBDES_TAHUN_BERJALAN}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Persentase penggunaan anggaran berdasarkan kelompok belanja.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  Total Belanja
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Rp {formatRupiah(totalBelanjaRinci)}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={belanjaByKelompok}
                      dataKey="value"
                      nameKey="nama"
                      innerRadius="50%"
                      outerRadius="80%"
                      paddingAngle={2}
                    >
                      {belanjaByKelompok.map((entry, index) => (
                        <Cell
                          key={entry.nama}
                          fill={PIE_COLORS[index % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: unknown) => {
                        const num = tooltipValueToNumber(value);
                        return `Rp ${formatRupiah(num)}`;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                {belanjaByKelompok.map((item, index) => {
                  const persen =
                    totalBelanjaRinci > 0
                      ? (item.value / totalBelanjaRinci) * 100
                      : 0;
                  return (
                    <div
                      key={item.nama}
                      className="flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{
                            backgroundColor:
                              PIE_COLORS[index % PIE_COLORS.length],
                          }}
                        />
                        <span className="text-slate-700">{item.nama}</span>
                      </div>
                      <span className="text-slate-900">
                        {persen.toFixed(1)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* RINCIAN BELANJA (TABEL) */}
        <section className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                Rincian Belanja Desa Tahun {APBDES_TAHUN_BERJALAN}
              </h2>
              <p className="text-sm text-slate-600">
                Daftar program dan kegiatan berdasarkan kelompok belanja beserta
                nilai anggaran.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              *Contoh kategori; dapat disesuaikan dengan rincian APBDes resmi.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
            <div className="max-h-[420px] overflow-auto">
              <table className="min-w-full divide-y divide-slate-100 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Kode
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Uraian Belanja
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Kelompok
                    </th>
                    <th className="px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {APBDES_BELANJA_2025.map((item) => (
                    <tr key={item.id}>
                      <td className="px-3 py-2 text-xs font-medium text-slate-700">
                        {item.kode}
                      </td>
                      <td className="px-3 py-2">
                        <p className="text-xs sm:text-sm font-medium text-slate-900">
                          {item.nama}
                        </p>
                      </td>
                      <td className="px-3 py-2 text-xs text-slate-600">
                        {labelKelompok(item.kelompok)}
                      </td>
                      <td className="px-3 py-2 text-right text-xs sm:text-sm text-slate-900">
                        Rp {formatRupiah(item.jumlah)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50">
                  <tr>
                    <td className="px-3 py-2" />
                    <td className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Total Belanja
                    </td>
                    <td className="px-3 py-2" />
                    <td className="px-3 py-2 text-right text-xs sm:text-sm font-semibold text-slate-900">
                      Rp {formatRupiah(totalBelanjaRinci)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ===========================
   KOMPONEN KECIL & UTIL
   =========================== */

function SummaryCard({
  label,
  highlight,
  value,
  variant,
}: {
  label: string;
  highlight: string;
  value: number;
  variant: "green" | "red" | "blue";
}) {
  const colorMap: Record<typeof variant, string> = {
    green: "from-emerald-500/10 to-emerald-500/0 border-emerald-500/30",
    red: "from-red-500/10 to-red-500/0 border-red-500/30",
    blue: "from-sky-500/10 to-sky-500/0 border-sky-500/30",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white p-4 shadow-sm
      bg-linear-to-b ${colorMap[variant]}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-xs text-slate-500">{highlight}</p>
      <p className="mt-1 text-xl font-bold text-slate-900">
        Rp <AnimatedNumber value={value} format={formatRupiah} />
      </p>
    </div>
  );
}

function labelKelompok(
  kelompok:
    | "penyelenggaraan"
    | "pembangunan"
    | "pembinaan"
    | "pemberdayaan"
    | "takTerduga"
): string {
  switch (kelompok) {
    case "penyelenggaraan":
      return "Penyelenggaraan Pemdes";
    case "pembangunan":
      return "Pembangunan Desa";
    case "pembinaan":
      return "Pembinaan Kemasyarakatan";
    case "pemberdayaan":
      return "Pemberdayaan Masyarakat";
    case "takTerduga":
      return "Belanja Tak Terduga";
    default:
      return kelompok;
  }
}
