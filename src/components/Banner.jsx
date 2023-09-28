const Banner = () => {
  const imgStyle = {
    backgroundImage: `linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  ), url('/banner.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section style={imgStyle}>
      <div className="max-w-75 m-auto px-4 pt-20">
        <div className="max-w-[800px]">
          <p className="relative isolate mb-4 pl-5 text-xl font-semibold text-white after:absolute after:content-[''] after:left-0 after:top-[-8px] after:transform after:translateY(-50%) after:h-[45px] after:aspect-square after:bg-[#ff581f] after:z-[-1]">
            More Info
          </p>
          <h2 className="mb-4 text-[40px] font-semibold text-white">
            We Believe In Building Long Lasting Business Relationships
          </h2>
          <p className="text-white max-w-[600px]">
            While we have a global reach, we understand the importance of local
            support. Our network of offices and partners across Countries allows
            us to serve you with the personal touch of a local company, while
            leveraging our global resources.
          </p>
          <div className="flex items-center gap-8 text-white pt-8">
            <button className="flex items-center gap-x-2.5 py-3 px-6 mb-24 outline-none border rounded-md text-base cursor-pointer">
              Read More
              <span className="text-xl duration-300 hover:transform hover:translate-x-1.5">
                <i className="ri-arrow-right-double-line"></i>
              </span>
            </button>
            <button className="flex items-center gap-x-2.5 py-3 px-6 mb-24 outline-none rounded-md text-base cursor-pointer bg-[#ff581f]">
              Get a Quote
              <span className="text-xl duration-300 hover:transform hover:translate-x-1.5">
                <i className="ri-arrow-right-double-line"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
