import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselComponent from "../components/CarouselComponent";
import "../App.css";
import Ads from "../components/Ads";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
'https://newsdata.io/api/1/latest?apikey=pub_1d96941b1d70474d92c8cb5f2107f429&country=au,in,de,ru&language=ml&category=environment,top,politics,health,education'      );
      setData(response.data.results);
    } catch (error) {
      setError("Error fetching news");
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Toggle dark mode
  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className={`d-flex flex-column min-vh-100${darkMode ? " bg-dark text-light" : ""}`}>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-5">
           
            <CarouselComponent />
          </div>
        </div>
      </div>


      <section className="container my-5 flex-grow-1">
        <h2 className="mb-4 text-primary border-bottom px-2">Top News</h2>
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading news...</p>
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="row g-4">
          {data?.length > 0 ? (
            data.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className={`card shadow rounded-4 border-0 d-flex flex-column h-100 w-100${darkMode ? " bg-secondary text-light" : ""}`}>
                    <div className="ratio ratio-16x9">
                      <img
                        src={item.image_url || "/fallback.jpg"}
                        className="card-img-top rounded-top-4 object-fit-cover"
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = "/fallback.jpg";
                        }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title line-clamp-2" style={{ WebkitLineClamp: 2 }}>
                        {item.title}
                      </h5>
                      <p className="card-text text-muted small line-clamp-3 mb-3" style={{ WebkitLineClamp: 3 }}>
                        {item.description || "No description available"}
                      </p>
                      <div className="mt-auto">
                        <Link
                          to={`/news/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                          state={item}
                          className={`btn btn-outline-primary btn-sm w-100${darkMode ? " border-light text-light" : ""}`}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent border-top-0">
                      <small className="text-muted">
                        {item.pubDate && new Date(item.pubDate).toLocaleDateString()}
                      </small>
                    </div>
                  </div>
                </div>
                {/* Insert ad after every 3 news cards */}
                {(idx + 1) % 3 === 0 && (
                  <div className="col-12" key={`ad-${idx}`}>
                    <div className="my-3 text-center">
                      {/* Example ad image, replace with your ad code or AdSense */}
                       <Ads/>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            !loading && (
              <div className="col-12 text-center py-5">
                <p className="text-muted">No news articles found</p>
              </div>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;