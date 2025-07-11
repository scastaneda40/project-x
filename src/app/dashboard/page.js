"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "../lib/supabaseClient";
import LogoutButton from "@/components/LogoutButton";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
        setLoading(false);
      }
    };
    getUser();
  }, [router]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Artist Dashboard</h1>
          <p className="text-gray-600">Welcome, {user.email}</p>
        </div>
        <LogoutButton />
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">👤 Profile Info</h2>
          <p className="text-gray-500">
            Edit artist name, bio, profile picture.
          </p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">🎵 Your Drops</h2>
          <p className="text-gray-500">Manage singles, EPs, albums.</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            + Create New Drop
          </button>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">📸 Media Uploads</h2>
          <p className="text-gray-500">Audio, video, lyrics, cover art.</p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">🛍️ Merch Links</h2>
          <p className="text-gray-500">Add and manage merch links for fans.</p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">📈 Analytics</h2>
          <p className="text-gray-500">View plays, downloads, sales data.</p>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">⚙️ Settings</h2>
          <p className="text-gray-500">Account settings, password, billing.</p>
        </div>
      </div>
    </div>
  );
}
