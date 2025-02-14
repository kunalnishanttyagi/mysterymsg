import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white mt-0 px-6 md:px-16 h-[550px] flex justify-center items-end py-[30px] ">
      {/* Signup Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">
            Signup for latest news and insights from FelixN
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-1/3 px-4 py-2 text-black rounded-md"
            />
            <button className="bg-blue-600 px-6 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand Info */}
          <div>
            <h4 className="text-lg font-semibold">FelixN</h4>
            <p className="text-gray-400 mt-2">
              We create digital experiences for brands and companies by using technology.
            </p>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="cursor-pointer"  />
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=kunalnishanttyagi@gmail.com
" >
              <FaMailBulk className="cursor-pointer"/>
              </Link >
              <Link href="https://github.com/kunalnishanttyagi" ><FaGithub className="cursor-pointer" ></FaGithub>
              </Link >
              <Link href="https://www.linkedin.com/in/nishant-tyagi-8b7625254/"><FaLinkedinIn className="cursor-pointer"  /></Link>
            </div>
          </div>
          {/* Latest Blog */}
          <div>
            <h4 className="text-lg font-semibold">Latest blog</h4>
            <ul className="text-gray-400 space-y-2 mt-2">
              <li className="hover:text-white cursor-pointer">
                I think really important to design...
              </li>
              <li className="hover:text-white cursor-pointer">
                Recognizing the need is the primary...
              </li>
            </ul>
          </div>
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="text-gray-400 space-y-2 mt-2">
              <li className="hover:text-white cursor-pointer">About company</li>
              <li className="hover:text-white cursor-pointer">Company services</li>
              <li className="hover:text-white cursor-pointer">Job opportunities</li>
              <li className="hover:text-white cursor-pointer">Creative people</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="text-gray-400 space-y-2 mt-2">
              <li>📧 kunalnishanttyagi@gmail.com</li>
              <li>📞 +9548169407</li>
              <li>📍 Ghaziabad, Delhi, INDIA</li>
            </ul>
          </div>
        </div>
        {/* Bottom Footer */}
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p>© 2025 FelixN</p>
          <div className="flex gap-6">
            <p className="hover:text-white cursor-pointer">Privacy policy</p>
            <p className="hover:text-white cursor-pointer">Legal notice</p>
            <p className="hover:text-white cursor-pointer">Terms of service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
