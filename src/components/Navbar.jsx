import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoImg from '../assets/logo1.png'; // Adjust the path as necessary
import "../index.css"; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark shadow-sm fixed-top">
      <div className="container-fluid mt-2 mb-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={LogoImg}
            alt="Logo"
            height="90" // Increased height for a bigger logo
            style={{
              width: "90px", // Increased width for a bigger logo
              borderRadius: "16px",
              boxShadow: "0 4px 16px rgba(30, 144, 255, 0.18)",
              background: "#fff",
              padding: "4px",
              objectFit: "contain"
            }}
            className="d-inline-block align-text-top me-3 logo-attractive"
          />
          <span style={{ fontSize: "2rem", fontWeight: "bold", color: "#0d6efd", letterSpacing: "1px" }}>
            TopNewsKL
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 navbar1">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/politics">
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/AdminPages">
                Admin 
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;