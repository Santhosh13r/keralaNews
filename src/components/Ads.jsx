import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"; // for sliding animation

const Ads = ({ area }) => {
  const [imageAds, setImageAds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch image ads for the given area
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

    // Change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % imageAds.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [imageAds]);

  if (imageAds.length === 0) return null; // nothing to show

  return (
    <div className="my-3 text-center overflow-hidden" style={{ maxWidth: "728px", margin: "0 auto" }}>
      <img
        src={`http://localhost:8082${imageAds[currentIndex].fileUrl}`}
        alt={imageAds[currentIndex].title || "Advertisement"}
        className="sliding-ad"
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          transition: "opacity 0.5s ease-in-out"
        }}
      />
    </div>
  );
};

export default Ads;
