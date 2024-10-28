import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar({ role }) {
  const router = useRouter();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: `/dashboard/${role}` },
    { name: 'Profile', path: '/profile' },
  ];

  if (role === 'admin') {
    links.push({ name: 'User Management', path: '/dashboard/admin/users' });
    links.push({ name: 'Reports', path: '/dashboard/admin/reports' });
  } else if (role === 'collector') {
    links.push({ name: 'Collection Events', path: '/dashboard/collector/events' });
    links.push({ name: 'Trash Map', path: '/dashboard/collector/map' });
  } else if (role === 'user') {
    links.push({ name: 'Upload Photo', path: '/dashboard/user/upload' });
    links.push({ name: 'My Reports', path: '/dashboard/user/reports' });
  }

  return (
    <aside className="w-64 h-full bg-gray-800 text-white fixed top-0 left-0 flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">
        Sea-Snap
      </div>
      <nav className="flex-grow">
        <ul>
          {links.map((link) => (
            <li key={link.name} className="border-b border-gray-700">
              <Link href={link.path}>
                <a
                  className={`block py-4 px-6 hover:bg-gray-700 ${
                    router.pathname === link.path ? 'bg-gray-700' : ''
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md">
          Logout
        </button>
      </div>
    </aside>
  );
}