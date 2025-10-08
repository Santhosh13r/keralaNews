import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Technology from "./pages/Technology";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Politics from "./pages/politics";
import AdManager from "./pages/AdManager";

import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <BrowserRouter basename="/KeralaNews/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/AdManager" element={<AdManager />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
