import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-500 to-teal-600 text-white">
      <h1 className="text-5xl font-bold">About Page</h1>
      <p className="mt-4 text-lg">This is the second page for presentation.</p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-white text-green-500 rounded shadow hover:bg-gray-100 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
