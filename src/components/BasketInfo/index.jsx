import React from "react";
import { Link } from "react-router-dom";

const BasketInfo = () => {
  return (
    <div className="text-center fs-4">
      <p>İlk olarak sepete ürün ekle</p>
      <Link className="btn btn-primary" to="/">
        Ürünlere Git
      </Link>
    </div>
  );
};

export default BasketInfo;
