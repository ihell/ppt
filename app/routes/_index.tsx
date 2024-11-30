import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold">Welcome to My Landing Page</h1>
      <p className="mt-4 text-lg">This is an amazing presentation app.</p>
      <Link
        to="about"
        className="mt-8 px-6 py-3 bg-white text-blue-500 rounded shadow hover:bg-gray-100 transition"
      >
        Go to About
      </Link>
    </div>
  );
}
