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
import Category from "./pages/category";
import AdminPages from "./pages/AdminPages";
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
        <Route path="/category" element={<Category />} />
        <Route path="/AdminPages" element={<AdminPages/>} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
