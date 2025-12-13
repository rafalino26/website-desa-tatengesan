"use client";

import ModalShell from "./ModalShell";

type ConfirmLogoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
};

export default function ConfirmLogoutModal({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
}: ConfirmLogoutModalProps) {
  if (!isOpen) return null;

  return (
    <ModalShell title="Logout Admin" onClose={onClose}>
      <p className="text-sm text-slate-700">
        Anda akan keluar dari mode{" "}
        <span className="font-semibold">Admin</span>. Untuk menambah
        atau mengedit kegiatan lagi, Anda perlu login kembali.
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
          className="rounded-lg bg-slate-800 px-4 py-1.5 text-sm font-medium text-white hover:bg-slate-900 disabled:opacity-60"
        >
          {isLoading ? "Logout..." : "Logout"}
        </button>
      </div>
    </ModalShell>
  );
}
