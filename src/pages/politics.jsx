import React, { useEffect, useState } from "react";
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
'https://newsdata.io/api/1/latest?apikey=pub_1d96941b1d70474d92c8cb5f2107f429&country=in&language=ml&category=politics'      );
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

  return (
    <div className="container my-5 py-5">
      <h2 className="mb-4 p-3 text-primary-emphasis bg-secondary-subtle border border-primary-subtle rounded-3">
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
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
              <div className="card shadow border-0 rounded-4 h-100 w-100 politics-card">
                <div className="ratio ratio-16x9">
                  <img
                    src={item.image_url || "/fallback.jpg"}
                    className="card-img-top rounded-top-4 object-fit-cover"
                    alt={item.title}
                    style={{ objectFit: "cover", maxHeight: "220px" }}
                    onError={e => (e.target.src = "/fallback.jpg")}
                  />
                </div>
                <div className="card-body d-flex flex-column bg-light">
                  <h5
                    className="card-title mb-2 text-danger"
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
                    className="card-text text-muted small mb-3"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.description || "No description available"}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger btn-sm w-100"
                    >
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <small className="text-muted">
                    {item.pubDate && new Date(item.pubDate).getDate()}/{new Date(item.pubDate).getMonth() + 1}/{new Date(item.pubDate).getFullYear()}
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
    </div>
  );
};

export default Politics;