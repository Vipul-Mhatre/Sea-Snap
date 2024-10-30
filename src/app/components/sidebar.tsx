import React from 'react';
import Link from 'next/link';
import User from '../databse/user';

const Sidebar = (user: User) => {

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
    </div>
  );
};

export default Sidebar;