import React from "react";
import BorderRayCircuit from "../BorderRay/borderRay";
import gif from "../../images/hand_gfx.gif";
import badge1 from "../../images/badge1.svg";
import badge2 from "../../images/badge2.svg";
import badge3 from "../../images/badge3.svg";
import badge4 from "../../images/badge4.svg";
import profile from "../../images/profile.svg";
import star from "../../images/star.svg";
import leaderBackground from "../../images/leaderbg.png";

function TopLeaderboard() {
  const LeaderData = [
    { id: 1, badge: badge1, profile },
    { id: 2, badge: badge2, profile },
    { id: 3, badge: badge3, profile },
    { id: 4, badge: badge4, profile },
  ];

  const LeaderData2 = [
    { id: 1, title: "Bonus rewards in USDT + $BIGOD" },
    { id: 2, title: "Exclusive digital badges" },
    { id: 3, title: "Global recognition on website & community channels" },
  ];

  return (
    <div className="flex flex-col gap-6 text-center justify-center items-center">
      <h1 className="text-[#26306D] text-3xl font-bold">Top Leaderboard</h1>

      <p className="text-[#224187] text-lg md:text-xl leading-relaxed px-4">
      Track your impact and climb the ranks! <br />
       Our Ambassador Leaderboard highlights the most active and high-performing <br /> ambassadors each month based on engagement, content creation, referrals, and <br /> event participation.
      </p>

      <BorderRayCircuit />

      {/* MAIN CARD WRAPPER */}
      <div className="relative w-full max-w-[1120px] flex flex-col items-center mt-20 px-4">

        {/* Top Banner */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[650px] h-[70px] md:h-[80px] 
          rounded-3xl border-[#D4AE50] border-[6px] bg-[#26306D] flex justify-center items-center z-10">
          <p className="text-xl md:text-3xl text-white font-semibold">
            Top 10 Ambassadors receive
          </p>
        </div>

        {/* MAIN BLUE BOX */}
        <div className="w-full  bg-[#244286] rounded-3xl border-[#D4AE50] border-[6px] 
          p-6 md:p-10 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-10"> 

          {/* LEFT SIDE LEADER LIST */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            {LeaderData.map((item) => (
              <div className="flex items-center md:gap-4 gap-2 md:mt-0 mt-3" key={item.id}>
                <img src={item.badge} alt="badge" className="md:h-[40px] h-[28px]" />
                <img src={item.profile} alt="profile" className="md:h-[40px] h-[28px]" />

                <div className="flex justify-center items-center gap-4 
                  h-[50px] w-[240px] md:w-[320px] lg:w-[350px] rounded-xl border-2 border-white bg-[#224187]">
                  <p className="text-white text-sm font-semibold">Leader</p>
                  <img src={star} className="lg:h-[20px] h-[15px]" alt="star" />
                  <p className="text-white text-sm font-semibold">1345</p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER GIF */}
          <div className="flex justify-center items-center ">
            <img
              src={gif}
              alt="leaderboard gif"
              className="h-[220px]  lg:h-[340px] hidden lg:block  relative top-[80px]"
            />
          </div>

          {/* RIGHT SIDE BENEFITS */}
          <div className="flex flex-col gap-6 md:mt-4 w-full md:w-auto">
            {LeaderData2.map((item, index) => (
              <div className="relative w-full md:w-auto flex justify-center" key={index}>
                <img
                  src={leaderBackground}
                  className="h-[100px] md:h-[103px] w-auto "
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <p className="text-sm md:text-base text-white font-medium text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopLeaderboard;
