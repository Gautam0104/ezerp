import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackToTopButton from "./components/BackToTopButton";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration (optional)
      once: true // whether animation should happen only once (optional)
    });
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BackToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
