"use client";

import ModalShell from "./ModalShell";

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  isLoading: boolean;
};

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  isLoading,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <ModalShell title="Hapus Berita" onClose={onClose}>
      <p className="text-sm text-slate-700">
        Apakah Anda yakin ingin menghapus berita{" "}
        <span className="font-semibold">{title}</span>? Tindakan ini tidak
        dapat dibatalkan.
      </p>

      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          Batal
        </button>
        <button
          type="button"
          disabled={isLoading}
          onClick={onConfirm}
          className="rounded-lg bg-red-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60"
        >
          {isLoading ? "Menghapus..." : "Hapus"}
        </button>
      </div>
    </ModalShell>
  );
}
