import React from 'react';
import mveventdemocracyfestival from "../assets/mveventdemocracyfestival.png";
import mic from "../assets/mic.png";
import arovana from "../assets/arovana.png";

function Hero() {
  return (
    <section className="w-full min-h-screen font-sans flex flex-col relative overflow-hidden">
      
      {/* ========================================= */}
      {/* GLOBAL WATERMARK IMAGE */}
      {/* ========================================= */}
      <div className="absolute top-1/2 right-[-35%] sm:right-[-30%] lg:right-[-15%] -translate-y-1/2 z-10 opacity-20 pointer-events-none">
        <img 
          src={mic} 
          alt="Watermark" 
          className="w-[300px] sm:w-[400px] lg:w-[600px] h-auto object-contain" 
        />
      </div>

      {/* ========================================= */}
      {/* TOP SECTION: YELLOW */}
      {/* ========================================= */}
      {/* REDUCED: py-12/20 -> py-6/10 */}
      <div className="w-full bg-[#FFED00] flex justify-center px-4 py-8 sm:px-6 sm:py-12 text-black relative">
        
        {/* REDUCED: gap-16 -> gap-8 */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center relative z-20">
          
          {/* Left Column */}
          <div className="flex flex-col items-center text-center px-2">
            {/* REDUCED: Image size and margin */}
            <img 
              src={mveventdemocracyfestival} 
              alt="Democracy Festival Logos" 
              className="w-[200px] sm:w-[300px] lg:w-[480px] h-auto object-contain mb-4 lg:mb-6" 
            />
            
            <div className="space-y-1">
              <p className="font-bold text-xs sm:text-sm tracking-widest uppercase">Venue :</p>
              {/* REDUCED: Text size */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide leading-tight">
                IYYAN VALLUVAR ARANGAM
              </h2>
              {/* REDUCED: Margins and text size */}
              <div className="text-sm sm:text-base lg:text-lg font-medium leading-snug text-[#1a1a1a] mt-2 mb-4 lg:mb-6">
                <p>VALLUVAR KOTTAM, Nungambakkam High Road,</p>
                <p>Nungabakkam, Chennai 600 034.</p>
              </div>
            </div>

            <div className="text-base sm:text-xl lg:text-2xl font-bold flex flex-wrap items-center justify-center gap-2 lg:gap-4">
              <span>22nd March, 2026</span>
              <span className="hidden sm:inline-block text-2xl font-normal leading-none mb-1">|</span>
              <span>3.00 pm onwards</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center text-center px-2">
            {/* REDUCED: Text size and margin */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight mb-3 text-[#1a1a1a]">
              Invitation to join us<br />as an Audience Delegate
            </h2>
            
            {/* REDUCED: Margin and text size */}
            <div className="text-sm sm:text-base lg:text-[20px] font-medium leading-relaxed text-[#1a1a1a] mb-6 lg:mb-8">
              <p>Journalism & Media Students</p>
              <p>Political Science Students</p>
              <p>Students interested in</p>
              <p>Public Affairs & Governance</p>
            </div>

            <h3 className="text-lg sm:text-xl lg:text-3xl font-extrabold leading-tight mb-4">
              Register Now to Be Part of the<br />Democracy Celebration
            </h3>

            {/* QR Code Block - REDUCED Size */}
            <div className="bg-white border-[6px] border-[#CC1454] p-1 mb-4 shadow-xl hover:scale-105 transition-transform duration-300 relative z-30">
              <a href="https://forms.gle/v84RiEvnU5xZrAcy6" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://forms.gle/v84RiEvnU5xZrAcy6" 
                  alt="Scan to Register" 
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                />
              </a>
            </div>

            <h4 className="font-extrabold text-lg lg:text-xl tracking-wide mb-1">
              SCAN TO REGISTER
            </h4>
            <p className="font-medium text-xs sm:text-sm mb-2">
              ( for program details and participation )
            </p>
            
            <div className="text-xs sm:text-sm lg:text-base font-semibold text-[#1a1a1a] leading-tight">
              <p>Limited Audience Seats</p>
              <p>Registration is Mandatory</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM SECTION: MAGENTA */}
      {/* ========================================= */}
      {/* REDUCED: py-16/24 -> py-8/16 */}
      <div className="w-full bg-[#D11559] flex flex-col items-center px-4 py-8 sm:px-6 sm:py-16 text-white relative">
        
        {/* REDUCED: Gap */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-10 relative z-20">
          
          {/* Left Column (Organizer Info) */}
          {/* REDUCED: space-y */}
          <div className="flex flex-col space-y-6 lg:space-y-8 lg:pr-4 lg:pt-40">
            
            {/* Organized By - LOGO REPLACED HERE */}
            <div>
              <p className="text-xs sm:text-sm mb-2 font-medium">Organized by:</p>
              {/* Image Replacement */}
              <img 
                src={arovana} 
                alt="Arovana Logo" 
                className="w-[140px] sm:w-[180px] lg:w-[220px] h-auto object-contain mb-1" 
              />
              <p className="text-[0.65rem] lg:text-[0.75rem] tracking-[0.15em] font-semibold uppercase mt-1">
                AROVANA - IPASS
              </p>
            </div>

            {/* Links */}
            <div>
              <a href="http://www.arovana-ipass.com" target="_blank" rel="noreferrer" className="font-extrabold text-sm lg:text-lg tracking-wide hover:text-[#FFED00] transition-colors">
                www.arovana-ipass.com
              </a>
            </div>

            <div>
              <p className="text-xs sm:text-sm mb-1 font-medium">Program Website</p>
              <a href="http://www.mv-aipass.in" target="_blank" rel="noreferrer" className="font-extrabold text-base lg:text-xl tracking-wide hover:text-[#FFED00] transition-colors">
                www.mv-aipass.in
              </a>
            </div>

            <div>
              <p className="text-xs sm:text-sm mb-1 font-medium">Telecast Partner:</p>
              <p className="font-extrabold text-lg lg:text-2xl tracking-wide">
                NEWS7 TAMIL
              </p>
            </div>
          </div>

          {/* Right Column (Program Highlights) */}
          <div className="flex flex-col lg:pl-6">
            
            {/* REDUCED: mb-10 -> mb-8 */}
            <div className="bg-black text-[#FFED00] px-4 py-2 sm:px-6 sm:py-2 inline-block self-start font-extrabold text-lg sm:text-xl lg:text-2xl tracking-wide mb-6 lg:mb-8 shadow-lg">
              Program Highlights
            </div>

            {/* REDUCED: space-y-10 -> space-y-6 */}
            <div className="space-y-6 lg:space-y-8">
              {/* Highlight Item 1 */}
              <div className="flex flex-col space-y-0.5">
                <span className="text-base lg:text-lg font-normal text-gray-200">Keynote Address</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">On the importance of 100% Voting in Democracy</span>
              </div>

              {/* Highlight Item 2 */}
              <div className="flex flex-col space-y-0.5">
                <span className="text-base lg:text-lg font-normal text-gray-200">Cultural Performances</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">Celebrating the spirit of Indian democracy</span>
              </div>

              {/* Highlight Item 3 */}
              <div className="flex flex-col space-y-0.5">
                <span className="text-base lg:text-lg font-normal text-gray-200">Debate Show</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">"Contribution of Political Ideologies to Society"</span>
                <span className="text-sm sm:text-lg font-bold leading-tight text-gray-100">Featuring voices from different political Leaders</span>
              </div>

              {/* Highlight Item 4 */}
              <div className="flex flex-col space-y-0.5">
                <span className="text-base lg:text-lg font-normal text-gray-200">Conclave Discussion</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">"Role of Ideology in Governance"</span>
                <span className="text-sm sm:text-lg font-bold leading-tight text-gray-100">With experts from the four pillars of Indian democracy</span>
              </div>

              {/* Highlight Item 5 */}
              <div className="pt-2 lg:pt-4">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-[#FFED00]">Closing Ceremony</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Centered Elements */}
        {/* REDUCED: mt-24/32 -> mt-12 */}
        <div className="w-full mt-12 lg:mt-16 flex flex-col items-center justify-center z-20 px-4 text-center">
          <h2 className="text-[#FFED00] font-bold text-xl sm:text-2xl lg:text-3xl leading-snug lg:leading-tight mb-4 lg:mb-6 max-w-4xl drop-shadow-md">
            Do not miss the opportunity to be part of the<br className="hidden md:block"/> Democratic Celebration.
          </h2>
          <p className="text-[#FFED00] text-[0.6rem] sm:text-xs lg:text-sm font-bold tracking-[0.15em] lg:tracking-[0.2em] uppercase">
            AROVANA - INDIAN POLITICAL ACTIVITY SUPPORT SYSTEM ( AIPASS )
          </p>
        </div>

    

      </div>
    </section>
  )
}

export default Hero;