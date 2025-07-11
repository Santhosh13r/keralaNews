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

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <button className="btn btn-outline-primary mb-4" onClick={() => navigate(-1)}>
            <i className="fas fa-arrow-left me-2"></i>Back
          </button>
          <div className="card shadow-lg border-0 rounded-4">
            <div className="ratio ratio-16x9 rounded-top-4 overflow-hidden">
              <img
                src={news.image_url || "/fallback.jpg"}
                alt={news.title}
                className="w-100 h-100 object-fit-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body p-4">
              <h2 className="card-title mb-3 text-primary fw-bold">{news.title}</h2>
              {/* Author */}
              {news.author && (
                <p className="mb-2 text-secondary">
                  <i className="fas fa-user me-2"></i>
                  <strong>By:</strong> {news.author}
                </p>
              )}
              {/* Main Description */}
              <p className="card-text fs-5" style={{ lineHeight: 1.7 }}>
                {news.description || "No description available"}
              </p>
              {/* Full Content */}
              {news.content && (
                <div className="mb-3">
                  <h5 className="fw-semibold mt-4">Full Story</h5>
                  <div className="fs-6" style={{ lineHeight: 1.8 }}>
                    {news.content}
                  </div>
                </div>
              )}
              {/* Tags */}
              {news.tags && Array.isArray(news.tags) && news.tags.length > 0 && (
                <div className="mb-3">
                  <span className="fw-semibold">Tags: </span>
                  {news.tags.map((tag, i) => (
                    <span key={i} className="badge bg-info text-dark me-2">{tag}</span>
                  ))}
                </div>
              )}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <small className="text-muted">
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
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;