const About = () => {
  return (
    <section className="bg-[#111]" id="about">
      <div className="m-auto max-w-75 pt-20 pb-0 mb-0 max-h-[335px] px-4">
        <div className="grid grid-cols-3 gap-16 items-center bg-[#232220] rounded-xl p-6 transform translate-y-[-10rem]">
          <div className="col-span-2">
            <p className="relative isolate mb-4 pl-5 text-xl font-semibold text-white after:absolute after:content-[''] after:left-0 after:top-[-8px] after:transform after:translateY(-50%) after:h-[45px] after:aspect-square after:bg-[#ff581f] after:z-[-1]">
              About Us
            </p>
            <h2 className="mb-4 text-[40px] font-semibold text-white">
              Company History
            </h2>
            <p className="text-[#a3a3a3]">
              We are your trusted partner in the world of industrial solutions.
              With a legacy spanning 20+ years, we have established ourselves as
              a leading force in the industry, committed to delivering
              excellence in every facet of our operations. Your success is our
              success.
            </p>
            <br />
            <p className="text-[#a3a3a3]">
              We conduct ourselves with the utmost integrity in all our
              dealings, ensuring that our clients receive the highest quality
              products and services.
            </p>
          </div>
          <div className="grid gap-8">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-[#111111] py-[13px] px-[20px] text-[28px] text-[#ff581f] rounded-md">
                <i className="ri-global-fill"></i>
              </span>
              <h4 className="text-xl font-semibold text-white">
                The reliable industry takes many forms
              </h4>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-[#111111] py-[13px] px-[20px] text-[28px] text-[#ff581f] rounded-md">
                <i className="ri-bar-chart-fill"></i>
              </span>
              <h4 className="text-xl font-semibold text-white">
                Delivering beyond possible solutions
              </h4>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#111111] py-[13px] px-[20px] text-[28px] text-[#ff581f] rounded-md">
                <i className="ri-thumb-up-fill"></i>
              </span>
              <h4 className="text-xl font-semibold text-white">
                Success through human resources
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
