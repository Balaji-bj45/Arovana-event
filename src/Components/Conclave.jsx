import React from "react";
// Image Imports as provided
import balachandran from "../assets/Conclave/balachandran.png";
import chandru from "../assets/Conclave/chandru.png";
import gopal from "../assets/Conclave/gopal.png";
import kirubakaran from "../assets/Conclave/kirubakaran.png";
import raja from "../assets/Conclave/raja.png";
import ramesh from "../assets/Conclave/ramesh.png";
import vijayabaskar from "../assets/Conclave/vijayabaskar.png";
import vijayakumar from "../assets/Conclave/vijayakumar.png";

function Conclave() {
  const pillars = [
    {
      title: "LEGISLATIVE",
      members: [
        { name: "Hon'ble A RAJA", role: "Member of Parliament", img: raja },
        {
          name: "Dr. C. VIJAYABASKAR",
          role: "Former M L A",
          img: vijayabaskar,
        },
      ],
    },
    {
      title: "EXECUTIVE",
      members: [
        {
          name: "Mr. VIJAYAKUMAR",
          role: "Former IPS Officer",
          img: vijayakumar,
        },
        {
          name: "Mr. G. BALACHANDRAN",
          role: "Former IAS Officer",
          img: balachandran,
        },
      ],
    },
    {
      title: "JUDICIARY",
      members: [
        {
          name: "Mr. N. KIRUBAKARAN",
          role: "Retd. JUDGE MHC",
          img: kirubakaran,
        },
        { name: "Mr. K CHANDRU", role: "Retd. JUDGE MHC", img: chandru },
      ],
    },
    {
      title: "MEDIA",
      members: [
        { name: "Mr. R. GOPAL", role: "EDITOR NAKHEERAN", img: gopal },
        { name: "Mr. S. RAMESH", role: "EDITOR THUGLAQ", img: ramesh },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#af9011] font-sans pb-6 sm:pb-8 md:pb-12">
      {/* Top Black Header */}
      <div className="bg-black text-white text-center py-2 sm:py-3 md:py-4 px-2 sm:px-4 overflow-x-auto">
        <h1
          className="flex flex-wrap justify-center items-center 
text-[16px] sm:text-lg md:text-lg lg:text-2xl xl:text-4xl 
tracking-wide font-light gap-1 sm:gap-2 md:gap-3 text-center"
        >
          <span>EVENING</span>

          <span className="font-semibold">7.00 PM</span>

          <span className="text-gray-400 hidden sm:inline">|</span>

          <span>
            ROLE OF <span className="font-bold">IDEOLOGY IN GOVERNANCE</span>
          </span>

          <span className="text-gray-400 hidden sm:inline">|</span>

          <span>CONCLAVE</span>
        </h1>
      </div>

      {/* Intro Paragraphs */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 pt-4 sm:pt-6 md:pt-8 pb-3 sm:pb-4 md:pb-5 text-center">
        <p className="text-white text-[15px] xs:text-[14px] sm:text-[16px] md:text-[20px] lg:text-[25px] leading-snug  mb-2 sm:mb-3">
          The Experts and the Experienced from the four pillars of democracy -{" "}
          <span className="font-bold">
            the Legislature, Executive , Judiciary and the Media,
          </span>{" "}
          the foundational pillars of Democracy delve into the intricate
          interplay of political philosophy and governance dynamics.
        </p>
        <p className="text-[#1a1a1a] text-[15px] xs:text-[14px] sm:text-[16px] md:text-[20px] lg:text-[25px] leading-snug font-medium">
          The robustness of a democracy lies in the collaborative strength and
          harmonious interaction of these pillars. The very structure of a
          constitution dictates the separation of powers, checks and balances,
          and the protection of fundamental rights.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div
        className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10
  grid grid-cols-1 sm:grid-cols-2
  gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-14
  gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-18
  place-items-center"
      >
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-[320px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[460px]"
          >
            {/* --- VISUAL BLOCK --- */}
            <div className="bg-black p-4 sm:p-5 md:p-6 pb-6 w-full">
              {/* Title */}
              <div
                className="text-white text-center mb-4
          font-black tracking-wider
          text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase"
              >
                {pillar.title}
              </div>

              {/* Images */}
              <div className="flex justify-between gap-3 sm:gap-4 md:gap-5">
                {pillar.members.map((member, mIndex) => (
                  <div key={mIndex} className="relative w-1/2 aspect-[4/5] overflow-hidden">
                    {/* Image - Fully Blurred & Scaled slightly to hide messy blur edges */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale block blur-md scale-110"
                    />
                    
                    {/* Overlay - Extreme Backdrop Blur + Fixed Text Formatting */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-xl p-1 sm:p-2">
                      <span className="text-white text-center leading-tight sm:leading-snug text-[9px] min-[400px]:text-[11px] sm:text-[12px] md:text-[14px] font-bold uppercase tracking-wide sm:tracking-widest drop-shadow-md w-full px-1">
                        Probably <br /> 
                        To Be <br /> 
                        Confirmed
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- TEXT BLOCK --- */}
            <div
              className="flex justify-between w-full gap-3 sm:gap-4 md:gap-5
        mt-4 px-2 sm:px-3 md:px-4"
            >
              {pillar.members.map((member, mIndex) => (
                <div
                  key={mIndex}
                  className="flex flex-col items-center w-1/2 text-center"
                >
                  {/* Name */}
                  <h3
                    className="text-black text-[13px] sm:text-[15px] md:text-[18px]
              leading-tight mb-1 whitespace-normal lg:whitespace-nowrap"
                  >
                    {member.name.split(" ").map((word, i) =>
                      i > 0 &&
                      word === word.toUpperCase() &&
                      word.length > 1 ? (
                        <span key={i} className="font-extrabold">
                          {word}{" "}
                        </span>
                      ) : (
                        <span key={i} className="font-bold">
                          {word}{" "}
                        </span>
                      )
                    )}
                  </h3>

                  {/* Role */}
                  <p
                    className="text-[#1a1a1a] text-[11px] sm:text-[12px] md:text-[13px]
              font-medium uppercase tracking-tight"
                  >
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer Quote */}
      <div
        className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 
                      pt-4 sm:pt-5 md:pt-6 lg:pt-8 
                      pb-2 sm:pb-3 md:pb-3 text-center"
      >
        <h2
          className="text-black font-extrabold 
                       text-[14px] xs:text-[16px] sm:text-[18px] md:text-[24px] lg:text-[25px] xl:text-[28px] 
                       leading-snug"
        >
          Noteworthy is how dominant political ideologies can mold the
          government's framework, influencing the delicate balance between
          individual freedoms and state authority.
        </h2>
      </div>
    </div>
  );
}

export default Conclave;