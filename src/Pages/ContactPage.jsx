import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import kudiuyara from "../assets/kudiuyara.jpg";

function ContactUs() {
  return (
    <>
      <main className="font-sans bg-[#f7f9fc]">
        {/* FIRST SECTION */}

        <section className="relative overflow-hidden bg-white text-black">
          <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-8 sm:px-6 md:py-10 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 text-l uppercase tracking-[0.25em] text-[#fb0251]">
                Arovana IPASS
              </p>

              <h1 className="text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">
                Contact Us
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black md:text-base">
                We are ready to support your campaign communication, media
                planning, and event execution. Share your requirement and our
                team will respond quickly.
              </p>
            </div>
          </div>
        </section>

        {/* SECOND SECTION */}

        <section className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6 md:py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* LEFT SIDE FORM */}

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md md:p-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-[#0B132B]">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Fill out this form and our team will get back to you.
              </p>

              <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
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
                  <label className="mb-2 block text-sm font-semibold text-[#0B132B]">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirement"
                    className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#D31A50] focus:outline-none focus:ring-2 focus:ring-[#D31A50]/40"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-[#D31A50] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b01442] md:w-auto"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-6 lg:col-span-5">
              {/* TOP IMAGE */}

              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-md">
                <img
                  src={kudiuyara}
                  alt="Arovana Event"
                  className="h-[300px] w-full object-contain"
                />
              </div>

              {/* CONTACT DETAILS */}

              <div className="space-y-4">
                {/* <InfoCard
                  icon={<FaMapMarkerAlt />}
                  title="Office Address"
                  content="Primus Building, Door No. SP-7A, Guindy Industrial Estate, Chennai - 600 032, Tamil Nadu, India"
                /> */}

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
      <Footer />
    </>
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
