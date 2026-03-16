import React, { useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/arovanalogo1.jpg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "HOME", targetId: "home" },
    { name: "ABOUT", targetId: "about" },
    { name: "DEBATE", targetId: "debate" },
    { name: "CONCLAVE", targetId: "conclave" },
    { name: "MEDIA", targetId: "media" },
  ];

  const scrollToSection = (targetId) => {
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSectionNavigation = (targetId) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTarget: targetId } });
      return;
    }

    scrollToSection(targetId);
  };

  const handleRouteNavigation = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white font-sans shadow-sm">

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between py-2">

          <button
            type="button"
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleSectionNavigation("home")}
          >
            <img
              src={logo}
              alt="Arovana"
              className="h-20 w-auto object-contain"
            />
          </button>

          <div className="hidden flex-col items-end space-y-3 lg:flex">

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

                <a
                  href="https://forms.gle/v84RiEvnU5xZrAcy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D31A50] px-5 py-1.5 text-xs font-bold uppercase text-white transition hover:bg-[#b01241]"
                >
                  Join Us
                </a>

                <button
                  type="button"
                  onClick={() => handleRouteNavigation("/contact")}
                  className="bg-[#0B132B] px-4 py-1.5 text-xs font-bold uppercase text-white transition hover:bg-black"
                >
                  Contact Us
                </button>

              </div>

            </div>

            <div className="flex items-center pt-2 pe-30">

              {navLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleSectionNavigation(link.targetId)}
                    className="flex items-center gap-1 text-[15px] font-bold uppercase text-[#2c3e50] transition hover:text-[#D31A50]"
                  >
                    {link.name}
                  </button>

                  {index !== navLinks.length - 1 && (
                    <span className="mx-3 text-gray-500">|</span>
                  )}
                </div>
              ))}
              <span className="mx-3 text-gray-500">|</span>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[15px] font-bold uppercase transition ${
                    isActive ? "text-[#D31A50]" : "text-[#2c3e50] hover:text-[#D31A50]"
                  }`
                }
              >
                Contact
              </NavLink>

            </div>

          </div>

          <div className="flex items-center lg:hidden">

            <button
              type="button"
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
        <div className="absolute left-0 w-full border-t border-gray-100 bg-white pb-4 shadow-lg lg:hidden">
          <div className="flex flex-col space-y-1 px-4 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleSectionNavigation(link.targetId)}
                className="block px-3 py-2 text-left text-base font-semibold uppercase text-gray-700 hover:bg-gray-50 hover:text-[#D31A50]"
              >
                {link.name}
              </button>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-semibold uppercase transition ${
                  isActive ? "text-[#D31A50]" : "text-gray-700 hover:bg-gray-50 hover:text-[#D31A50]"
                }`
              }
            >
              Contact
            </NavLink>

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
