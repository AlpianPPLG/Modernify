import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Testimony from "./components/Testimony";
import Login from "./pages/Login"; // Import Login dari pages
import SignIn from "./pages/SignIn"; // Import SignIn dari pages
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import PrivacyPolicy dari pages
import TermsConditions from "./pages/TermsConditions"; // Import TermsConditions dari pages
import Pricing from "./components/Pricing";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Rute untuk halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <GetStarted />
              <Pricing />
              <Testimony />
              <FAQ />
              <Contact />
              <Footer />
              {showScroll && (
                <button
                  onClick={scrollToTop}
                  className="fixed bottom-4 right-4 bg-violet-800 text-white rounded-full p-3 shadow-lg hover:bg-violet-700 transition duration-300"
                >
                  ↑
                </button>
              )}
            </>
          }
        />

        {/* Rute untuk halaman login */}
        <Route path="/login" element={<Login />} />

        {/* Rute untuk halaman sign in */}
        <Route path="/signin" element={<SignIn />} />

        {/* Rute untuk halaman Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Rute untuk halaman Terms & Conditions */}
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
