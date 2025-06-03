import "../index.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-4 px-0 shadow-lg  px-4 "style={{ width: '100%', overflowX: 'hidden' }}>
      <div className="container ">
        <div className="row gy-5 text-center text-md-start">
          
          {/* Brand & About */}
          <div className="col-12 col-md-3">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <img
                src="..\assets\Logo.png"
                alt="Logo"
                width="48"
                height="48"
                className="me-2 rounded-circle border border-light p-1"
              />
              <h4 className="fw-bold mb-0">TopNewsKL</h4>
            </div>
            <p className="small">
              Delivering the latest updates from Kerala and around the world. Stay informed with verified news at your fingertips.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-3 mx-auto">
            <h5 className="fw-semibold mb-3">Contact Us</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><i className="fas fa-envelope me-2"></i><a href="mailto:info@topnewskl.com" className="footer-link">info@topnewskl.com</a></li>
              <li className="mb-2"><i className="fas fa-phone me-2"></i><a href="tel:+919876543210" className="footer-link">+91 93600-72547</a></li>
              <li><i className="fas fa-map-marker-alt me-2"></i>Maniyattukudi Asfa Building, IG Road, Calicut, Kerala, India</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled small ">
              <li><a href="/" className="footer-link pt-1">Home</a></li>
              <li><a href="/about" className="footer-link pt-1">About Us</a></li>
              <li><a href="/categories" className="footer-link pt-1">Categories</a></li>
              <li><a href="/contact" className="footer-link pt-1">Contact</a></li>
              <li><a href="/privacy-policy" className="footer-link pt-1">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-3">Newsletter</h5>
            <p className="small">Join TopNewsKL readers. Get top headlines weekly.</p>
            <form className="newsletter-form">
              <input type="email" className="form-control form-control-sm mb-2 rounded" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary btn-sm w-100 rounded">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-top pt-3 mt-5 small">
          <p className="mb-0">&copy; {new Date().getFullYear()} <strong>TopNewsKL</strong>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
