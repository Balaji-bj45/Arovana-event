import React from 'react';
import gandhi from "../assets/gandhi.png";
import sathya from "../assets/archana.jpeg";
import jamis from "../assets/jamis.png";
import toshila from "../assets/toshila.png";
function About() {
  return (
    <>
   <section className="w-full bg-[#0B1C3E] pt-10 md:pt-12 lg:pt-10 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
  {/* items-end forces both columns to align to the absolute bottom */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-12 items-end">
    
    {/* --- LEFT SIDE: TEXT CONTENT --- */}
    {/* Added bottom padding (pb) here instead of the section, so text has spacing but the image doesn't */}
   <div className="lg:col-span-8 text-white space-y-1 text-sm md:text-base leading-7 md:leading-8 text-justify opacity-95 pb-10 md:pb-12 lg:pb-16">
      
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4 tracking-wide text-center lg:text-left">
    About the Event ...
  </h2>

  <p>
    "Maanbumigu Vetpaalar" Event is an initiative by <span className="font-bold">AROVANA INDIAN POLITICAL ACTIVITY SUPPORT SYSTEM (AIPASS)</span>, an <span className="font-bold">AROVANA GROUP COMPANY</span>.
  </p>

  <p>
    Drawing inspiration from renowned <span className="font-bold">political festivals of Europe's and Denmark's</span>, this event <span className="font-bold">Maanbumigu Vetpaalar</span>, is being introduced as a <span className="font-bold">Democracy Festival</span> and <span className="font-bold">Festival of Diplomacy</span>, a first time initiative and a novel concept into the political landscape of <span className="font-bold">Tamil Nadu</span>.
  </p>

  <p>
    An effort to bring Citizens and Politicians shoulder to shoulder, serving as a beacon of unity, transcending barriers that often divide leaders of different Ideologies and the public, <span className="font-bold">Maanbumigu Vetpaalar</span> will have lively and spirited <span className="font-bold">Discussions, Debates & Conclaves</span> on various political ideologies and its importance in a <span className="font-bold">Democratic System</span> and that lie at the core of Tamil Nadu's societal fabric.
  </p>

  <p>
    "<span className="font-bold">Maanbumigu Vetpaalar</span>" paves the way for a <span className="font-bold">informed decision making</span> and a <span className="font-bold">joyous celebration of democracy</span> before the actual election. This event not only encourages the youth to actively participate, but also underlines the vital role of youth & public involvement in sculpting the future of Tamil Nadu.
  </p>

</div>

    

    {/* --- RIGHT SIDE: STATUE IMAGE --- */}
    {/* justify-center (horizontal center) + items-end (vertical bottom) */}
    <div className="lg:col-span-4 flex justify-center items-end h-full mt-8 lg:mt-0">
        <img 
        src={gandhi}
        alt="Statue Silhouette" 
        /* object-bottom guarantees the image base rests flat on the container floor */
        className="w-2/3 sm:w-1/2 md:max-w-[320px] lg:w-full lg:max-w-full h-auto object-contain object-bottom drop-shadow-2xl"
        />
    </div>

  </div>
</section>
    <section className="w-full bg-[#cc0224] text-white py-3 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center font-sans overflow-hidden">
      
      {/* Container for Max-Width & Layout Alignment */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-6">
        
        {/* LEFT SECTION: Main Speaker & Details */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 md:gap-4 flex-1">
          
          {/* Main Speaker Image */}
         <div className="flex-shrink-0 relative w-40 sm:w-48 lg:w-56">
  
  {/* Image */}
  <img 
    src={sathya} 
    alt="Tmt. Archana Patnaik, IAS" 
    className="w-full h-auto "
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xl p-2 rounded-sm">
    <span className="text-white text-center font-bold uppercase tracking-widest text-[10px] sm:text-xs leading-tight">
      Probable <br/>
      To Be <br/>
      Confirmed
    </span>
  </div>

</div>

          {/* Main Speaker Text Details */}
          <div className="flex flex-col justify-center space-y-2 lg:space-y-3 mt-2 sm:mt-8">
            <p className="text-base sm:text-sm md:text-base lg:text-lg tracking-wide uppercase text-white/90">
              Evening <span className="font-bold mx-1 text-white">4.00 PM</span> 
              <span className="mx-2 hidden sm:inline-block">|</span> 
              <span className="block sm:inline mt-1 sm:mt-0">Inauguration by</span>
            </p>

           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] font-black tracking-tight leading-tight">
  Chief Guest
</h1>

<p className="text-base sm:text-lg md:text-lg font-medium text-white/90 leading-snug max-w-xl">
  To Be Announced soon
</p> 

            <p className="text-[#fff200] text-lg sm:text-xl md:text-xl font-bold tracking-wide mt-1 leading-snug">
              SPEECH ON 100% VOTING IN DEMOCRACY
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: Dividers */}
        {/* Vertical Divider (Desktop) */}
        <div className="hidden lg:block w-[2px] self-stretch bg-white/30 mx-2 rounded-full my-4"></div>
        {/* Horizontal Divider (Mobile/Tablet) */}
        <div className="block lg:hidden w-3/4 max-w-sm h-[2px] bg-white/30 rounded-full my-2"></div>

        {/* RIGHT SECTION: Moderator & Anchor */}
        <div className="flex flex-row gap-6 sm:gap-12 md:gap-16 items-start justify-center flex-shrink-0 lg:my-auto">
          
          {/* Moderator */}
          <div className="flex flex-col items-center text-center w-24 sm:w-28 lg:w-32">
            <img 
              src={jamis} 
              alt="Mr. James Vasanthan" 
              className="w-full h-auto object-cover grayscale shadow-md mb-3 rounded-sm"
            />
            <p className="text-[10px] sm:text-xs font-medium mb-1 text-white/80 uppercase tracking-wider">
              Moderated by
            </p>
            <p className="text-xs sm:text-sm font-bold tracking-wide leading-tight">
              Mr. JAMES VASANTHAN
            </p>
          </div>

          {/* Anchor */}
          <div className="flex flex-col items-center text-center w-24 sm:w-28 lg:w-32">
            <img 
              src={toshila} 
              alt="Ms. Toshila Uma Shanker" 
              className="w-full h-auto object-cover grayscale shadow-md mb-3 rounded-sm"
            />
            <p className="text-[10px] sm:text-xs font-medium mb-1 text-white/80 uppercase tracking-wider">
              Anchored by
            </p>
            <p className="text-xs sm:text-sm font-bold tracking-wide leading-tight">
              Ms. TOSHILA UMA SHANKER
            </p>
          </div>

        </div>

      </div>
    </section>

    
    
    </>


  )
}

export default About