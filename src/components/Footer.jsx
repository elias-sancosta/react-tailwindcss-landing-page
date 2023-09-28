const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-75 m-auto px-4 py-20 grid grid-cols-4 gap-8">
        <div className="footer__col">
          <h5>
            <a
              href="#"
              className="inline-block text-white text-2xl font-semibold mb-4"
            >
              Induz.
            </a>
          </h5>
          <p className="mb-8 text-[#a3a3a3] max-w-[250px]">
            We strive to be at the forefront of technological advancements and
            industry best practices, consistently exceeding the expectations of
            our clients.
          </p>
          <div className="flex items-center flex-wrap gap-4">
            <a
              href="#"
              className="bg-[#232220] text-xl rounded-full text-[#ff581f] py-[5px] px-[10px] cursor-pointer transition duration-300 hover:text-white hover:bg-[#ff581f]"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="#"
              className="bg-[#232220] text-xl rounded-full text-[#ff581f] py-[5px] px-[10px] cursor-pointer transition duration-300 hover:text-white hover:bg-[#ff581f]"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="#"
              className="bg-[#232220] text-xl rounded-full text-[#ff581f] py-[5px] px-[10px] cursor-pointer transition duration-300 hover:text-white hover:bg-[#ff581f]"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="#"
              className="bg-[#232220] text-xl rounded-full text-[#ff581f] py-[5px] px-[10px] cursor-pointer transition duration-300 hover:text-white hover:bg-[#ff581f]"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="text-lg mb-4 font-semibold text-white">Quick Links</h4>
          <div className="flex flex-col  gap-5">
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Career
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="text-lg mb-4 font-semibold text-white">
            Our Services
          </h4>
          <div className="footer__links flex flex-col gap-5">
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Chemical Research
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Construction Material
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Agricultural Engineering
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Bridge Engineering
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Automative & Systems
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="text-lg mb-4 font-semibold text-white">Help</h4>
          <div className="footer__links flex flex-col gap-5">
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Support
            </a>
            <a
              href="#"
              className="text-[#a3a3a3] hover:text-[#ff581f] transition duration-300"
            >
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
      <div className="text-[#a3a3a3] text-center text-sm p-4">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
