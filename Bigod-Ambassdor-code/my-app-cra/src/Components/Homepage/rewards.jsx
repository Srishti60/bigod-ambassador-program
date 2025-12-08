import rewardpointer from "../../images/rewardpointer.png";
import BorderRayCircuit from "../BorderRay/borderRay";
import rewardheading from "../../images/rewardheading.png";
import rewardimage from "../../images/reward.gif";

const Rewards = () => {
  const rewardSections = [
    {
      title: "Performance-Based Rewards",
      points: [
        "Receive monthly compensation in USDT + $BIGOD tokens based on performance.",
        "Earn bonus rewards for exceptional engagement and successful campaign outcomes.",
      ],
    },
    {
      title: "Recognition & Growth",
      points: [
        "Receive an official BIGOD Ambassador Certificate.",
        "Gain early access to project updates, features, and private meetups.",
        "Represent BIGOD in global Web3 & RWA events as an official delegate.",
      ],
    },
    {
      title: "Leadership Path",
      points: [
        "Outstanding ambassadors can rise to Regional Leader roles, managing local teams, coordinating campaigns, and working directly with BIGOD’s marketing core.",
      ],
    },
  ];

  return (
    <div className="w-full px-6 lg:px-10 py-10 mb-8">
      {/* Heading */}
      <div className="text-center pt-6 pb-5">
        <h2 className="text-3xl font-bold text-[#26306D]">
          Compensation & Rewards
        </h2>

        {/* Glow underline */}
        <div className="flex justify-center mt-3">
          <div className="w-fit">
            <BorderRayCircuit />
          </div>
        </div>
      </div>

      <div className="flex  md:flex-row flex-col gap-10 lg:gap-20 items-center">
        <div className="lg:w-1/2 md:1/2 w-full">
          {rewardSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Title Bar */}
              <div
                className="w-fit lg:mt-6 mt-4 px-6 py-4 rounded-sm text-white font-semibold text-sm bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: `url(${rewardheading})`,
                }}
              >
                {section.title}
              </div>

              {/* Points */}
              <div className="flex flex-col gap-2">
                {section.points.map((point, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <img
                      src={rewardpointer}
                      alt="arrow"
                      className="w-[43px] h-[25px] mt-1"
                    />
                    <p className="text-[#26306D] text-[17px] leading-6 font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/2 md:1/2 w-full">
          <img src={rewardimage} alt="Rewards Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
