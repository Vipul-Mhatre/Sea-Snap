import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-indigo-950 py-4 px-8 shadow-lg flex justify-between items-center text-white">
      <div className="text-2xl font-bold">
        <Link href="/">
          <span className="hover:text-indigo-300">Sea Snap</span>
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link href="/auth/login">
          <span className="hover:underline hover:text-indigo-300">Login</span>
        </Link>
        <Link href="/auth/signup">
          <span className="hover:underline hover:text-indigo-300">Sign Up</span>
        </Link>
      </div>
    </nav>
  );
}