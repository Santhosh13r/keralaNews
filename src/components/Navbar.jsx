import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoImg from '../assets/logo1.png';
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark shadow-sm fixed-top">
      <div className="container-fluid mt-2 mb-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={LogoImg}
            alt="Logo"
            height=""
            style={{
              width: "80px",
              borderRadius: "50%", // Make logo round
              boxShadow: "0 4px 16px rgba(30, 144, 255, 0.18)",
              background: "#222121ff",
              padding: "4px",
              objectFit: "cover", // Ensures round crop
              border: "2px solid #035ee6ff"
            }}
            className="d-inline-block align-text-top me-3 logo-attractive"
          />
          <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#000000ff", letterSpacing: "1px" }}>
            Top 1 News
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/politics">
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/AdManager">
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