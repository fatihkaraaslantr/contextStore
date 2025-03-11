import { createContext, useEffect, useState } from "react";
import api from "../api";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //use State
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  //use Effect
  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;

    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, setSelectedCategory, selectedCategory }}
    >
      {/*  */}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
