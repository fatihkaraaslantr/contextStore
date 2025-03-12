import React, { useContext, useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import api from "../../api";
import { ProductContext } from "../../context/productContext";

const Header = () => {
  //seçili kategori state
  const { setSelectedCategory } = useContext(ProductContext);

  //kategori state
  const [categories, setCategories] = useState([]);
  //api
  useEffect(() => {
    api.get("/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div className="container-fluid">
          <a
            className="text-decoration-none text-black fs-3 d-flex align-items-center gap-2"
            href="#"
          >
            <span className="text-primary" style={{ fontSize: 30 }}>
              <FaShoppingBag />
            </span>
            <span className="fw-bold fs-4">Context Store</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-right" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center d-flex align-items-center">
              <div className="d-flex gap-3">
                <li className="nav-item">
                  <NavLink className="text-decoration-none fw-bold" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="text-decoration-none fw-bold"
                    to="/basket"
                  >
                    Basket
                  </NavLink>
                </li>
              </div>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="dropdown-item text-center"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
