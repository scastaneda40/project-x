"use client";

export const dynamic = "force-dynamic";

import { useRouter, useSearchParams } from "next/navigation";

export default function ConfirmPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Email Confirmation</h1>

      {error ? (
        <>
          <p className="text-red-600">❌ {errorDescription || error}</p>
          <button
            onClick={() => router.push("/signup")}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            Go Back to Sign Up
          </button>
        </>
      ) : (
        <>
          <p className="text-gray-700">
            ✅ Your email has been confirmed! You can now log in.
          </p>
          <button
            onClick={() => router.push("/login")}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Go to Login
          </button>
        </>
      )}
    </div>
  );
}
