import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Immigration from "./pages/Immigration";
import Technology from "./pages/Technology";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/immigration" element={<Immigration />} />
        <Route path="/technology" element={<Technology />} />
      
      </Routes>
    </Router>
  );
}

export default App;