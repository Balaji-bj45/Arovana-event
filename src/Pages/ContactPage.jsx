import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";
import kudiuyara from "../assets/kudiuyara.jpg";

function ContactUs() {
  return (
    <main className="font-sans bg-[#f7f9fc]">
      {/* FIRST SECTION */}

      <section className="relative bg-white text-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 relative z-10">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-l text-[#fb0251] mb-4">
              Arovana IPASS
            </p>

            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Contact Us
            </h1>

            <p className="mt-4 text-sm md:text-base text-black max-w-2xl leading-relaxed">
              We are ready to support your campaign communication, media
              planning, and event execution. Share your requirement and our team
              will respond quickly.
            </p>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDE FORM */}

          <div className="lg:col-span-7 bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0B132B]">
              Send Us a Message
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Fill out this form and our team will get back to you.
            </p>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                type="text"
                placeholder="Your full name"
              />

              <InputField
                label="Phone Number"
                type="tel"
                placeholder="Your contact number"
              />

              <InputField
                label="Email Address"
                type="email"
                placeholder="Your email address"
              />

              <InputField
                label="Organization"
                type="text"
                placeholder="Party or organization name"
              />

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0B132B] mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D31A50]/40 focus:border-[#D31A50] resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="button"
                  className="w-full md:w-auto bg-[#D31A50] hover:bg-[#b01442] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE */}

          <div className="lg:col-span-5 space-y-6">
            {/* TOP IMAGE */}

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white p-2">
              <img
                src={kudiuyara}
                alt="Arovana Event"
                className="w-full h-[300px] object-contain"
              />
            </div>

            {/* CONTACT DETAILS */}

            <div className="space-y-4">
              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Office Address"
                content="Primus Building, Door No. SP-7A, Guindy Industrial Estate, Chennai - 600 032, Tamil Nadu, India"
              />

              <InfoCard
                icon={<FaEnvelope />}
                title="Email"
                content="24x7@arovana-ipass.com"
                href="mailto:24x7@arovana-ipass.com"
              />

              <InfoCard
                icon={<FaRegClock />}
                title="Working Hours"
                content="Monday to Saturday, 9:30 AM to 6:30 PM"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon, title, content, href }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex gap-4 items-start">
      <div className="mt-1 h-10 w-10 rounded-full bg-[#D31A50]/10 text-[#D31A50] flex items-center justify-center text-sm">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-[#0B132B]">
          {title}
        </h3>

        {href ? (
          <a
            href={href}
            className="text-sm text-slate-600 mt-2 block hover:text-[#D31A50] transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {content}
          </p>
        )}
      </div>
    </article>
  );
}

function InputField({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#0B132B] mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D31A50]/40 focus:border-[#D31A50]"
      />
    </div>
  );
}

export default ContactUs;
