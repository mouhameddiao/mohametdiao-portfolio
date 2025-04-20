import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLanguage } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-purple-200 via-purple-100 to-purple-300 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contactez-moi</h2>
        <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg text-gray-800">
          {/* Localisation */}
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-gray-900 text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Localisation</h3>
              <p>Dakar, Sénégal</p>
            </div>
          </div>

          {/* Adresse e-mail */}
          <div className="flex items-center mb-6">
            <FaEnvelope className="text-gray-900 text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Adresse e-mail</h3>
              <p>
                <a
                  href="mailto:momoibnibrvhimm2002@gmail.com"
                  className="text-gray-900 hover:underline"
                >
                  momoibnibrvhimm2002@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Numéro de téléphone */}
          <div className="flex items-center mb-6">
            <FaPhone className="text-gray-900 text-3xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Téléphone</h3>
              <p>
                <a
                  href="tel:+221775848783"
                  className="text-gray-900 hover:underline"
                >
                  +221 77 584 87 83
                </a>
              </p>
            </div>
          </div>

          {/* Langues parlées */}
          <div className="flex items-start mb-6">
            <FaLanguage className="text-gray-900 text-3xl mr-4 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold">Langues parlées</h3>
              <ul className="list-disc list-inside">
                <li>Français</li>
                <li>Anglais (couramment)</li>
                <li>Peulh</li>
                <li>Wolof</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
