import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:8082/api/ads";

const AdManager = () => {
  const [ads, setAds] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [media, setMedia] = useState(null);
  const [area, setArea] = useState("");

  const fetchAds = async () => {
    const res = await axios.get(API);
    setAds(res.data);
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !desc || !media || !area) return alert("All fields required");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("media", media);
    formData.append("area", area);
    await axios.post(API, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    setTitle(""); setDesc(""); setMedia(null); setArea("");
    fetchAds();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchAds();
  };

  return (
    <div
      className="container py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)"
      }}
    >
      <div className="row justify-content-center mt-5 pt-3 gx-4">
        <div className="col-12 col-lg-8">
          <div className="card shadow-lg border-0 rounded-4 mb-5">
            <div className="card-body p-4">
              <h3 className="mb-4 text-primary fw-bold">
                <i className="fas fa-bullhorn me-2"></i>Add New Advertisement
              </h3>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12 col-md-6">
                  <input
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*,video/*"
                    onChange={e => setMedia(e.target.files[0])}
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <select
                    className="form-select"
                    value={area}
                    onChange={e => setArea(e.target.value)}
                    required
                  >
                    <option value="">Select Area</option>
                    <option value="left">Left Sidebar</option>
                    <option value="right">Right Sidebar</option>
                    <option value="center">Top/Center</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    rows={3}
                    required
                  />
                </div>
                <div className="col-12 text-end">
                  <button className="btn btn-success px-4" type="submit">
                    <i className="fas fa-plus-circle me-2"></i>Add
                  </button>
                </div>
              </form>
            </div>
          </div>

          <h4 className="mb-4 text-primary fw-bold">
            <i className="fas fa-ad me-2"></i>All Advertisements
          </h4>
          <div className="row g-4">
            {ads.map(ad => (
              <div className="col-12 col-md-6 col-lg-4 d-flex" key={ad._id}>
                <div className="card shadow border-0 rounded-4 d-flex flex-column h-100 w-100 ad-card-hover">
                  <div className="ratio ratio-16x9 rounded-top-4 overflow-hidden">
                    {ad.fileUrl.endsWith('.mp4') ? (
                      <video
                        src={`http://localhost:8082${ad.fileUrl}`}
                        controls
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        className="rounded-top-4"
                      />
                    ) : (
                      <img
                        src={`http://localhost:8082${ad.fileUrl}`}
                        alt={ad.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        className="rounded-top-4"
                      />
                    )}
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title text-primary fw-semibold mb-2" style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}>
                      {ad.title}
                    </h6>
                    <p className="card-text text-muted small mb-3" style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}>
                      {ad.description}
                    </p>
                    <div className="mt-auto text-end">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(ad._id)}
                      >
                        <i className="fas fa-trash-alt me-1"></i>Delete
                      </button>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-end">
                    <small className="text-muted">
                      {ad.createdAt && new Date(ad.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
            {ads.length === 0 && (
              <div className="col-12 text-center text-muted py-5">
                <i className="fas fa-info-circle fa-2x mb-2"></i>
                <div>No advertisements found.</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>
        {`
          .ad-card-hover {
            transition: transform 0.25s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.25s;
          }
          .ad-card-hover:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 8px 32px rgba(13,110,253,0.18);
            z-index: 2;
          }
        `}
      </style>
    </div>
  );
};

export default AdManager;