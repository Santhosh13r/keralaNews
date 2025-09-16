import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const news = location.state;

  if (!news) {
    navigate("/");
    return null;
  }

  // Left Sidebar Content
  const leftContent = (
    <div className="sticky-top" style={{ top: "90px" }}>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Featured Video</h6>
          <video
            src="/keralaNews/assets/sample-left-video.mp4"
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
      <div className="card shadow-sm border-0">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Ad</h6>
          <img
            src="/keralaNews/assets/sample-left-ad.jpg"
            alt="Left Ad"
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
  const rightContent = (
    <div className="sticky-top" style={{ top: "90px" }}>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Ad</h6>
          <img
            src="/keralaNews/assets/sample-right-ad.jpg"
            alt="Right Ad"
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
      <div className="card shadow-sm border-0">
        <div className="card-body text-center p-3">
          <h6 className="fw-bold mb-2 fs-6 text-primary">Watch Ad</h6>
          <video
            src="/keralaNews/assets/sample-right-video.mp4"
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
          <button className="btn btn-outline-primary mb-4" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left me-2"></i>Back
          </button>
          <div
            className="card shadow-lg border-0 rounded-4 mb-4"
            style={{
              borderLeft: "8px solid #0d6efd",
              background: "#fff"
            }}
          >
            <div className="ratio ratio-16x9 rounded-top-4 overflow-hidden">
              <img
                src={news.image_url || "/fallback.jpg"}
                alt={news.title}
                className="w-100 h-100 object-fit-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body p-4">
              <h1 className="card-title mb-3 text-primary fw-bold display-6">{news.title}</h1>
              {news.author && (
                <p className="mb-2 text-secondary fs-6">
                  <i className="fas fa-user me-2"></i>
                  <strong>By:</strong> {news.author}
                </p>
              )}
              <p className="card-text fs-5" style={{ lineHeight: 1.7, textAlign: "justify" }}>
                {news.description || "No description available"}
              </p>
              {news.content && (
                <div className="mb-3">
                  <h5 className="fw-semibold mt-4 fs-5">Full Story</h5>
                  <div className="fs-6" style={{ lineHeight: 1.8, textAlign: "justify" }}>
                    {news.content}
                  </div>
                </div>
              )}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <small className="text-muted fs-6">
                  {news.pubDate && (
                    <>
                      <i className="far fa-calendar-alt me-1"></i>
                      {new Date(news.pubDate).toLocaleDateString()}
                    </>
                  )}
                </small>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="d-none d-lg-block col-lg-2 px-0">{rightContent}</aside>
      </div>
    </div>
  );
};

export default NewsDetails;