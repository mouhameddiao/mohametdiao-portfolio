import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; 

const projects = [
  { 
    title: 'Site Fatimah Food', 
    tech: ['React', 'Node.js', 'MongoDB'], 
    description: 'Une plateforme de Restaurant moderne avec intégration de paiement et gestion de panier en temps réel.',
    link: 'https://khaadeejafood.vercel.app/' 
  },

  { 
    title: 'Site khaadeejaa food', 
    tech: ['React', 'Node.js', 'MongoDB'], 
    description: 'Une plateforme de e-commerce moderne avec intégration de paiement et gestion de panier en temps réel.',
    link: 'https://khaadeejafood.vercel.app/' 
  },
  { 
    title: 'Site KURINJI vetement', 
    tech: ['React', 'Node.js', 'MongoDB'], 
    description: 'Une plateforme de e-commerce moderne avec intégration de paiement et gestion de panier en temps réel.',
    link: 'https://vercel.com/mohamet-diaos-projects/nabufood' 
  },
  { 
    title: 'Site Fatimah Food', 
    tech: ['React', 'Node.js', 'MongoDB'], 
    description: 'Une plateforme de e-commerce moderne avec intégration de paiement et gestion de panier en temps réel.',
    link: 'https://vercel.com/mohamet-diaos-projects/nabufood' 
  },
 
  // Ajoutez  
];

const Projects = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre de la section */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
          Mes Projets
        </h2>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Titre du projet */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex justify-between items-center">
                {project.title}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary">
                  <FaExternalLinkAlt className="ml-2 text-lg hover:text-secondary transition-colors duration-300" />
                </a>
              </h3>

              {/* Description du projet */}
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              {/* Technologies utilisées */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors duration-300 hover:bg-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
