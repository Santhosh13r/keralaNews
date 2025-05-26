import React, { useEffect, useState } from "react";
import axios from "axios";

const Sports = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchSports = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://newsdata.io/api/1/latest?apikey=pub_e8140e97174a4115bc636c31a999c6bf&category=sports&language=ml"
      );
      setData(response.data.results || []);
    } catch (err) {
      setError("Error fetching sports news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSports();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Sports News</h2>
      {loading && <div className="text-center py-5">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row g-4">
        {data.length > 0 ? (
          data.map((item, idx) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
              <div className="card shadow rounded-4 border-0 d-flex flex-column h-100 w-100">
                <div className="ratio ratio-16x9">
                  <img
                    src={item.image_url || "/fallback.jpg"}
                    className="card-img-top rounded-top-4 object-fit-cover"
                    alt={item.title}
                    style={{ objectFit: "cover" }}
                    onError={(e) => (e.target.src = "/fallback.jpg")}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted small mb-3">
                    {item.description || "No description available"}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm w-100"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <small className="text-muted">
                    {item.pubDate &&
                      new Date(item.pubDate).toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No sports news found</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Sports;