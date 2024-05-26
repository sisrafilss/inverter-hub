import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-6">Our Top Products</h2>
        <p className="max-w-xl mx-auto">
          Discover our top-selling power inverters, crafted to deliver reliable
          and efficient power solutions for all your needs.
        </p>
      </div>
      <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
