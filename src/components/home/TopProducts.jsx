import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    title: "1000W Solar Inverter",
    price: "$199",
    description: "High-efficiency 1000W solar inverter for residential use.",
    image: "/images/products/inverter-img-1.jpg",
    brand: "Luminous",
  },
  {
    id: 2,
    title: "2000W Pure Sine Wave Inverter",
    price: "$299",
    description:
      "Reliable 2000W pure sine wave inverter for all your power needs.",
    image: "/images/products/inverter-img-2.jpg",
    brand: "Exide",
  },
  {
    id: 3,
    title: "500W Portable Power Inverter",
    price: "$149",
    description: "Compact 500W power inverter, perfect for on-the-go use.",
    image: "/images/products/inverter-img-3.jpg",
    brand: "Microtek",
  },
  {
    id: 4,
    title: "3000W Heavy Duty Inverter",
    price: "$399",
    description:
      "Durable 3000W inverter for industrial and heavy-duty applications.",
    image: "/images/products/inverter-img-4.jpg",
    brand: "Sukam",
  },
  {
    id: 5,
    title: "1500W Digital Inverter",
    price: "$249",
    description: "Advanced 1500W digital inverter with smart technology.",
    image: "/images/products/inverter-img-5.jpg",
    brand: "APC",
  },
  {
    id: 6,
    title: "800W Modified Sine Wave Inverter",
    price: "$179",
    description: "Affordable 800W modified sine wave inverter for basic needs.",
    image: "/images/products/inverter-img-6.jpg",
    brand: "Luminous",
  },
];

const TopProducts = () => {
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
