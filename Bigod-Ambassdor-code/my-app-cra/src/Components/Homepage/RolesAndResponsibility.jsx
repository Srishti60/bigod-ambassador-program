import React from "react";
import BorderRayCircuit from "../BorderRay/borderRay";
import rolesImage from "../../images/Coin.gif";
import roles1 from "../../images/roles1.svg";
import roles2 from "../../images/roles2.svg";
import roles3 from "../../images/roles3.svg";
import roles4 from "../../images/roles4.svg";
import roles5 from "../../images/roles5.svg";

function RolesAndResponsibility() {
  const leftData = [
    {
      title: "Social Media Moderator",
      desc1:
        "Actively engage with online communities about BIGOD and RWA topics across Telegram, X, Facebook, and CMC.",
      desc2:
        "Answer questions, encourage discussion, and maintain a positive, educational environment.",
      icon: roles1,
    },
    {
      title: "Network Connector",
      desc1:
        "Identify and connect with Web3 KOLs, media outlets, and partner communities for collaborations or co-marketing activities.",
      desc2:
        "",
      icon: roles2,
    },
    
    // {
    //   title: "Event or Meetup Host ",
    //   desc1: "Share insights and updates from your local market with the core team.",
    //   desc2:
    //     "",
    //   icon: roles5,
    // },
  ];
  const rightData=[
   {
      title: "Content Creator",
      desc1: "Create and share engaging content such as posts, infographics, short videos, or blog articles about BIGOD, tokenized gold, and RWA.",
      desc2:
        "Translate or localize content for your region to reach a wider audience.",
      icon: roles3,
    },
    {
      title: "Community Builder",
      desc1: "Work with other ambassadors to organize campaigns, AMA sessions, and local initiatives that strengthen community trust.",
      desc2:
        "Share insights and updates from your local market with the core team.",
      icon: roles4,
    },
  ]

  return (
    <div className="flex flex-col gap-6 text-center justify-center items-center  ">
      <h1 className="text-[#26306D] text-3xl font-bold mt-16">
        Roles & Responsibilities
      </h1>
      <BorderRayCircuit />
        <div className="md:max-w-[1120px] sm:max-w-[1000px] max-w-[600px] w-full flex sm:flex-row md:flex-row flex-col justify-center items-center lg:p-0 p-3 mt-12 mb-12">

        <div
          className="flex flex-col gap-24"
        >
        {leftData.map((card, idx) => (
          <div
            key={idx}
            className="group relative"
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            <div className="flex flex-col items-start rounded-md">
              <div className="flex flex-col">
                <div className="flex w-full relative">
                  <img src={card.icon} alt="" className="h-[65px] -left-4 absolute z-10 -top-12 " />
                  <div className="absolute  -top-8 h-[45px] md:max-w-[350px] w-full   bg-[#244286] flex justify-center items-center border-[#f8E48E] border-2 rounded-tr-2xl ">
                    <h3 className="md:text-lg text-lg xs:text-sm xs:text-center text-[#fff] font-semibold">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="bg-white p-[0px_20px_20px_20px] border-[#244286] border-2 rounded-2xl">
                  <div className="max-w-[350px] h-[200px] lg:h-[200px] md:h-[200px] xs:h-[340px] w-full bg-[#244286] flex flex-col justify-center items-center gap-3 rounded-2xl p-3">
                    <p className="text-base text-left text-white font-normal">
                      {card.desc1}
                    </p>
                    <p className="text-base text-left text-white font-normal">
                      {card.desc2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className="md:block sm:block hidden z-30">
          <img src={rolesImage} className="w-[500px] max-w-full" />
        </div>
        <div className="md:hidden sm:hidden block mt-7 mb-7 z-30">
          <img
            src={rolesImage}
            className="w-[260px] max-w-full animate-spin-reverse-slow z-20"
          />
        </div>
         <div
          className="flex flex-col gap-24"
        >
        {rightData.map((card, idx) => (
          <div
            key={idx}
            className="group relative"
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            <div className="flex flex-col items-start rounded-md">
              <div className="flex flex-col">
                <div className="flex w-full relative">
                  <img src={card.icon} alt="" className="h-[65px] -left-4 absolute z-10 -top-12 " />
                  <div className="absolute  -top-8 h-[45px] md:max-w-[334px] w-full  bg-[#244286] flex justify-center items-center border-[#f8E48E] border-2 rounded-tr-2xl ">
                    <h3 className="md:text-lg text-lg xs:text-sm xs:text-center text-[#fff] font-semibold">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="bg-white p-[0px_20px_20px_20px] border-[#244286] border-2 rounded-2xl">
                  <div className="max-w-[350px] h-[200px] lg:h-[200px] md:h-[200px] xs:h-[340px] w-full bg-[#244286] flex flex-col justify-center items-center gap-3 rounded-2xl p-3">
                    <p className="text-base text-left text-white font-normal">
                      {card.desc1}
                    </p>
                    <p className="text-base text-left text-white font-normal">
                      {card.desc2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     <div className="p-3">
            <div className="flex flex-col items-start rounded-md">
              <div className="flex flex-col">
                <div className="flex w-full relative">
                  <img src={roles5} alt="" className="h-[65px] -left-4 absolute z-10 -top-12 " />
                  <div className="absolute  -top-8 h-[45px] md:max-w-[400px] w-full  bg-[#244286] flex justify-center items-center border-[#f8E48E] border-2 rounded-tr-2xl ">
                    <h3 className="md:text-lg text-lg xs:text-sm xs:text-center text-[#fff] font-semibold">
                      Event or Meetup Host
                    </h3>
                  </div>
                </div>
                <div className="bg-white p-[0px_20px_20px_20px] border-[#244286] border-2 rounded-2xl">
                  <div className="max-w-[350px] h-[200px]  w-full bg-[#244286] flex flex-col justify-center items-center gap-3 rounded-2xl p-3">
                    <p className="text-base text-left text-white font-normal">
                     Share insights and updates from your local market with the core team.
                    </p>
                    <p className="text-base text-left text-white font-normal">
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default RolesAndResponsibility;
