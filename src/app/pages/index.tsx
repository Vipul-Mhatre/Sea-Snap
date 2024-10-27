import Navbar from '../components/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center text-gray-800">
        <header className="text-center py-12 bg-gradient-to-br from-blue-500 to-green-400 text-white w-full">
          <h1 className="text-5xl font-bold mb-4">Welcome to Sea Snap!</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Join us in making our beaches and oceans cleaner by reporting and pinpointing areas impacted by trash. Sea Snap allows anyone to contribute to the betterment of our environment.
          </p>
        </header>

        <section className="max-w-4xl px-4 py-12 text-center">
          <h2 className="text-4xl font-semibold mb-6">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <Image src="/beach-cleanup.jpg" alt="Beach Cleanup" width={400} height={250} className="rounded-lg shadow-md"/>
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

        <section className="bg-blue-100 w-full py-12 text-center">
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

        <section className="py-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started Today!</h2>
          <p className="text-lg mb-8">
            Join Sea Snap and become part of a community dedicated to keeping our beaches and oceans clean. Register as a user or an organization and make a difference!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/auth/signup">
              <a className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700 transition">Sign Up</a>
            </Link>
            <Link href="/auth/login">
              <a className="bg-gray-200 text-blue-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-300 transition">Login</a>
            </Link>
          </div>
        </section>

        <footer className="w-full bg-gray-800 text-center py-6 text-white">
          &copy; {new Date().getFullYear()} Sea Snap. All rights reserved.
        </footer>
      </main>
    </>
  );
}