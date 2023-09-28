const Subscribe = () => {
  return (
    <section className="subscribe-bg">
      <div className="flex flex-col justify-center items-center max-w-[700px] m-auto px-4 py-20 text-center">
        <p className="relative isolate mb-4 pl-5 text-xl font-semibold text-white after:absolute after:content-[''] after:left-0 after:top-[-8px] after:transform after:translateY(-50%) after:h-[45px] after:aspect-square after:bg-[#ff581f] after:z-[-1]">
          Newsletter
        </p>
        <h2 className="mb-4 text-[40px] font-semibold text-white">
          Subscribe To Get The Latest News & Updates
        </h2>
        <form className="flex items-center gap-4 py-4 px-4 justify-center">
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-6 border rounded-md border-white outline-none text-base flex-1 w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-6 border rounded-md border-white outline-none text-base flex-1 w-full"
          />
          <button className="flex flex-1 w-full items-center justify-center gap-x-2.5 py-2 px-6 outline-none rounded-md text-base cursor-pointer bg-[#ff581f]">
            Subscribe
          </button>
        </form>
        <p className="text-white">
          By sumbitting this form, you agree to the
          <a href="#" className="text-[#ff581f] px-1">
            privacy policy
          </a>
          and
          <a href="#" className="text-[#ff581f] px-1">
            terms of use.
          </a>
        </p>
      </div>
    </section>
  );
};
export default Subscribe;
