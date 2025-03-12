import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import Card from "../../components/Card";

const Home = () => {
  //product context verileri
  const { products, setProducts, selectedCategory } =
    useContext(ProductContext);

  return (
    <div className="mt-4 container">
      <h1>{products.length} ürün bulundu</h1>
      <h1 className="text-primary fw-bold fs-2">
        {selectedCategory != "all" && selectedCategory}{" "}
      </h1>

      <div className="wrapper">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
