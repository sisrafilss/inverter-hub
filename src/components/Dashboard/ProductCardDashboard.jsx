import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCardDashboard = ({ product }) => {
  return (
    <div className="card card-compact max-w-sm bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-body text-center space-y-3">
        <h2 className="card-title font-semibold">{product.title}</h2>
        <div className="flex justify-between">
          <h3 className="text-base font-semibold text-gray-500">
            Price: <span className="text-green-700">{product.price}</span>
          </h3>
          <p className="text-base font-semibold text-gray-500">
            Brand: <span className="text-green-600">{product.brand}</span>
          </p>
        </div>
        <p>{product.description}</p>
      </div>

      <div className="flex justify-around p-4">
        <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm rounded">Details</Link>
        <button className="btn btn-success text-white btn-sm rounded">Edit</button>
        <button className="btn btn-warning btn-sm rounded">Delete</button>
      </div>
    </div>
  );
};

export default ProductCardDashboard;
