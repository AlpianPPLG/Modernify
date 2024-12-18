import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Testimony from "./components/Testimony";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <GetStarted />
        <Testimony />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
