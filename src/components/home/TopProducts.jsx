import ProductCard from "../ProductCard";

const TopProducts = () => {
  return (
    <div className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-6">Our Top Products</h2>
        <p className="max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil
          ab hic officia id eaque,
        </p>
      </div>
      <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default TopProducts;
