"use client";

import { FormEvent, useState, useTransition } from "react";
import ModalShell from "./ModalShell";
import { adminLogin } from "../actions";

type LoginModalProps = {
  onClose: () => void;
  onLoggedIn: () => void;
};

export default function AdminLoginModal({
  onClose,
  onLoggedIn,
}: LoginModalProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    startTransition(async () => {
      const result = await adminLogin(password);

      if (result.success) {
        onLoggedIn();
        onClose();
      } else {
        setError(result.message || "Gagal login admin.");
      }
    });
  };

  return (
    <ModalShell title="Login Admin Berita" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-slate-700">
          Masukkan password admin untuk mengelola berita Desa Tatengesan.
        </p>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800">
            Password Admin
          </label>
          <input
            type="password"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#c20000] focus:ring-1 focus:ring-[#c20000]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

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
            {isPending ? "Memverifikasi..." : "Login"}
          </button>
        </div>
      </form>
    </ModalShell>
  );
}
