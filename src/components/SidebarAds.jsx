
// src/components/SidebarAds.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const SidebarAds = ({ area }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/ads")
      .then((res) => {
        console.log(res.data);
        // Filter ads by area, allow images, videos, and text
        const filtered = res.data.filter((ad) => ad.area === area);
        setAds(filtered);
      })
      .catch((err) => {
        console.error("Failed to fetch ads:", err);
      });
  }, [area]);

  return (
    <>
      {ads.map((ad) => (
        <div className="mb-4 d-flex justify-content-center" key={ad._id}>
          <div className="card shadow-sm border-0 w-100 text-center" style={{ maxWidth: "180px" }}>
            <div className="card-body p-3">
              {/* Title */}
              {ad.title && (
                <h6 className="fw-bold mb-2 fs-6 text-primary text-center">
                  {ad.title}
                </h6>
              )}

              {/* Media */}
              {ad.fileUrl ? (
                ad.fileUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                  // 🎥 Video
                  <video
                    src={`http://localhost:8082${ad.fileUrl}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="mx-auto d-block"
                    style={{
                      width: "100%",
                      maxWidth: "160px",
                      borderRadius: "10px",
                      display: "block",
                    }}
                  />
                ) : (
                  // 🖼️ Image — centered, no fixed height
                  <img
                    src={`http://localhost:8082${ad.fileUrl}`}
                    alt={ad.title}
                    className="mx-auto d-block"
                    style={{
                      width: "100%",
                      maxWidth: "160px",
                      height: "auto", // ✅ Natural height
                      objectFit: "contain",
                      borderRadius: "10px",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                )
              ) : (
                // 📝 Text-only ad
                <div
                  style={{
                    minHeight: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f8f9fa",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <span className="text-muted">{ad.description}</span>
                </div>
              )}

              {/* Description */}
              {ad.fileUrl && ad.description && (
                <div className="small text-muted mt-2">{ad.description}</div>
              )}

              {/* Date & Time */}
              {ad.createdAt && (
                <div className="small text-secondary mt-1">
                  {new Date(ad.createdAt).toLocaleString()}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SidebarAds;
