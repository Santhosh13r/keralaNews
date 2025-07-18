import React, { useState } from "react";
import LogoImg from '../assets/Navbarlogo.jpg'; 

const AdminPages = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [contentType, setContentType] = useState("News"); // New state

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImg(file ? URL.createObjectURL(file) : null);
  };

const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc || !contentType) {
      alert("Please fill in all fields.");
    } else {
      const data = {
        title: title,
        description: desc,
        contentType: contentType,
        images: previewImg  // optional, if you converted file to Base64
      };

      fetch("http://localhost:8082/news/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(data => alert("News submitted successfully"))
      .catch(err => console.error(err));
    }
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
                width="48"
                height="48"
                className="mb-2"
                style={{ borderRadius: "8px", background: "#fff" }}
              />
              <h3 className="mb-0">Add News</h3>
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
                    <option value="Ads">Ads</option>
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
                  <label className="form-label fw-semibold">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange}
                    required
                  />
                  {previewImg && (
                    <div className="mt-2 text-center">
                      <img
                        src={previewImg}
                        alt="Preview"
                        style={{
                          maxWidth: "200px",
                          maxHeight: "120px",
                          borderRadius: "8px",
                        }}
                      />
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