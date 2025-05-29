import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Technology from "./pages/Technology";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Politics from "./pages/politics";
import Category from "./pages/category";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/category" element={<Category />} />

      </Routes>
    </Router>
  );
}

export default App;