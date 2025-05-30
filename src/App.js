import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
