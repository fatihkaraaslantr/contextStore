import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import Card from "../../components/Card";

const Home = () => {
  const { products, setProducts, selectedCategory } =
    useContext(ProductContext);

  return (
    <div className="mt-4 container">
      <h1>{products.length} ürün bulundu</h1>
      <h1>
        {selectedCategory != "all" && selectedCategory + " için sonuçlar"}{" "}
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
