import React, { useState } from "react";
import LogoImg from '../assets/Navbarlogo.jpg'; 

const AdminPages = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImg(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Title: ${title}\nDescription: ${desc}\nImage: ${image ? image.name : "None"}`
    );
    // Here you would handle uploading to your backend
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
                style={{ borderRadius: "px", background: "#fff" }}
              />
              <h3 className="mb-0">Add News</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
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