import React from "react";
import queries from "../assets/postyourqueries.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-300 hover:bg-[#D31A50] hover:text-white flex items-center justify-center text-gray-700 transition-all duration-300"
  >
    {icon}
  </a>
);

function CTA() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch">

      {/* LEFT IMAGE */}
      <div className="w-full md:w-5/12 bg-black">
        <img
          src={queries}
          alt="Post your queries"
          className="w-full h-[300px] sm:h-[400px] md:h-full object-cover object-center block"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-7/12 bg-[#F4F6F8] flex items-center px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-lg">

          {/* Heading */}
          <div className="mb-6 text-[#1e293b]">
            <h3 className="text-3xl md:text-4xl font-light">Ignite</h3>
            <h3 className="text-3xl md:text-4xl font-bold">
              The Power of Democracy
            </h3>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mb-8">
            <SocialIcon icon={<FaFacebookF />} link="https://www.facebook.com/profile.php?id=61586307134052" />
            <SocialIcon icon={<FaTwitter />} link="https://x.com/arovana_ipass" />
            <SocialIcon icon={<FaInstagram />} link="https://www.instagram.com/arovana.ipass/" />
            <SocialIcon icon={<FaYoutube />} link="http://www.youtube.com/@ArovanaIpass" />
            <SocialIcon icon={<FaWhatsapp />} link="https://wa.me/" />
          </div>

          {/* Text */}
          <div className="text-gray-600 space-y-1 font-medium text-sm md:text-base">
            <p>Post your Queries to the Program..</p>
            <p>Discuss.. Debate on your views., your thoughts..</p>
            <p>for the betterment of our Society.</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default CTA;