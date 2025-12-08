import React from "react";
import BorderRayCircuit from "../BorderRay/borderRay";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import about1 from "../../images/about1.svg";
import about2 from "../../images/about2.svg";
import about3 from "../../images/about3.svg";
import about4 from "../../images/about4.svg";
import aboutlogo1 from "../../images/aboutlogo1.svg";
import aboutlogo2 from "../../images/aboutlogo2.svg";
import aboutlogo3 from "../../images/aboutlogo3.svg";
import aboutlogo4 from "../../images/aboutlogo4.svg";
import token from "../../images/token.png";

function WhyBecome() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftData = [
    {
      banner: about1,
      title: "Gain recognition as an early advocate of gold-backed assets",
      img: aboutlogo1,
    },
    {
      banner: about2,
      title: "Contribute to one of the most trusted RWA ecosystems in Web3",
      img: aboutlogo2,
    },
  ];
  
  const rightData = [
    {
      banner: about3,
      title:
        "Earn performance-based rewards, exclusive access, and global visibility.",
      img: aboutlogo3,
    },
    {
      banner: about4,
      title:
        "Join a network of like-minded builders, investors, and creators shaping the new digital economy.",
      img: aboutlogo4,
    },
  ];

  return (
    <div className="flex flex-col gap-6 text-center justify-center items-center mt-6">
      <h1 className="text-[#26306D] text-3xl font-bold">
        Why Become a BIGOD Ambassador?
      </h1>
      <div className="flex flex-col gap-1">
        <p className="text-[#224187] text-xl ">
          As a BIGOD Ambassador, you’ll become a key player in <br /> redefining
          how people see digital value
        </p>
      </div>
      <BorderRayCircuit />
      <div className="md:max-w-[1120px] sm:max-w-[1000px] max-w-[600px] w-full flex sm:flex-row md:flex-row flex-col justify-center items-center lg:p-0 p-3 mt-12 mb-12">
        <div className="flex flex-col gap-10 mr-0 md:mr-[-100px] lg:mr-[-140px] ">
          {leftData.map((item, index) => (
            <div
              className="relative "
              key={index}
              data-aos={isMobile ? "fade-up" : "fade-right"}
              data-aos-delay={index * 300}
            >
              <img src={item.banner} alt="" />
              <div className="absolute inset-0 flex flex-col  gap-4 items-center justify-center md:px-24 px-4 text-center">
                <img src={item.img} alt="" className="lg:h-[65px] md:h-[40px] h-[50px]" />
                <p className="lg:text-xl md:text-base text-base text-white font-medium text-center mb-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:block  hidden z-30">
          <img src={token} className="w-[500px] max-w-full" />
        </div>
        <div className="md:hidden block mt-7 mb-7 z-30">
          <img
            src={token}
            className="w-[260px] max-w-full animate-spin-reverse-slow z-20"
          />
        </div>
        <div className="flex flex-col gap-10 ml-0 md:ml-[-100px] lg:ml-[-140px]">
          {rightData.map((item, index) => (
            <div
              className="relative"
              key={index}
              data-aos={isMobile ? "fade-up" : "fade-left"}
              data-aos-delay={index * 300}
            >
              <img src={item.banner} alt="" />
              <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center md:px-24 px-4 text-center">
                <img src={item.img} alt="" className="lg:h-[65px] md:h-[40px] h-[50px]" />
                <p className="lg:text-xl md:text-base text-base text-white font-medium text-center mb-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyBecome;
