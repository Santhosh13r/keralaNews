import React, { useState } from "react";
import LogoImg from '../assets/logo1.png'; 

const AdminPages = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [media, setMedia] = useState(null);
  const [previewMedia, setPreviewMedia] = useState(null);
  const [mediaType, setMediaType] = useState(""); // "image" or "video"
  const [contentType, setContentType] = useState("News"); // New state

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setMedia(file);
    const type = file.type.startsWith("video") ? "video" : "image";
    setMediaType(type);
    setPreviewMedia(URL.createObjectURL(file));
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !contentType || !media) {
      alert("Please fill in all fields and upload an image or video.");
      return;
    }

    // Use FormData for file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("contentType", contentType);
    formData.append("media", media);

    fetch("http://localhost:8082/news/post", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => alert("News/Ad submitted successfully"))
      .catch(err => console.error(err));
  };


  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 mt-5">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <img
                src={LogoImg}
                alt="Logo"
               
                height="48"
                className="mb-2"
                style={{ borderRadius: "8px", background: "#fff" }}
              />
              <h3 className="mb-0">Add News / Ad</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Content Type</label>
                  <select
                    className="form-select"
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                  >
                    <option value="Ads">Ad</option>
                    <option value="News">News</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Upload Image or Video</label>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    className="form-control"
                    onChange={handleMediaChange}
                    required
                  />
                  {previewMedia && (
                    <div className="mt-3 text-center">
                      {mediaType === "image" ? (
                        <img
                          src={previewMedia}
                          alt="Preview"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "180px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
                          }}
                        />
                      ) : (
                        <video
                          src={previewMedia}
                          controls
                          style={{
                            maxWidth: "100%",
                            maxHeight: "180px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPages;