

import React from 'react';

// Images imported exactly as requested
import peter from "../assets/Debate/peter.png";
import saatai from "../assets/Debate/new.jpeg";
import veerapandian from "../assets/Debate/veerapandian.png";
import narayanatirupathi from "../assets/Debate/narayanatirupathi.png";
import elangovan from "../assets/Debate/elangovan.png";
import aloorshanawaz from "../assets/Debate/aloorshanawaz.png";
import advacatebalu from "../assets/Debate/advacatebalu.png";

function Event() {
  // Data arrays to map through for clean JSX and exact positioning
  const topRowSpeakers = [
    { img: veerapandian, ideology: "COMMUNISM", name: "Veera Pandian" },
    { img: elangovan, ideology: "DRAVIDAM", name: "T K S Elangovan" },
    { img: aloorshanawaz, ideology: "EQUALITY", name: "Aloor Sha Nawaz" },
    { img: narayanatirupathi, ideology: "HINDUTVA", name: "Narayan Tirupathi" },
  ];

  const bottomRowSpeakers = [
    { img: peter, ideology: "NATIONALISM", name: "Peter Alphonse" },
    { img: advacatebalu, ideology: "SOCIAL JUSTICE", name: "Advocate Balu" },
    { img: saatai, ideology: "TAMIL NATIONALISM", name: "Idumbavanam Karthick" },
  ];

  return (
    <div className="min-h-screen bg-[#e2ded1] py-8 px-4 md:px-8 lg:px-16 font-sans text-gray-900 flex flex-col items-center justify-center">
      
      {/* Header Section */}
      <div className="w-full max-w-6xl mx-auto text-center mb-6">
         <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center text-md sm:text-base md:text-lg lg:text-2xl mb-2 sm:mb-2 gap-1 sm:gap-3 tracking-wide">
          <span className="font-bold text-gray-800">EVENING 6.00 PM</span>
          <span className="hidden sm:block text-gray-400">|</span>
          <span className="text-[#D81B38] font-black uppercase text-center">
            IDEOLOGY CONTRIBUTION TO SOCIETY
          </span>
          <span className="hidden sm:block text-gray-400">|</span>
          <span className="font-bold text-gray-800 tracking-widest">DEBATE</span>
        </div>

        {/* Sub-Header / Title Section */}
          <div className="space-y-1 sm:space-y-1 mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-black uppercase tracking-wide text-gray-900">
            One Stage, One Evening
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium uppercase tracking-wide text-gray-800 ">
            To make a big ideological showdown
          </h3>
        </div>

        {/* Description Text (kept exact spelling from the poster) */}
        <p className="text-[#D81B38] text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-snug font-medium">
          Political Leaders with huge followers from different Ideologies, all on the same stage<br className="hidden md:block" />
          to put their best ideology forward for people's mandate..
        </p>
      </div>

      {/* Speakers Grid Section */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-10 mb-6">
        
        {/* Top Row - 4 Speakers */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
          {topRowSpeakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center w-36 md:w-44">
              <div className="w-32 h-40 md:w-40 md:h-48 mb-3 overflow-hidden shadow-sm bg-gray-200">
                <img 
                  src={speaker.img} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h4 className="font-bold text-sm md:text-base text-center uppercase tracking-tight">
                {speaker.ideology}
              </h4>
              <p className="text-sm md:text-base text-center">
                {speaker.name}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 Speakers */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
          {bottomRowSpeakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center w-36 md:w-44">
              <div className="w-32 h-40 md:w-40 md:h-48 mb-3 overflow-hidden shadow-sm bg-gray-200">
                <img 
                  src={speaker.img} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h4 className="font-bold text-sm md:text-base text-center uppercase tracking-tight">
                {speaker.ideology}
              </h4>
              <p className="text-sm md:text-base text-center">
                {speaker.name}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Section (kept exact spelling from the poster) */}
      <div className="w-full max-w-5xl mx-auto text-center">
        <p className="text-[#D81B38] text-base md:text-lg lg:text-xl leading-snug font-medium">
          .. all of which to woo young minds to join their ideology that influence the<br className="hidden lg:block"/>
          Distribution of Power, Decision making Process and Accountabiity within a Political System.
        </p>
      </div>

    </div>
  );
}

export default Event;