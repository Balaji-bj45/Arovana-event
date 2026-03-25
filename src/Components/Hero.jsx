import React from 'react';
import mveventdemocracyfestival from "../assets/mveventdemocracyfestival.png";
import mic from "../assets/mic.png";
import arovana from "../assets/arovana.png";
import yellowbg from "../assets/yellowbg.png"; // Added new background import

function Hero() {
  return (
    <section className="w-full min-h-screen font-sans flex flex-col relative overflow-hidden">
      
      {/* ========================================= */}
      {/* GLOBAL WATERMARK IMAGE */}
      {/* ========================================= */}
      <div className="absolute top-1/2 -translate-y-1/2 z-10 opacity-20 pointer-events-none
        right-[-60%] xs:right-[-50%] sm:right-[-40%] md:right-[-30%] lg:right-[-20%] xl:right-[-15%]">
        <img 
          src={mic} 
          alt="Watermark" 
          className="w-[200px] xs:w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] h-auto object-contain" 
        />
      </div>

      {/* ========================================= */}
      {/* TOP SECTION: YELLOW BACKGROUND */}
      {/* ========================================= */}
      <div 
        className="w-full flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat
        px-3 py-8 
        xs:px-4 xs:py-10 
        sm:px-6 sm:py-12 
        md:px-8 md:py-14 
        lg:px-10 lg:py-16"
        style={{ backgroundImage: `url(${yellowbg})` }}
      >
        
        {/* Top 2-Column Grid */}
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 items-center relative z-20
          gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-8 xl:gap-12">
          
          {/* Left Column (Logo Only) */}
          <div className="flex flex-col items-center lg:items-start justify-center px-1 xs:px-2 sm:px-4">
            <img 
              src={mveventdemocracyfestival} 
              alt="Democracy Festival Logos" 
              className="h-auto object-contain
                w-[200px] xs:w-[250px] sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[550px]" 
            />
          </div>

          {/* Right Column (Venue, Date, QR, and Title) */}
          <div className="flex flex-col items-center lg:items-center text-center lg:text-center px-1 xs:px-2 sm:px-4
            mt-4 xs:mt-6 sm:mt-8 lg:mt-0 space-y-6 sm:space-y-8">
            
            {/* White Title Headline */}
            <h2 className="font-extrabold leading-tight text-white drop-shadow-md
              text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
              Democracy Festival<br />into a Premium Civic<br/>Experience..
            </h2>
            
            {/* Venue Info */}
            <div className="text-[#1a1a1a] space-y-1">
              <p className="font-normal tracking-widest uppercase text-sm xs:text-base mb-1">
                VENUE :
              </p>
              <h3 className="font-extrabold text-base xs:text-lg sm:text-xl md:text-2xl">
                Grand Imperial (Ground floor)
              </h3>
              <h3 className="font-extrabold text-base xs:text-lg sm:text-xl md:text-2xl">
                Great Ceremonies, Grt convention centre
              </h3>
              <p className="font-medium text-sm xs:text-base sm:text-lg md:text-xl mt-2">
                41, Giriyappa Rd, Drivers Colony,
              </p>
              <p className="font-medium text-sm xs:text-base sm:text-lg md:text-xl">
                T. Nagar, Chennai, Tamil Nadu 600017
              </p>
            </div>

            {/* Date and Time */}
            <div className="text-[#1a1a1a] font-extrabold text-lg xs:text-xl sm:text-2xl md:text-3xl">
              <p>11th April, 2026</p>
              <p>3.00 pm onwards</p>
            </div>

            {/* QR Code Block (Replacing "scanner and content" text with actual function) */}
            <div className="flex flex-col items-center lg:items-end pt-2">
              <div className="bg-white border-[3px] sm:border-[4px] border-[#CC1454] 
                p-1 shadow-xl hover:scale-105 transition-transform duration-300 relative z-30 mb-2">
                <a href="https://forms.gle/v84RiEvnU5xZrAcy6" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://forms.gle/v84RiEvnU5xZrAcy6" 
                    alt="Scan to Register" 
                    className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </a>
              </div>
              
            </div>

          </div>
        </div>

        {/* Bottom Description Paragraph */}
        <div className="w-full max-w-[1000px] text-center text-[#1a1a1a] mt-3 xs:mt-3 sm:mt-4 md:mt-5 z-10 px-1 sm:px-3">
          <p className="text-sm xs:text-base sm:text-lg md:text-2xl leading-relaxed font-medium">
            Maanbumigu Vetpaalar Democracy Festival 2026, is to create a<br className="hidden md:block"/> neutral, informative, and engaging platform that promotes <span className="font-extrabold">voter<br className="hidden md:block"/> awareness, ideological discussions, and democratic participation<br className="hidden md:block"/> ahead of the 2026 Tamil Nadu Elections.</span>
          </p>
        </div>

      </div>

      {/* ========================================= */}
      {/* BOTTOM SECTION: MAGENTA (Unchanged) */}
      {/* ========================================= */}
      <div className="w-full bg-[#D11559] flex flex-col items-center text-white relative
        px-3 py-6
        xs:px-4 xs:py-8
        sm:px-6 sm:py-12
        md:px-8 md:py-14
        lg:px-10 lg:py-16">
        
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] relative z-20
          gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-14">
          
          {/* Left Column (Organizer Info) */}
          <div className="flex flex-col items-center lg:items-center text-center lg:text-center
            space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8
            lg:pr-4 lg:pt-12 xl:pt-20">
            
            {/* Organized By */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-medium mb-1.5 xs:mb-2
                text-[10px] xs:text-xs sm:text-sm">
                Organized by:
              </p>
              <img 
                src={arovana} 
                alt="Arovana Logo" 
                className="h-auto object-contain mb-0.5 xs:mb-1
                  w-[100px] xs:w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px]" 
              />
            </div>

            {/* Website Link */}
            <div>
              <a 
                href="http://www.arovana-ipass.com" 
                target="_blank" 
                rel="noreferrer" 
                className="font-extrabold tracking-wide hover:text-[#FFED00] transition-colors
                  text-xs xs:text-sm sm:text-base md:text-lg">
                www.arovana-ipass.com
              </a>
            </div>

            {/* Program Website */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-medium mb-0.5 xs:mb-1
                text-[10px] xs:text-xs sm:text-sm">
                Program Website
              </p>
              <a 
                href="http://www.mv-aipass.in" 
                target="_blank" 
                rel="noreferrer" 
                className="font-extrabold tracking-wide hover:text-[#FFED00] transition-colors
                  text-sm xs:text-base sm:text-lg md:text-xl">
                www.mv-aipass.in
              </a>
            </div>
          </div>

          {/* Right Column (Program Highlights) */}
          <div className="flex flex-col items-center lg:items-start lg:pl-4 xl:pl-6
            mt-2 xs:mt-4 lg:mt-0">
            
            {/* Program Highlights Badge */}
            <div className="bg-black text-[#FFED00] font-extrabold tracking-wide shadow-lg
              px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2 md:px-6 md:py-2.5
              text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl
              mb-4 xs:mb-5 sm:mb-6 md:mb-8">
              Program Highlights
            </div>

            {/* Highlights List */}
            <div className="space-y-4 xs:space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6
              text-center lg:text-left w-full">
              
              {/* Highlight Item 1 */}
              <div className="flex flex-col space-y-0.5">
                <span className="font-normal text-gray-200
                  text-sm xs:text-base sm:text-lg">
                  Keynote Address
                </span>
                <span className="font-bold leading-tight
                  text-base xs:text-lg sm:text-xl md:text-2xl">
                  On the importance of 100% Voting in Democracy
                </span>
              </div>

              {/* Highlight Item 2 */}
              <div className="flex flex-col space-y-0.5">
                <span className="font-normal text-gray-200
                  text-sm xs:text-base sm:text-lg">
                  Cultural Performances
                </span>
                <span className="font-bold leading-tight
                  text-base xs:text-lg sm:text-xl md:text-2xl">
                  Celebrating the spirit of Indian democracy
                </span>
              </div>

              {/* Highlight Item 3 */}
              <div className="flex flex-col space-y-0.5">
                <span className="font-normal text-gray-200
                  text-sm xs:text-base sm:text-lg">
                  Debate Show
                </span>
                <span className="font-bold leading-tight
                  text-base xs:text-lg sm:text-xl md:text-2xl">
                  "Contribution of Political Ideologies to Society"
                </span>
                <span className="font-bold leading-tight text-gray-100
                  text-xs xs:text-sm sm:text-base md:text-lg">
                  Featuring voices from different political Leaders
                </span>
              </div>

              {/* Highlight Item 4 */}
              <div className="flex flex-col space-y-0.5">
                <span className="font-normal text-gray-200
                  text-sm xs:text-base sm:text-lg">
                  Conclave Discussion
                </span>
                <span className="font-bold leading-tight
                  text-base xs:text-lg sm:text-xl md:text-2xl">
                  "Role of Ideology in Governance"
                </span>
                <span className="font-bold leading-tight text-gray-100
                  text-xs xs:text-sm sm:text-base md:text-lg">
                  With experts from the four pillars of Indian democracy
                </span>
              </div>

              {/* Highlight Item 5 */}
              <div className="pt-1 xs:pt-2 sm:pt-3 md:pt-4">
                <span className="font-bold leading-tight text-gray-100
                  text-lg xs:text-xl sm:text-2xl md:text-3xl">
                  Closing Ceremony
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Centered Elements */}
        <div className="w-full flex flex-col items-center justify-center z-20 text-center
          mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16
          px-2 xs:px-4">
          <h2 className="text-[#FFED00] font-bold leading-snug lg:leading-tight drop-shadow-md max-w-4xl
            text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl
            mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            Do not miss the opportunity to be part of the<br className="hidden sm:block"/> Democratic Celebration.
          </h2>
          <p className="text-[#FFED00] font-bold uppercase
            text-[8px] xs:text-[10px] sm:text-xs md:text-sm
            tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.18em] lg:tracking-[0.2em]">
            AROVANA - INDIAN POLITICAL ACTIVITY SUPPORT SYSTEM ( AIPASS )
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero;