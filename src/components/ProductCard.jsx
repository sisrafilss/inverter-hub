const ProductCard = () => {
  return (
    <div className="card card-compact max-w-80 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center space-y-3">
        <h2 className="card-title font-semibold">1000W Solar Inverter</h2>
        <div className="flex justify-between">
          <h3 className="text-base font-semibold text-gray-500">
            Price: <span className="text-green-700">$55</span>
          </h3>
          <p className="text-base font-semibold text-gray-500">
            Brand: <span className="text-green-600">Lumious</span>
          </p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eveniet.</p>
      </div>
      <button className="btn btn-primary w-full rounded-none rounded-b-xl">
        See Details
      </button>
    </div>
  );
};

export default ProductCard;
