import { useLoaderData } from "react-router-dom";
import ProductCardDashboard from "../../components/Dashboard/ProductCardDashboard";

const AllProducts = () => {
  const products = useLoaderData();

  return (
    <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {products.map((product) => (
        <ProductCardDashboard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
