import React from 'react';
import mveventdemocracyfestival from "../assets/mveventdemocracyfestival.png";
import mic from "../assets/mic.png";
import pdficon from "../assets/pdficon.png";
import program from "../assets/program.pdf";
function Hero() {
  return (
    <section className="relative w-full bg-[#FFE900] flex items-center justify-center font-sans overflow-hidden">
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center px-4 sm:px-6 py-4 sm:py-5 md:py-5">
        
        {/* --- LEFT SIDE: IMAGE --- */}
        <div className="flex justify-center items-center relative z-10">
          <img 
            src={mveventdemocracyfestival} 
            alt="Democracy Festival Event" 
            className="w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[430px] h-auto object-contain drop-shadow-xl rounded-sm" 
          />
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="relative flex flex-col items-center text-center justify-center w-full h-full min-h-[400px] md:min-h-[500px]">

          {/* BACKGROUND WATERMARK */}
          <div className="absolute rotate-[25deg] -right-[35%] -bottom-[30%] sm:-right-[20%] sm:-bottom-[30%] md:-right-[320px] md:-bottom-[220px] opacity-[0.08] pointer-events-none z-0">
             <img 
               src={mic} 
               alt="Mic Watermark" 
               className="w-[400px] sm:w-[450px] md:w-[750px] h-auto object-contain" 
             />
          </div>

          {/* MAIN TEXT CONTENT */}
          <div className="z-10 flex flex-col items-center space-y-2 md:space-y-4 text-black w-full">
            
            {/* 1. Main Headline Section */}
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.7rem] font-extrabold tracking-tight leading-tight">
                “Bridging the Gap”
              </h1>
              <p className="text-base sm:text-lg md:text-[1.35rem] font-medium leading-snug text-[#1a1a1a]">
                Engaging Youth and Audience <br className="hidden sm:block" />
                for Political Ideals in Modern Times
              </p>
            </div>

            {/* 2. Venue Section */}
            <div className="space-y-2 flex flex-col items-center">
              <span className="text-xs sm:text-sm md:text-base font-medium text-black mb-1">
                Venue
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide">
                IYYAN VALLUVAR ARANGAM
              </h2>
              <div className="text-sm sm:text-base md:text-[1.15rem] font-medium leading-snug text-[#1a1a1a]">
                <p>VALLUVAR KOTTAM, Nungambakkam High Road,</p>
                <p>Nungabakkam, Chennai 600 034.</p>
              </div>
            </div>

            {/* 3. Date & Time Section */}
            <div className="text-lg sm:text-xl md:text-[1.4rem] font-bold space-y-1 ">
              <p className=' font-extrabold text-3xl '>22<span className='text-[1.2rem]'>th</span> March, 2026</p>
              <p>3.00 pm onwards</p>
            </div>

            {/* ==================================================== */}
            {/* 📄 PDF DOWNLOAD BUTTON - PERFECT PLACEMENT */}
            {/* ==================================================== */}
     <a
  href={program}
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 px-3 py-2 rounded-md border border-black hover:bg-[#D31A50] hover:text-white transition-all w-fit cursor-pointer"
>
  <img 
    src={pdficon} 
    alt="Program PDF" 
    className="w-5 h-auto transition-all" 
  />

  <div className="text-left leading-tight">
    <p className="font-semibold uppercase text-xs">Program PDF</p>
  </div>
</a>
            {/* ==================================================== */}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero;