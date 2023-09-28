const Testimonials = () => {
  return (
    <section className="bg-[#232220]">
      <div className="section__container customer__container max-w-75 m-auto px-4 py-20">
        <p className="relative isolate mb-4 pl-5 text-xl font-semibold text-white after:absolute after:content-[''] after:left-0 after:top-[-8px] after:transform after:translateY(-50%) after:h-[45px] after:aspect-square after:bg-[#ff581f] after:z-[-1]">
          Testimonials
        </p>
        <h2 className="mb-4 text-[40px] font-semibold text-white">
          What Our Customers Say
        </h2>
        <p className="text-[#a3a3a3] py-2 ">
          Discover what our valued customers have to say about their experiences
          partnering with Induz. At Induz, we take pride in delivering
          exceptional industrial solutions and services, and nothing speaks
          louder than the words of those who have entrusted us with their
          projects.
        </p>
        <div className="customer__review">
          {/*  Slider main container  */}
          <div className="w-full pb-4">
            {/*  Additional required wrapper  */}
            <div className="swiper-wrapper">
              {/*  Slides  */}
              <div className="swiper-slide">
                <div className="customer__review__card relative max-w-[600px] text-center m-auto isolate">
                  <span className="absolute top-0 left-0 text-[#ff581f] text-8xl opacity-10 ">
                    <i className="ri-double-quotes-r"></i>
                  </span>
                  <p className="leading-relaxed text-[#a3a3a3] mt-12 mb-8">
                    Working with Induz has been a game-changer for our
                    manufacturing operations. Their precision-engineered
                    machinery and expert guidance have not only improved
                    efficiency but also reduced downtime significantly. It's
                    more than a partnership; it's a strategic advantage.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src="/customer-1.jpg"
                      alt="customer"
                      className="max-w-[70px] rounded-full"
                    />
                    <div>
                      <h4 className="font-medium text-lg text-white">
                        John Smith
                      </h4>
                      <h5 className="font-normal text-sm text-[#a3a3a3]">
                        Industrialist
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer__review__card relative max-w-[600px] text-center m-auto isolate">
                  <span className="absolute top-0 left-0 text-[#ff581f] text-8xl opacity-10 ">
                    <i className="ri-double-quotes-r"></i>
                  </span>
                  <p className="leading-relaxed text-[#a3a3a3] mt-12 mb-8">
                    In the construction industry, deadlines and quality are
                    non-negotiable. Induz consistently delivered on both fronts.
                    Their dedication to project management and their skilled
                    workforce made our project a seamless success. We're
                    grateful for their expertise.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src="/customer-2.jpg"
                      alt="customer"
                      className="max-w-[70px] rounded-full"
                    />
                    <div>
                      <h4 className="font-medium text-lg text-white">
                        Laura Rodriguez
                      </h4>
                      <h5 className="font-normal text-sm text-[#a3a3a3]">
                        CEO & Founder
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer__review__card relative max-w-[600px] text-center m-auto isolate">
                  <span className="absolute top-0 left-0 text-[#ff581f] text-8xl opacity-10 ">
                    <i className="ri-double-quotes-r"></i>
                  </span>
                  <p className="leading-relaxed text-[#a3a3a3] mt-12 mb-8">
                    The logistics solutions provided by Induz have streamlined
                    our supply chain like never before. Their innovative
                    approach and attention to detail saved us time and
                    resources, ultimately boosting our bottom line. They're more
                    than a vendor; they're a partner in our success.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src="/customer-3.jpg"
                      alt="customer"
                      className="max-w-[70px] rounded-full"
                    />
                    <div>
                      <h4 className="font-medium text-lg text-white">
                        Mark Thompson
                      </h4>
                      <h5 className="font-normal text-sm text-[#a3a3a3]">
                        Architect
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  If we need pagination  */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
