import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import EventRegisterPopup from "./Components/EventRegisterPopup";
import Navbar from "./Components/Navbar";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.state?.scrollTarget) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.state]);

  return (
    <>
      <Navbar />
      {location.pathname === "/" && <EventRegisterPopup />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
