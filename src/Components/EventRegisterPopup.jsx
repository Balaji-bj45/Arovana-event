import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";

const FORM_LINK = "https://forms.gle/v84RiEvnU5xZrAcy6";
const STORAGE_KEY = "arovana-event-popup-dismissed";

function EventRegisterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 450);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="popup-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-md"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="popup-card relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/25 bg-[#101820] text-white shadow-[0_28px_100px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-popup-title"
      >
        <div className="popup-orb absolute -left-16 top-8 h-36 w-36 rounded-full bg-[#ffe900]/30 blur-3xl" />
        <div className="popup-orb absolute -right-12 bottom-10 h-40 w-40 rounded-full bg-[#d31a50]/30 blur-3xl" />

        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-300 hover:bg-white hover:text-[#101820]"
          aria-label="Close registration popup"
        >
          <FaTimes />
        </button>

        <div className="relative px-6 py-8 sm:px-8 sm:py-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffe900]/40 bg-[#ffe900]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#ffe900]">
            Registration Open
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/60">
              Arovana Event 2026
            </p>

            <h2
              id="register-popup-title"
              className="max-w-lg text-3xl font-black uppercase leading-tight sm:text-4xl"
            >
              Join the conversation at Democracy Festival
            </h2>

            <p className="max-w-lg text-sm leading-6 text-white/75 sm:text-base">
              Secure your spot and register now to be part of an energetic,
              youth-focused event built around ideas, debate, and democratic
              engagement.
            </p>
          </div>

          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
              <div className="mb-2 flex items-center gap-2 text-[#ffe900]">
                <FaCalendarAlt />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Date & Time
                </span>
              </div>
              <p className="text-base font-semibold text-white">
                22 March 2026
              </p>
              <p className="text-white/70">3:00 PM onwards</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
              <div className="mb-2 flex items-center gap-2 text-[#ffe900]">
                <FaMapMarkerAlt />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Venue
                </span>
              </div>
              <p className="text-base font-semibold text-white">
                Iyyan Valluvar Arangam
              </p>
              <p className="text-white/70">Valluvar Kottam, Chennai</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ffe900] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition duration-300 hover:translate-y-[-2px] hover:bg-white"
            >
              Register Now
              <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white hover:bg-white/8"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventRegisterPopup;
