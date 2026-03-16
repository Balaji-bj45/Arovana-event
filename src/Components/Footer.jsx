import React from 'react';
// Importing assets based on your previous list
import AEE from '../assets/logos/AEE-white.png';
import AEW from '../assets/logos/AEW-white.png';

import aibswhite from '../assets/logos/aibswhite.png';
import AMW from '../assets/logos/AMW- white.png';
import arovanaipass from '../assets/logos/arovanaipass-white.png';

function Footer() {
  return (
    <footer className="bg-black text-white py-10 font-sans text-xs border-gray-100 border-t-2"> 
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ================= LEFT SECTION (Business Group) ================= */}
          {/* Spans 5 columns on large screens */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-5">
            
            {/* 1. Main Top Logo */}
            <div className="flex flex-col items-center">
              <img 
                src={aibswhite} 
                alt="Arovana Group" 
                className="h-20 w-auto object-contain" 
                // Note: Assuming aibswhite is already white. If not, add 'brightness-0 invert'
              />
             
            </div>

            

            {/* 3. Three Sub-Logos Row */}
            <div className="flex justify-center items-end space-x-8 w-full">
              {/* Media Works */}
              <div className="flex flex-col items-center space-y-1">
                 <img src={AMW} alt="Media Works" className="h-15 w-auto object-contain " />
                 {/* Optional: Add text below if needed, reference image has logos with text inside */}
              </div>

              {/* Engineering Works */}
              <div className="flex flex-col items-center space-y-1">
                 <img src={AEW} alt="Engineering Works" className="h-15 w-auto object-contain " />
              </div>

              {/* Events */}
              <div className="flex flex-col items-center space-y-1">
                 <img src={AEE} alt="Events" className="h-15 w-auto object-contain " />
              </div>
            </div>
            {/* 2. Group Header */}
            <h4 className="text-[12px] text-gray-300 font-bold uppercase tracking-widest mt-2">
              Integrated Brand Solutions Business Group
            </h4>

            {/* 4. Left Contact Info */}
            <div className="text-[10px] text-gray-400 flex gap-2 pt-2">
              <a href="mailto:info@arovanagroup.com" className="hover:text-white transition">info@arovanagroup.com</a>
              <span>|</span>
              <a href="https://www.arovanagroup.com"   target="_blank" className="hover:text-white transition">www.arovanagroup.com</a>
            </div>
          </div>


          {/* ================= RIGHT SECTION (IPASS) ================= */}
          {/* Spans 7 columns on large screens */}
          <div className="lg:col-span-7 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 lg:pl-12 lg:border-l lg:border-gray-900">
            
            {/* 1. IPASS Logo Column */}
            <div className="flex flex-col items-center flex-shrink-0">
               <img 
                 src={arovanaipass} 
                 alt="Arovana IPASS" 
                 className="h-26 w-auto object-contain " 
               />
               
            </div>

            {/* 2. IPASS Text Details Column */}
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-[15px] font-bold uppercase tracking-wide text-white">
                Arovana - Indian Political Activity Support System
              </h3>
              
              <p className="text-[12px] text-gray-400 italic">
                A Subsidiary of <strong className="text-white">AROVANA</strong> Integrated Brand Solutions Pvt. Ltd.
              </p>

              <div className="text-[12px] text-gray-300 leading-relaxed">
                <p>Primus Building, Door No. SP – 7A, Guindy Industrial Estate,</p>
                <p>SIDCO Industrial Estate, Guindy, Chennai - 600 032 . Tamil Nadu, INDIA.</p>
              </div>

              <div className="text-[12px] font-medium text-white pt-1">
                <a href="mailto:24x7@aipass.com" className="hover:text-gray-300 transition">24x7@arovana-ipass.com</a>
                <span className="mx-2 text-gray-500">|</span>
                <a href="https://www.arovana-ipass.com" className="hover:text-gray-300 transition">www.arovana-ipass.com</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;