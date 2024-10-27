"use client";
import Navbar from './components/navbar';
import Link from 'next/link';
import './globals.css';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center text-gray-800">
        {/* Waves yohoooo*/}
        <header className="header min-h-screen relative flex flex-col justify-center items-center">
          <div className="inner-header text-center">
            <svg version="1.1" className="logo" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
              <path fill="#FFFFFF" stroke="#000000" strokeWidth="10" strokeMiterlimit="10" d="M57,283" />
              <g>
                <path fill="#fff"
                  d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
                C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
                c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7
                c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2
                c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z" />
              </g>
            </svg>
            <h1 className="text-5xl font-bold text-white mt-4">Welcome to Sea Snap!</h1>
          </div>
          <div className="waves-container absolute bottom-0 left-0 w-full">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </header>

         {/* Main Content */}
         <section className="max-w-4xl px-4 py-12 text-center flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-4xl font-semibold mb-6">Join the Movement</h2>
          <p className="text-lg mb-4">
            Together, we can make a difference! Help us identify areas in need of cleanup and inspire others to join our mission.
          </p>
          <Link href="/auth/signup" className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700 transition mb-4">
            Sign Up Now
          </Link>
        </section>

        <section className="max-w-4xl px-4 py-12 text-center flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-4xl font-semibold mb-6">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="text-left">
              <p className="text-lg mb-4">
                Sea Snap empowers users to locate and report trash along coastlines. Here’s how you can participate:
              </p>
              <ul className="list-disc list-inside text-lg">
                <li><strong>Capture:</strong> Take photos of trash-affected areas.</li>
                <li><strong>Report:</strong> Upload photos, mark the location, and add details.</li>
                <li><strong>Clean Up:</strong> Volunteer for cleanup events or inspire others to take action.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-blue-100 w-full py-12 text-center flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-3xl font-semibold mb-4">Why Use Sea Snap?</h2>
          <div className="max-w-3xl mx-auto text-lg">
            <p className="mb-4">Our app offers a platform for citizens, environmental organizations, and community groups to identify and target trash-heavy areas for efficient cleanup efforts.</p>
            <p className="mb-4">Benefits include:</p>
            <ul className="list-disc list-inside text-left px-4">
              <li>Providing real-time data for cleanup efforts</li>
              <li>Allowing organizations to organize targeted events</li>
              <li>Empowering individuals to contribute to environmental preservation</li>
              <li>Raising awareness about the impact of ocean pollution</li>
            </ul>
          </div>
        </section>

        <section className="py-12 text-center flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-3xl font-semibold mb-4">Get Started Today!</h2>
          <p className="text-lg mb-8">
            Join Sea Snap and become part of a community dedicated to keeping our beaches and oceans clean. Register as a user or an organization and make a difference!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/auth/signup" className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700 transition">Sign Up</Link>
            <Link href="/auth/login" className="bg-gray-200 text-blue-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-300 transition">Login</Link>
          </div>
        </section>

        <footer className="w-full bg-gray-800 text-center py-6 text-white">
          &copy; {new Date().getFullYear()} Sea Snap. All rights reserved.
        </footer>
      </main>
    </>
  );
}