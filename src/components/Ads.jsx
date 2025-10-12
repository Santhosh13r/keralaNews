import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"; // keep your sliding animation

const Ads = ({ area }) => {
  const [imageAds, setImageAds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8082/api/ads")
      .then(res => {
        const filtered = res.data.filter(
          ad =>
            ad.area === area &&
            ad.fileUrl &&
            ad.fileUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i)
        );
        setImageAds(filtered);
      })
      .catch(err => console.error("Error fetching ads:", err));
  }, [area]);

  useEffect(() => {
    if (imageAds.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % imageAds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageAds]);

  if (imageAds.length === 0) return null;

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageAds.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imageAds.length) % imageAds.length);
  };

  return (
    <>
      {/* 🔸 Centered Banner with Side Padding */}
      <div
        className="my-4 flex justify-center px-4"
      >
        <div
          className="overflow-hidden rounded-xl shadow-md bg-white"
          style={{
            maxWidth: "760px",
            width: "100%",
            height: "180px",        // ✅ Good fixed height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`http://localhost:8082${imageAds[currentIndex].fileUrl}`}
            alt={imageAds[currentIndex].title || "Advertisement"}
            className="cursor-pointer sliding-ad"
            onClick={() => handleImageClick(currentIndex)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              transition: "transform 0.4s ease, opacity 0.4s ease",
            }}
            loading="lazy"
            onError={(e) => (e.target.src = "/fallback-ad.png")}
          />
        </div>
      </div>

      {/* 🔸 Popup Lightbox */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closePopup}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-gray-300"
          >
            ✕
          </button>

          {imageAds.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-5 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full p-3 backdrop-blur-sm transition text-4xl"
            >
              ‹
            </button>
          )}

          <img
            src={`http://localhost:8082${imageAds[currentIndex].fileUrl}`}
            alt={imageAds[currentIndex].title || "Ad Full View"}
            className="max-h-[80vh] max-w-[90vw] rounded shadow-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {imageAds.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-5 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full p-3 backdrop-blur-sm transition text-4xl"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Ads;
