import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import momodeveloppeur from '../assets/images/momo developpeur.jpg';  


const About = () => {
  return (
    <div className="py-20 px-8 bg-gray-100">
      <div className="container mx-auto">
        {/* Section Titre */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          À propos de moi
        </h2>

        {/* Section principale */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-12">

          {/* Photo de MoMo développeur */}
          <img
           src={momodeveloppeur}
          alt="momodeveloppeur"
            className="w-48 h-48 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
          />

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Je suis un développeur fullstack passionné avec une expérience dans la création d'applications web modernes. 
              J'aime transformer des idées en réalité grâce à un code propre et optimisé. Mon expertise couvre à la fois le front-end et le back-end, 
              avec une spécialisation dans les technologies suivantes : <span className="text-primary font-semibold">HTML, CSS, JavaScript, React, Next.js, et Node.js.</span> 
              Toujours en quête d'apprentissage, je suis à l'affût des dernières tendances du développement pour offrir des solutions modernes et performantes.
            </p>

            {/* Logos de mes compétences */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center mt-8">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-red-600 text-4xl mb-2 animate-bounce" />
                <p className="text-sm font-medium text-gray-600">HTML5</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-blue-600 text-4xl mb-2 animate-bounce" />
                <p className="text-sm font-medium text-gray-600">CSS3</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-yellow-500 text-4xl mb-2 animate-bounce" />
                <p className="text-sm font-medium text-gray-600">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-blue-400 text-4xl mb-2 animate-bounce" />
                <p className="text-sm font-medium text-gray-600">React</p>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-black text-4xl mb-2 animate-bounce" />
                <p className="text-sm font-medium text-gray-600">Next.js</p>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-green-500 text-4xl mb-2 animate-bounce" />
                <p className="text-sm font-medium text-gray-600">Node.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Citation ou phrase inspirante */}
        <div className="mt-12 text-center">
          <p className="text-xl italic font-light text-gray-500">
            "Le code est un art, et chaque ligne est une étape vers une solution innovante."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
