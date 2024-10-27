import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 py-4 px-8 shadow-lg flex justify-between items-center text-white">
      <div className="text-2xl font-bold">
        <Link href="/">
          Sea Snap
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link href="/auth/login">
          <span className="hover:underline">Login</span>
        </Link>
        <Link href="/auth/signup">
          <span className="hover:underline">Sign Up</span>
        </Link>
      </div>
    </nav>
  );
}