"use client";

import { FormEvent, useState, useTransition } from "react";
import ModalShell from "./ModalShell";
import { updateBerita } from "../actions";
import type { BeritaTatengesan } from "@prisma/client";

type EditModalProps = {
  initialData: BeritaTatengesan;
  onClose: () => void;
  onUpdated: (post: BeritaTatengesan) => void;
};

export default function EditBeritaModal({
  initialData,
  onClose,
  onUpdated,
}: EditModalProps) {
  const [judul, setJudul] = useState(initialData.judul);
  const [ringkasan, setRingkasan] = useState(initialData.ringkasan ?? "");
  const [isi, setIsi] = useState(initialData.isi);
  const [published, setPublished] = useState(initialData.published);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!judul.trim() || !isi.trim()) {
      setError("Judul dan isi berita wajib diisi.");
      return;
    }

    startTransition(async () => {
      const result = await updateBerita(initialData.id, {
        judul: judul.trim(),
        isi: isi.trim(),
        ringkasan: ringkasan.trim() || undefined,
        published,
      });

      if (result.success && result.data) {
        onUpdated(result.data);
        onClose();
      } else {
        setError(result.message || "Gagal memperbarui berita.");
      }
    });
  };

  return (
    <ModalShell title="Edit Berita" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800">
            Judul Berita
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#c20000] focus:ring-1 focus:ring-[#c20000]"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800">
            Ringkasan (opsional)
          </label>
          <textarea
            className="h-20 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#c20000] focus:ring-1 focus:ring-[#c20000]"
            value={ringkasan}
            onChange={(e) => setRingkasan(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800">
            Isi Berita
          </label>
          <textarea
            className="h-40 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#c20000] focus:ring-1 focus:ring-[#c20000]"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-[#c20000] focus:ring-[#c20000]"
          />
          Tampilkan berita ini ke publik
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="mt-2 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#c20000] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#a80000] disabled:opacity-60"
          >
            {isPending ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </form>
    </ModalShell>
  );
}
