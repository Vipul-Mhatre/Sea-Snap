"use client";
import Navbar from './components/navbar';
import Link from 'next/link';
import './globals.css';

export default function HomePage() {
  return (
    <>
        <Navbar className="sticky top-0 z-50 bg-white shadow-md" />

      <main className="min-h-screen bg-gray-50 flex flex-col items-center text-gray-800">
        <header className="header min-h-screen w-full relative flex flex-col justify-center items-center">
          <div className="inner-header text-center">
            <h1 className="text-9xl font-bold text-blue-200 mt-4">Welcome to Sea Snap!</h1>
          </div>
          <div className="waves-container absolute bottom-0 left-0 w-full">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0, 172, 193, 0.7)" /> {/* Light blue */}
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 150, 190, 0.5)" /> {/* Medium blue */}
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 120, 160, 0.3)" /> {/* Darker blue */}
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0, 100, 140, 1)" /> {/* Dark blue */}
              </g>
            </svg>
          </div>
          <style jsx>{`
            :root {
              --background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
              --foreground: white;
            }
            body {
              color: var(--foreground);
              background: var(--background);
              font-family: Arial, Helvetica, sans-serif;
              margin: 0;
            }
            .header {
              position: relative;
              text-align: center;
              background: var(--background);
              color: white;
            }
            .waves-container {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              overflow: hidden;
            }
            .waves {
              width: 300%;
              height: 80px;
              margin-left: -100%;
            }
            .parallax {
              animation: move-forever 6s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
            }
            @keyframes move-forever {
              0% {
                transform: translate3d(-90px, 0, 0);
              }
              100% {
                transform: translate3d(85px, 0, 0);
              }
            }
            @media (max-width: 768px) {
              .waves {
                width: 200%;
                height: 60px;
              }
            }
            @media (max-width: 480px) {
              .waves {
                width: 150%;
                height: 40px;
              }
            }
          `}</style>
        </header>

        <section className="w-full px-4 py-12 text-center flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400">
  <h1 className="text-7xl font-semibold mb-6 animate__animated animate__fadeIn">Join the Movement</h1>
  <div className="flex flex-col md:flex-row items-center mt-10">
  <img 
      src="https://imgs.search.brave.com/xwStl6MKxOxYFc0oIhaoHpKCMFZBwUI-5FvFyB3J4vg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iZWFjaC1jbGVh/bnVwLXdpdGgtZW52/aXJvbm1lbnRhbC12/b2x1bnRlZXJzXzM4/MDU1Ny05MjQuanBn/P3NpemU9NjI2JmV4/dD1qcGc" 
      alt="people cleaning" 
      className="w-3/2 h-auto border-4 border-blue-500 rounded animate__animated animate__fadeIn animate__delay-3s"
    />
    <div>
    <p className="text-4xl mb-4 font-bold animate__animated animate__fadeIn animate__delay-1s md:ml-8">
      Together, we can make a difference! Help us identify areas in need of cleanup and inspire others to join our mission. </p>
      <p className="text-4xl mb-6 font-bold animate__animated animate__fadeIn animate__delay-1s md:ml-8">
      Your contribution can turn the tide against ocean pollution and create a cleaner environment for all.
    </p>
    </div>
  </div>
  
  <p className="text-4xl mt-12 animate__animated animate__fadeIn animate__delay-2s">
    By participating, you'll not only help the planet but also join a community of passionate individuals dedicated to 
    preserving our beautiful coastlines.
  </p>
</section>
<section className="w-full px-4 py-12 text-center flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400">
  <h2 className="text-7xl font-semibold mb-6 animate__animated animate__fadeIn">How It Works</h2>
  <div className="flex flex-col md:flex-row gap-10 items-center animate__animated animate__fadeIn animate__delay-1s">
    
    <div className="card bg-white p-6 rounded-lg shadow-lg max-w-xs text-left transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:shadow-2xl hover:shadow-black animate__animated animate__fadeInUp animate__delay-2s">
      <h2 className="text-3xl font-bold mb-4">Step 1:</h2>
      <h3 className="text-3xl font-semibold mb-3">Capture</h3>
      <p className="text-xl mb-4">
        Take photos of trash-affected areas.
      </p>
    </div>

    <div className="card bg-white p-6 rounded-lg shadow-lg max-w-xs text-left transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:shadow-2xl hover:shadow-black animate__animated animate__fadeInUp animate__delay-3s">
      <h2 className="text-3xl font-bold mb-4">Step 2:</h2>
      <h3 className="text-3xl font-semibold mb-3">Report</h3>
      <p className="text-xl mb-4">
        Upload photos, mark the location, and add details.
      </p>
    </div>

    <div className="card bg-white p-6 rounded-lg shadow-lg max-w-xs text-left transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:shadow-2xl hover:shadow-black animate__animated animate__fadeInUp animate__delay-4s">
      <h2 className="text-3xl font-bold mb-4">Step 3:</h2>
      <h3 className="text-3xl font-semibold mb-3">Clean Up</h3>
      <p className="text-xl">
        Volunteer for cleanup events or inspire others to take action.
      </p>
    </div>

    <img src="../public/seasnapdemo.png" alt="demo seasnap" />
  </div>
  
  <p className="text-4xl w-full mt-8 animate__animated animate__fadeIn animate__delay-5s">
    Join hands with organizations and fellow volunteers to plan and participate in cleanup events. Together, we can achieve a sustainable impact!
  </p>
</section>

<section className="bg-blue-100 w-full py-12 text-center flex flex-col justify-center items-center min-h-screen relative overflow-hidden">
  <h2 className="text-7xl font-semibold mb-6 animate__animated animate__fadeIn">Why Use Sea Snap?</h2>
  
  <div className="absolute inset-0 overflow-hidden">
    <div className="bubble bg-blue-800 opacity-20 rounded-full w-32 h-32 animate-pulse absolute -top-60 -left-30"></div>
    <div className="bubble bg-blue-700 opacity-20 rounded-full w-24 h-24 animate-pulse absolute top-30 left-42"></div>
    <div className="bubble bg-blue-400 opacity-20 rounded-full w-36 h-36 animate-pulse absolute top-40 right-20"></div>
    <div className="bubble bg-blue-600 opacity-20 rounded-full w-28 h-28 animate-pulse absolute bottom-10 right-10"></div>
        <div className="bubble bg-blue-700 opacity-20 rounded-full w-24 h-24 animate-pulse absolute top-60 left-72"></div>
    <div className="bubble bg-blue-400 opacity-20 rounded-full w-36 h-36 animate-pulse absolute top-80 right-40"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 w-full px-4 max-w-7xl animate__animated animate__fadeIn animate__delay-1s">

    <div className="card bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-4xl font-bold mb-2">Real-Time Data</h3>
      <h3>Providing real-time data for cleanup efforts.</h3>
    </div>

    <div className="card bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-4xl font-bold mb-2">Targeted Events</h3>
      <h3>Allowing organizations to organize targeted events.</h3>
    </div>

    <div className="card bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-4xl font-bold mb-2">Empowerment</h3>
      <h3>Empowering individuals to contribute to environmental preservation.</h3>
    </div>

    <div className="card bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-4xl font-bold mb-2">Awareness</h3>
      <h3>Raising awareness about the impact of ocean pollution.</h3>
    </div>
  </div>

  <p className="mt-8 text-3xl z-10 text-gray-800">
    Your engagement can make a significant difference in our collective fight against pollution. Let's work together for cleaner oceans!
  </p>

  <style jsx>{`
    .bubble {
      animation: moveBubble 5s infinite alternate ease-in-out;
    }

    @keyframes moveBubble {
      from {
        transform: translateY(0px) translateX(0px) scale(1);
      }
      to {
        transform: translateY(-20px) translateX(10px) scale(1.2);
      }
    `}
  </style>
</section>

<section className="py-12 text-center flex flex-col justify-center items-center min-h-screen">
  <h2 className="text-7xl font-semibold mb-4 animate__animated animate__fadeIn">Get Started Today!</h2>
  <p className="text-3xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
    Join Sea Snap and become part of a community dedicated to keeping our beaches and oceans clean. 
    Register as a user or an organization and make a difference!
  </p>
  <div className="flex justify-center space-x-4">
  <img 
      src="https://imgs.search.brave.com/JSyFMS7v7GL6dsYbfYnk7rZNlzHQA8qzxz7wqYyvVDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hY3RpdmlzdHMt/Y2xlYW5pbmctcG9s/bHV0ZWQtYmVhY2hf/MTIxMTU2NC0zNzUx/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
      className="w-3/2 border-4 border-blue-400 rounded h-auto animate__animated animate__fadeIn animate__delay-3s"
    />

  </div>
  <p className="text-xl mt-4 text-gray-500 animate__animated animate__fadeIn animate__delay-2s">
    Already part of the movement? Log in to share your impact!
  </p>
</section>

        <footer className="w-full bg-gray-800 text-center py-6 text-white">
          &copy; {new Date().getFullYear()} Sea Snap. All rights reserved.
        </footer>
      </main>
    </>
  );
}

// 