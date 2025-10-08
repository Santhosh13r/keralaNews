import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarAds from "../components/SidebarAds";

const NewsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const news = location.state;

  useEffect(() => {
    if (!news) {
      navigate("/");
    }
  }, [news, navigate]);

  if (!news) return null;

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
        <aside className="d-none d-lg-block col-lg-2 px-0 mt-5">
          <div
            style={{
              background: "#f6f9ff",
              borderRadius: "14px",
              padding: "1rem 0.5rem",
              minHeight: "200px"
            }}
          >
            <h6 className="text-center text-primary mb-3" style={{ fontWeight: 600 }}>
              Sponsored (Left)
            </h6>
            <SidebarAds area="left" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-12 col-lg-8 px-2 px-lg-4">
          {/* Center/Top Ads */}
          <div className="mb-4 mt-5">
            <SidebarAds area="center" />
          </div>
          <button
            className="btn btn-outline-primary mb-4 rounded-pill px-4 py-2 shadow-sm"
            onClick={() => navigate(-1)}
            style={{
              fontWeight: 600,
              letterSpacing: "1px"
            }}
          >
            <i className="fas fa-arrow-left me-2"></i>Back
          </button>
          {/* News Content */}
          <section
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "2rem",
              marginBottom: "2rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
            }}
          >
            <div className="mb-4">
              <img
                src={news.image_url || "/fallback.jpg"}
                alt={news.title}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
              />
            </div>
            <h1 className="mb-3 text-primary fw-bold" style={{ fontSize: "2.2rem" }}>
              {news.title}
            </h1>
            {news.author && (
              <div className="mb-2 text-secondary fs-6">
                <i className="fas fa-user me-2"></i>
                <strong>By:</strong> {news.author}
              </div>
            )}
            <div className="mb-3 text-muted" style={{ fontSize: "1.1rem" }}>
              {news.pubDate && (
                <>
                  <i className="far fa-calendar-alt me-1"></i>
                  {new Date(news.pubDate).toLocaleDateString()}
                </>
              )}
            </div>
            <p
              className="fs-5 mb-4"
              style={{
                lineHeight: 1.7,
                textAlign: "justify"
              }}
            >
              {news.description || "No description available"}
            </p>
            {news.content && (
              <div className="mb-3">
                <h5 className="fw-semibold mt-4 fs-5 text-primary">Full Story</h5>
                <div
                  className="fs-6"
                  style={{
                    lineHeight: 1.8,
                    textAlign: "justify"
                  }}
                >
                  {news.content}
                </div>
              </div>
            )}
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="d-none d-lg-block col-lg-2 px-0 mt-5 pt-5">
          <div
            style={{
              background: "#f6f9ff",
              borderRadius: "14px",
              padding: "1rem 0.5rem",
              minHeight: "200px"
            }}
          >
            <h6 className="text-center text-primary mb-3" style={{ fontWeight: 600 }}>
              Sponsored (Right)
            </h6>
            <SidebarAds area="right" />
          </div>
        </aside>
      </div>
      {/* Bottom Video Ads Area */}
   
    </div>
  );
};

export default NewsDetails;