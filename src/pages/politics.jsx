import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Politics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchPolitics = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        'https://newsdata.io/api/1/latest?apikey=pub_1d96941b1d70474d92c8cb5f2107f429&country=in&language=ml&category=politics'
      );
      setData(response.data.results || []);
    } catch (err) {
      setError("Error fetching politics news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPolitics();
  }, []);

  // Left Sidebar Content
  const leftContent = (
    <div className="sticky-top" style={{ top: "90px" }}>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Trending Topics</h6>
          <ul className="list-unstyled mb-0 fs-6 text-secondary">
            <li>• Election 2025</li>
            <li>• Parliament Updates</li>
            <li>• Policy Changes</li>
          </ul>
        </div>
      </div>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Featured Video</h6>
          <video
            src="/keralaNews/assets/left-featured-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              maxWidth: "140px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
      {/* Down Side Ad */}
      <div className="card shadow-sm border-0">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Ad</h6>
          <img
            src="/keralaNews/assets/left-ad-banner.jpg"
            alt="Left Sidebar Ad"
            style={{
              width: "100%",
              maxWidth: "140px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
    </div>
  );

  // Right Sidebar Content
  const rightSlot = (
    <div className="sticky-top" style={{ top: "90px" }}>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Sponsored</h6>
          <img
            src="/keralaNews/assets/ad-banner.jpg"
            alt="Ad"
            style={{
              width: "100%",
              maxWidth: "140px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Watch Ad</h6>
          <video
            src="/keralaNews/assets/sample-ad.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              maxWidth: "140px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)"
      }}
    >
      <div className="row justify-content-center gx-4">
        {/* Left Sidebar */}
        <aside className="d-none d-lg-block col-lg-2 px-0">{leftContent}</aside>

        {/* Main Content */}
        <main className="col-12 col-lg-8 px-2 px-lg-4">
          <h2 className="mb-4 text-danger fw-bold display-6">
            <i className="fas fa-landmark me-2 text-danger"></i>
            Politics News
          </h2>
          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading politics news...</p>
            </div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="row g-4">
            {data.length > 0 ? (
              data.map((item, idx) => (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex" key={idx}>
                  <div
                    className="card shadow border-0 rounded-4 h-100 w-100"
                    style={{
                      minWidth: 0,
                      maxWidth: "100%",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <div className="ratio ratio-16x9">
                      <img
                        src={item.image_url || "/fallback.jpg"}
                        className="card-img-top rounded-top-4 object-fit-cover"
                        alt={item.title}
                        style={{
                          objectFit: "cover",
                          maxHeight: "220px",
                          width: "100%"
                        }}
                        onError={e => (e.target.src = "/fallback.jpg")}
                      />
                    </div>
                    <div className="card-body d-flex flex-column bg-light">
                      <h5
                        className="card-title mb-2 text-danger fs-5"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.title}
                      </h5>
                      <p
                        className="card-text text-muted small mb-3 fs-6"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          minHeight: "60px"
                        }}
                      >
                        {item.description || "No description available"}
                      </p>
                      <div className="mt-auto">
                        <Link
                          to={`/news/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                          state={item}
                          className="btn btn-danger btn-sm w-100"
                        >
                          Read More <i className="fas fa-arrow-right ms-1"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <small className="text-muted fs-6">
                        {item.pubDate && new Date(item.pubDate).toLocaleDateString()}
                      </small>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              !loading && (
                <div className="col-12 text-center py-5">
                  <p className="text-muted">No politics news found</p>
                </div>
              )
            )}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="d-none d-lg-block col-lg-2 px-0">{rightSlot}</aside>
      </div>
    </div>
  );
};

export default Politics;