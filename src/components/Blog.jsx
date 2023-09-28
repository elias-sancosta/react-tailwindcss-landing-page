const Blog = () => {
  return (
    <section className="bg-[#111111]">
      <div className="max-w-75 m-auto px-4 py-20">
        <p className="relative isolate mb-4 pl-5 text-xl font-semibold text-white after:absolute after:content-[''] after:left-0 after:top-[-8px] after:transform after:translateY(-50%) after:h-[45px] after:aspect-square after:bg-[#ff581f] after:z-[-1]">
          Our Posts
        </p>
        <h2 className="mb-4 text-[40px] font-semibold text-white">
          Blog Posts
        </h2>
        <div className="blog__grid grid mt-16 grid-cols-3 gap-8">
          <div className="blog__card">
            <img src="/blog-1.jpg" alt="blog" className="rounded-md mt-4" />
            <div className="flex items-center gap-4 mb-4 mt-4">
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-user-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                By David
              </span>
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-time-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                Jun 28, 2022
              </span>
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-thumb-up-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                5
              </span>
            </div>
            <h4 className="text-[19.2px] font-semibold mb-2 text-white">
              Sustainability in Manufacturing
            </h4>
            <p className="text-[#a3a3a3]">
              Discover how sustainable practices are becoming a cornerstone of
              modern manufacturing.
            </p>
          </div>
          <div className="blog__card">
            <img src="/blog-2.jpg" alt="blog" className="rounded-md mt-4" />
            <div className="flex items-center gap-4 mb-4 mt-4">
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-user-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                By Sarah
              </span>
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-time-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                Nov 22, 2022
              </span>
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-thumb-up-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                18
              </span>
            </div>
            <h4 className="text-[19.2px] font-semibold mb-2 text-white">
              Navigating Industrial Safety
            </h4>
            <p className="text-[#a3a3a3]">
              Stay updated on the latest safety regulations, guidelines, and
              industry-specific best practices.
            </p>
          </div>
          <div className="blog__card">
            <img src="/blog-3.jpg" alt="blog" className="rounded-md mt-4" />
            <div className="flex items-center gap-4 mb-4 mt-4">
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-user-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                By Michael
              </span>
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-time-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                Mar 15, 2023
              </span>
              <span className="text-[#a3a3a3] text-sm">
                <i className="ri-thumb-up-line text-[#ff581f] text-base mr-[5px]"></i>{' '}
                20
              </span>
            </div>
            <h4 className="text-[19.2px] font-semibold mb-2 text-white">
              Innovations in Material Handling
            </h4>
            <p className="text-[#a3a3a3]">
              Discover the latest innovations in material handling, from robotic
              automation to intelligent logistics solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
