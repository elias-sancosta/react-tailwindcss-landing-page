const Stats = () => {
  return (
    <section className="bg-black" id="stats">
      <div className="grid grid-cols-2 gap-8 m-auto max-w-75 px-4 py-20">
        <div className="stats__content">
          <p className="relative isolate mb-4 pl-5 text-xl font-semibold text-white after:absolute after:content-[''] after:left-0 after:top-[-8px] after:transform after:translateY(-50%) after:h-[45px] after:aspect-square after:bg-[#ff581f] after:z-[-1]">
            Company
          </p>
          <h2 className="mb-4 text-[40px] font-semibold text-white">
            Our Stats
          </h2>
          <p className="text-[#a3a3a3]">
            With a team of dedicated experts and professionals, we bring a
            wealth of experience and knowledge to every project. Our deep
            industry insights and hands-on experience enable us to tackle even
            the most complex industrial challenges, providing you with tailored
            solutions that drive results.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="stats__card">
              <span className="text-[#ff581f] text-[28px]">
                <i className="ri-building-4-line"></i>
              </span>
              <h4 className="text-[32px] text-white font-bold">1800</h4>
              <p className="font-medium text-white">Worldwide Branches</p>
            </div>
            <div className="stats__card">
              <span className="text-[#ff581f] text-[28px]">
                <i className="ri-user-fill"></i>
              </span>
              <h4 className="text-[32px] text-white font-bold">1920</h4>
              <p className="font-medium text-white">Qualified Engineers</p>
            </div>
            <div className="stats__card">
              <span className="text-[#ff581f] text-[28px]">
                <i className="ri-user-smile-line"></i>
              </span>
              <h4 className="text-[32px] text-white font-bold">1612</h4>
              <p className="font-medium text-white">Work Facilities</p>
            </div>
            <div className="stats__card">
              <span className="text-[#ff581f] text-[28px]">
                <i className="ri-trophy-fill"></i>
              </span>
              <h4 className="text-[32px] text-white font-bold">1980</h4>
              <p className="font-medium text-white">Completed Projects</p>
            </div>
          </div>
        </div>
        <div className="grid gap-8">
          <img
            src="/stats-1.jpg"
            alt="stats"
            className="max-w-[450px] m-auto rounded-md"
          />
          <img
            src="/stats-2.jpg"
            alt="stats"
            className="max-w-[450px] m-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
export default Stats;
