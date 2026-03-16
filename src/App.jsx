import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import EventRegisterPopup from "./Components/EventRegisterPopup";
import Navbar from "./Components/Navbar";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";

function App() {
  const location = useLocation();

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
