import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Technology",
    icon: "fas fa-microchip",
    path: "/technology",
    color: "#0d6efd"
  },
  {
    name: "Politics",
    icon: "fas fa-landmark",
    path: "/politics",
    color: "#dc3545"
  },
  {
    name: "Entertainment",
    icon: "fas fa-film",
    path: "/entertainment",
    color: "#fd7e14"
  },
  {
    name: "Sports",
    icon: "fas fa-futbol",
    path: "/sports",
    color: "#198754"
  },
  {
    name: "Health",
    icon: "fas fa-heartbeat",
    path: "/health",
    color: "#6610f2"
  },
  {
    name: "Education",
    icon: "fas fa-graduation-cap",
    path: "/education",
    color: "#20c997"
  }
];

const Category = () => {
  return (
    <div className="container my-5 py-5">
      <h2 className=" text-center text-primary ">News Categories</h2>
      <div className="row g-4 justify-content-center">
        {categories.map((cat, idx) => (
          <div className="col-6 col-md-4 col-lg-3 d-flex" key={idx}>
            <Link
              to={cat.path}
              className="card shadow-sm border-0 w-100 text-decoration-none text-center py-4"
              style={{
                borderRadius: "1.5rem",
                background: "#fff",
                transition: "transform 0.2s",
                color: cat.color
              }}
            >
              <i className={`${cat.icon} mb-3`} style={{ fontSize: "2.5rem", color: cat.color }}></i>
              <h5 className="fw-semibold mb-0" style={{ color: cat.color }}>{cat.name}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;