const Header = () => {
  const imgStyle = {
    backgroundImage: `linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.8)
  ), url('/header.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <header style={imgStyle} className="box-border">
      <nav className="flex justify-between items-center py-8 px-4 max-w-75 m-auto">
        <div>
          <a href="#" className="text-[32px] text-white font-bold">
            Induz.
          </a>
        </div>
        <ul className="flex items-center gap-8 list-none" id="nav-links">
          <li>
            <a
              href="#home"
              className="p-1.5 text-base font-medium text-white hover:text-[#ff581f] duration-300 "
            >
              Home
            </a>
          </li>
          <li className="link">
            <a
              href="#about"
              className="p-1.5 text-base font-medium text-white hover:text-[#ff581f] duration-300"
            >
              About
            </a>
          </li>
          <li className="link">
            <a
              href="#stats"
              className="p-1.5 text-base font-medium text-white hover:text-[#ff581f] duration-300"
            >
              Stats
            </a>
          </li>
          <li className="link">
            <a
              href="#blog"
              className="p-1.5 text-base font-medium text-white hover:text-[#ff581f] duration-300"
            >
              Blog
            </a>
          </li>
          <li className="link">
            <a
              href="#subscribe"
              className="p-1.5 text-base font-medium text-white hover:text-[#ff581f] duration-300"
            >
              Subscribe
            </a>
          </li>
        </ul>
        <div className="text-2xl text-white hidden" id="menu-btn">
          <span>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </nav>
      <div
        className="max-w-75 flex flex-col justify-center items-center m-auto py-24 px-48 text-white"
        id="home"
      >
        <h1 className="text-[64px] font-bold text-center max-w-[900px] mb-8">
          The Reliable Industry Takes Many Forms.
        </h1>
        <button className="flex items-center gap-x-2.5 py-3 px-6 mb-24 outline-none border rounded-md text-base cursor-pointer">
          Read More
          <span className="text-xl duration-300 hover:transform hover:translate-x-1.5">
            <i className="ri-arrow-right-double-line"></i>
          </span>
        </button>
      </div>
    </header>
  );
};
export default Header;
