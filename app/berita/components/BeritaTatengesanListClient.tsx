"use client";

import React, { useState, useTransition } from "react";
import type { BeritaTatengesan } from "@prisma/client";
import { Plus, LogOut } from "lucide-react";
import { adminLogout, deleteBerita } from "../actions";

import BeritaCard from "./BeritaCard";
import AdminLoginModal from "./AdminLoginModal";
import AddBeritaModal from "./AddBeritaModal";
import EditBeritaModal from "./EditBeritaModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ConfirmLogoutModal from "./ConfirmLogoutModal";

type Props = {
  initialPosts: BeritaTatengesan[];
  initialIsAdmin: boolean;
};

export default function BeritaTatengesanListClient({
  initialPosts,
  initialIsAdmin,
}: Props) {
  const [posts, setPosts] = useState(initialPosts);
  const [isDeletePending, startDeleteTransition] = useTransition();
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const [isAdmin, setIsAdmin] = useState(initialIsAdmin);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [isLogoutPending, startLogoutTransition] = useTransition();

  const [selectedPost, setSelectedPost] = useState<BeritaTatengesan | null>(
    null
  );

  const openEdit = (post: BeritaTatengesan) => {
    setSelectedPost(post);
    setIsEditOpen(true);
  };

  const openDeleteConfirm = (post: BeritaTatengesan) => {
    setSelectedPost(post);
    setIsConfirmOpen(true);
  };

  const executeDelete = () => {
    if (!selectedPost) return;
    const id = selectedPost.id;

    setIsConfirmOpen(false);
    setDeleteError(null);

    startDeleteTransition(async () => {
      const result = await deleteBerita(id);
      if (result.success) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
        setSelectedPost(null);
      } else {
        setDeleteError(result.message || "Gagal menghapus berita.");
      }
    });
  };

  const handleCreated = (post: BeritaTatengesan) => {
    setPosts((prev) => [post, ...prev]);
  };

  const handleUpdated = (post: BeritaTatengesan) => {
    setPosts((prev) => prev.map((p) => (p.id === post.id ? post : p)));
  };

  const handleClickTambah = () => {
    if (!isAdmin) {
      setIsLoginOpen(true);
    } else {
      setIsAddOpen(true);
    }
  };

  // klik tombol logout => buka modal konfirmasi
  const handleLogoutClick = () => {
    setIsLogoutConfirmOpen(true);
  };

  // di-confirm di modal => beneran logout
  const handleLogoutConfirm = () => {
    startLogoutTransition(async () => {
      await adminLogout();
      setIsAdmin(false);
      setIsLogoutConfirmOpen(false);
    });
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-3">
        {isAdmin ? (
          <p className="text-xs text-slate-500">
            Anda login sebagai admin.
          </p>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-2">
          {isAdmin && (
            <button
              type="button"
              onClick={handleLogoutClick}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300
                px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <LogOut size={14} />
              Logout
            </button>
          )}

          <button
            type="button"
            onClick={handleClickTambah}
            className="inline-flex items-center gap-1.5 rounded-full 
              bg-[#c20000] px-4 py-2 text-sm font-semibold text-white 
              shadow-sm ring-1 ring-black/5 hover:bg-[#a80000]"
          >
            <Plus size={16} />
            Tambah Kegiatan Baru
          </button>
        </div>
      </div>

      {deleteError && (
        <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
          {deleteError}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BeritaCard
              key={post.id}
              post={post}
              isAdmin={isAdmin}
              onEdit={openEdit}
              onDelete={openDeleteConfirm}
              isDeleting={isDeletePending && selectedPost?.id === post.id}
            />
          ))
        ) : (
          <p className="md:col-span-3 py-10 text-center text-slate-500">
            Belum ada kegiatan untuk ditampilkan.
          </p>
        )}
      </div>

      {/* Modal login admin */}
      {isLoginOpen && (
        <AdminLoginModal
          onClose={() => setIsLoginOpen(false)}
          onLoggedIn={() => setIsAdmin(true)}
        />
      )}

      {/* Modal tambah */}
      {isAddOpen && (
        <AddBeritaModal
          onClose={() => setIsAddOpen(false)}
          onCreated={handleCreated}
        />
      )}

      {/* Modal edit */}
      {isEditOpen && selectedPost && (
        <EditBeritaModal
          initialData={selectedPost}
          onClose={() => {
            setIsEditOpen(false);
            setSelectedPost(null);
          }}
          onUpdated={handleUpdated}
        />
      )}

      {/* Modal konfirmasi hapus */}
      <DeleteConfirmationModal
        isOpen={isConfirmOpen}
        onClose={() => {
          setIsConfirmOpen(false);
          setSelectedPost(null);
        }}
        onConfirm={executeDelete}
        title={selectedPost?.judul || "Tanpa judul"}
        isLoading={isDeletePending}
      />

      {/* Modal konfirmasi logout */}
      <ConfirmLogoutModal
        isOpen={isLogoutConfirmOpen}
        onClose={() => setIsLogoutConfirmOpen(false)}
        onConfirm={handleLogoutConfirm}
        isLoading={isLogoutPending}
      />
    </div>
  );
}
