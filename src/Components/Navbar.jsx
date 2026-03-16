import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/arovanalogo1.jpg';

function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", targetId: "home", hasDropdown: false },
    { name: "ABOUT", targetId: "about", hasDropdown: false },
    { name: "DEBATE", targetId: "debate", hasDropdown: false },
    { name: "CONCLAVE", targetId: "conclave", hasDropdown: false },
    { name: "MEDIA", targetId: "media", hasDropdown: false },
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm font-sans sticky top-0 z-50">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center py-2">

          {/* LOGO */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, "home")}
          >
            <img
              src={logo}
              alt="Arovana"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex flex-col items-end space-y-3">

            {/* SOCIAL */}
            <div className="flex items-center space-x-20">

              <div className="flex items-center space-x-10 text-[#0B132B]">

                <a href="https://www.facebook.com/profile.php?id=61586307134052" target="_blank" rel="noopener noreferrer" className="hover:text-[#D31A50] transition">
                  <FaFacebookF />
                </a>

                <a href="https://x.com/arovana_ipass" target="_blank" rel="noopener noreferrer" className="hover:text-[#D31A50] transition">
                  <FaTwitter />
                </a>

                <a href="http://www.youtube.com/@ArovanaIpass" target="_blank" rel="noopener noreferrer" className="hover:text-[#D31A50] transition">
                  <FaYoutube size={18} />
                </a>

                <a href="https://www.instagram.com/arovana.ipass/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D31A50] transition">
                  <FaInstagram size={18} />
                </a>

                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D31A50] transition">
                  <FaWhatsapp size={18} />
                </a>

              </div>

              <div className="flex items-center space-x-3">

                <button className="bg-[#D31A50] hover:bg-[#b01241] text-white text-xs font-bold py-1.5 px-5 transition uppercase">
                  Join Us
                </button>

                <button
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                  className="bg-[#0B132B] hover:bg-black text-white text-xs font-bold py-1.5 px-4 transition uppercase"
                >
                  Contact Us
                </button>

              </div>

            </div>

            {/* NAV LINKS */}
            <div className="flex items-center pt-2 pe-30">

              {navLinks.map((link, index) => (

                <div key={link.name} className="flex items-center">

                  <a
                    href={`#${link.targetId}`}
                    onClick={(e) => handleSmoothScroll(e, link.targetId)}
                    className="text-[#2c3e50] text-[15px] font-bold hover:text-[#D31A50] transition flex items-center gap-1 uppercase"
                  >
                    {link.name}
                    {link.hasDropdown && <FaChevronDown size={10} />}
                  </a>

                  {index !== navLinks.length - 1 && (
                    <span className="mx-3 text-gray-500">|</span>
                  )}

                </div>

              ))}

            </div>

          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center">

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0B132B]"
            >
              {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}

      {isMobileMenuOpen && (

        <div className="lg:hidden bg-white border-t border-gray-100 pb-4 shadow-lg absolute w-full left-0">

          <div className="flex flex-col px-4 pt-2 space-y-1">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={`#${link.targetId}`}
                onClick={(e) => handleSmoothScroll(e, link.targetId)}
                className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-[#D31A50] hover:bg-gray-50 uppercase"
              >
                {link.name}
              </a>

            ))}

            <div className="flex justify-center space-x-8 py-4 text-[#0B132B]">

              <a href="https://www.facebook.com/profile.php?id=61586307134052" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </a>

              <a href="https://x.com/arovana_ipass" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>

              <a href="http://www.youtube.com/@ArovanaIpass" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={20} />
              </a>

              <a href="https://www.instagram.com/arovana.ipass/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>

              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} />
              </a>

            </div>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;