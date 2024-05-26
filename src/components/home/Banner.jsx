const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/banner-bg.jpeg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Reliable Power Solutions</h1>
          <p className="mb-5">
            Ensure uninterrupted power supply with our top-of-the-line power
            inverters. Experience quality, efficiency, and durability for your
            energy needs.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
