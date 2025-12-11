import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";
import type { BeritaTatengesan } from "@prisma/client";

type CardProps = {
  post: BeritaTatengesan;
  isAdmin: boolean;
  onEdit: (post: BeritaTatengesan) => void;
  onDelete: (post: BeritaTatengesan) => void;
  isDeleting: boolean;
};

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>?/gm, "");
}

function formatTanggal(date: Date | string) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BeritaCard({
  post,
  isAdmin,
  onEdit,
  onDelete,
  isDeleting,
}: CardProps) {
  const ringkasanBersih = stripHtml(post.ringkasan ?? "") || stripHtml(post.isi);
  const preview =
    ringkasanBersih.length > 160
      ? ringkasanBersih.slice(0, 160) + "..."
      : ringkasanBersih;

  return (
    <article
      className="relative flex min-h-[150px] flex-col justify-between rounded-2xl
      border border-slate-200 bg-white p-4 shadow-sm transition-all
      hover:-translate-y-0.5 hover:shadow-md"
    >
      {isAdmin && (
        <div className="absolute right-3 top-3 z-10 flex gap-1.5">
          <button
            type="button"
            onClick={() => onEdit(post)}
            className="rounded-lg bg-slate-100 p-1.5 text-[#c20000] shadow-sm hover:bg-slate-200"
            aria-label="Edit berita"
          >
            <Edit size={14} />
          </button>
          <button
            type="button"
            onClick={() => onDelete(post)}
            disabled={isDeleting}
            className="rounded-lg bg-slate-100 p-1.5 text-red-600 shadow-sm hover:bg-slate-200 disabled:opacity-50"
            aria-label="Hapus berita"
          >
            <Trash2 size={14} />
          </button>
        </div>
      )}

      <div className={isAdmin ? "pr-16" : ""}>
        <Link href={`/berita/${post.slug}`} className="group block">
          <h3
            className="line-clamp-2 text-lg font-semibold text-slate-900 transition-colors
            group-hover:text-[#c20000]"
          >
            {post.judul || "Tanpa Judul"}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 text-sm text-slate-600">{preview}</p>
      </div>

      <p className="mt-3 border-t border-slate-100 pt-2 text-xs text-slate-500">
        {formatTanggal(post.createdAt)}
      </p>
    </article>
  );
}
