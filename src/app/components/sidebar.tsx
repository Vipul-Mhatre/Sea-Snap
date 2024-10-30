import React from 'react';
import Link from 'next/link';
import User from '../databse/user';
import { logout } from '../databse/firebase';

const Sidebar = (user: User) => {

  async function Logout() {
    await logout()
    
  }

  const commonLinks = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },
  ];

  const adminLinks = [
    { name: 'Admin Dashboard', path: '/dashboard/admin' },
    { name: 'Manage Users', path: '/manage-users' },
    { name: 'Reports', path: '/reports' },
  ];

  const collectorLinks = [
    { name: 'Collector Dashboard', path: '/dashboard/collector' },
    { name: 'Event Scheduling', path: '/schedule-events' },
    { name: 'Reports', path: '/collector-reports' },
  ];

  const userLinks = [
    { name: 'User Dashboard', path: '/dashboard/user' },
    { name: 'Upload Image', path: '/upload' },
    { name: 'Volunteer Actions', path: '/volunteer' },
  ];

  let linksToRender = commonLinks;

  if (user.role === 'admin') {
    linksToRender = [...commonLinks, ...adminLinks];
  } else if (user.role === 'collector') {
    linksToRender = [...commonLinks, ...collectorLinks];
  } else if (user.role === 'user') {
    linksToRender = [...commonLinks, ...userLinks];
  }

  return (
    <div className="h-screen w-60 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-6">SeaSnap</h2>
      <ul>
        {linksToRender.map((link) => (
          <li key={link.name} className="mb-4">
            <Link href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={Logout()}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;