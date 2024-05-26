import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const product = useLoaderData();

  console.log(product);

  return (
    <div className="max-w-4xl mx-auto p-4 my-16">
      <div className="bg-white  rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="w-full h-64 object-cover md:w-64 md:h-auto"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="p-8">
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              {product.title}
            </h1>
            <h3 className="text-base font-semibold text-gray-500">
            Price: <span className="text-green-700">${product.price}</span>
          </h3>
          <p className="text-base font-semibold text-gray-500">
            Brand: <span className="text-green-600">{product.brand}</span>
          </p>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
