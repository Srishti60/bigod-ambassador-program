import React from "react";
import { FaFacebookF,  FaTwitter,FaInstagram ,FaTelegram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";



const Footer = () => {
  return (
    <div className="bg-[#26306D] ">
      <div className=" text-white py-14 px-6 md:px-20"  >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-4 gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="https://www.facebook.com/bigodtoken/" target="_blank" className="h-[25px] w-[25px] bg-[#16BBF9] flex justify-center items-center text-sm text-black rounded">
              <FaFacebookF color="#fff" />
            </a>
            <a href="https://www.youtube.com/@bigodtoken" target="_blank" className="h-[25px] w-[25px] bg-[#16BBF9] flex justify-center items-center text-sm text-black rounded">
              <IoLogoYoutube color="#fff" />
            </a>
            <a href="https://www.instagram.com/bigod.token/" target="_blank" className="h-[25px] w-[25px] bg-[#16BBF9] flex justify-center items-center text-sm text-black rounded">
              <FaInstagram color="#fff" />
            </a>
              <a href="https://x.com/BiGODToken" target="_blank" className="h-[25px] w-[25px] bg-[#16BBF9] flex justify-center items-center text-sm text-black rounded">
              <FaXTwitter color="#fff" />
            </a>
              <a href="https://t.me/+l_SYVIc9gPkyNzk1" target="_blank" className="h-[25px] w-[25px] bg-[#16BBF9] flex justify-center items-center text-sm text-black rounded">
              <FaTelegram color="#fff" />
            </a>
           
          </div>
          <p className="uen-tagline">
            <span>UEN (202520458M)</span>
            </p>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Site Map</h3>
          <ul className="space-y-2 text-gray-300">
             <li className="cursor-pointer">
                  <a href="#">Home</a>
                </li>
               
                <li>
                  <a href="https://bingold.to/whitepaper.pdf" target="_blank"  className="hover:text-white">
                    Whitepaper
                  </a>
                </li>
             
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-gray-300">
           
            <li><a href="https://investor.bingold.to/terms-and-conditions"  target="_blank" className="hover:text-white">Terms & Conditions</a></li>
                <li className="cursor-pointer">
                  <a href ="https://bingold.to/withdraw-policy" target="_blank" >
                  <p>Withdrawal Policy</p>
                  </a>
                </li>
          </ul>
        </div>

        {/* Resource */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Resource</h3>
          <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer">
                  <a href="https://bingold.to/#tokenomics">Tokenomics</a>
                </li>
                <li className="cursor-pointer">
                  <a href="https://bingold.to/#roadmap">Roadmap</a>
                </li>
                <li className="cursor-pointer">
                  <a href="https://bingold.to/#faq">FAQ</a>
                </li>
                <li className="cursor-pointer">
                  <a href ="https://bingold.to/our-partner" target="_blank" >
                  <p>Our Partner</p>
                  </a>
                </li>
          </ul>
        </div>
      </div>
      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-gray-400">
       &copy; All rights reserved Bingold
      </div>
    </div>
    </div>
  );
};

export default Footer;
