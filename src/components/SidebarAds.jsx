// src/components/SidebarAds.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const SidebarAds = ({ area }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8082/api/ads")
      .then(res => {
        console.log(res.data);
        // Filter ads by area, allow images, videos, and text
        const filtered = res.data.filter(ad => ad.area === area);
        setAds(filtered);
      })
      .catch(err => {
        console.error("Failed to fetch ads:", err);
      });
  }, [area]);

  return (
    <>
      {ads.map(ad => (
        <div className="mb-4" key={ad._id}>
          <div className="card shadow-sm border-0">
            <div className="card-body text-center p-3">
              {/* Title */}
              {ad.title && (
                <h6 className="fw-bold mb-2 fs-6 text-primary">
                  {ad.title}
                </h6>
              )}

              {/* Media */}
              {ad.fileUrl ? (
                ad.fileUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                  // Video
                  <video
                    src={`http://localhost:8082${ad.fileUrl}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      maxWidth: "140px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                  />
                ) : (
                  // Image
                  <img
                    src={`http://localhost:8082${ad.fileUrl}`}
                    alt={ad.title}
                    style={{
                      width: "100%",
                      maxWidth: "140px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                  />
                )
              ) : (
                // Text-only ad
                <div
                  style={{
                    minHeight: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f8f9fa",
                    borderRadius: "10px",
                    padding: "10px"
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
