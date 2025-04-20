import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import momodeveloppeur from '../assets/images/momo developpeur.jpg';

function Home() {
  const particlesInit = async (main) => {
    // Loading tsparticles full package
    await loadFull(main);
  };

  return (
    <section className="relative bg-gray-100 min-h-screen p-4 flex items-center justify-center">
      {/* Particules */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: '#f3f4f6' },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#1f2937' },
            shape: {
              type: 'circle',
              stroke: { width: 0 },
              polygon: { nb_sides: 5 },
            },
            opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 4, random: true, anim: { enable: true, speed: 3, size_min: 0.3, sync: false } },
            line_linked: {
              enable: true,
              distance: 120,
              color: '#9CA3AF',
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        }}
        className="absolute inset-0"
      />

      {/* Contenu principal */}
      <div className="relative z-10 text-center">
        {/* Image du développeur */}
        <img
          src={momodeveloppeur}
          alt="momodeveloppeur"
          className="w-60 h-60 rounded-full border-4 border-green mx-auto shadow-lg hover:scale-105 transition-transform duration-300 mt-20"
          />

        {/* Titre principal avec animation */}
        <h1 className="text-3xl font-extrabold mt-8 text-gray-800 animate-bounce">
        I'm Mohamet Diao
          
        </h1>
        <h2 className="text-4xl font-extrabold mt-8 text-gray-800 animate-bounce">
         Welcome to My Portfolio
          
        </h2>
        {/* Description */}
        <p className="text-xl text-gray-600 mt-4 mb-8">
          I am a Fullstack Developer specialized in React, Node.js, and innovative web solutions.
        </p>

        {/* Bouton Call to Action */}
        <Link
          to="http://localhost:3000/projects"
          className="bg-primary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
