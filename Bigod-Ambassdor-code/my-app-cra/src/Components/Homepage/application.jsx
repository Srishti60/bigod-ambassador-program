import React from "react";
import underline from "../../images/underline.png";
import coin from "../../images/coin.png";
import plane from "../../images/plane.png";
import BorderRayCircuit from "../BorderRay/borderRay";

const Application = () => {
  return (
    <div className="w-full bg-white">
      {/* Top Title Section */}
      <div className="text-center pt-6 pb-5">
        <h1 className="text-3xl font-bold text-[#26306D]">Application form</h1>

        <div className="flex justify-center mt-3">
          <div className="w-fit">
            <BorderRayCircuit />
          </div>
        </div>
      </div>

      {/* Blue Section */}
      <div className="relative bg-[#1B1D4C] w-full min-h-[700px] md:min-h-[650px] p-3 overflow-hidden">
        {/* Left Coin */}
        <img
          src={coin}
          alt="coin-left"
          className="absolute w-[120px] sm:w-[180px] md:w-[300px] opacity-20 left-[-20px] sm:left-[-40px] md:left-[-68px] rotate-[32.1deg] top-8 sm:top-10"
        />

        {/* Right Coin */}
        <img
          src={coin}
          alt="coin-right"
          className="absolute w-[120px] sm:w-[180px] md:w-[300px] opacity-20 right-[-40px] md:right-[-180px] rotate-[32.1deg] bottom-0"
        />

        {/* Circles Behind */}
        <div
          className="absolute w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[120px] md:h-[120px] rounded-full left-[50%] md:left-[370px] top-[8px] -translate-x-1/2 md:translate-x-0"
          style={{
            background:
              "linear-gradient(155.93deg, #375F9A 4.53%, #244286 40.73%)",
          }}
        ></div>

        <div
          className="absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[240px] md:h-[240px] rounded-full right-[8%] md:right-[170px] top-[20px]"
          style={{
            background:
              "radial-gradient(46.14% 46.14% at 56.4% 58.08%, #244286 5.77%, #485DC4 100%)",
          }}
        ></div>

        <div
          className="absolute w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] rounded-full left-[15%] md:left-[250px] bottom-[10px]"
          style={{
            background:
              "linear-gradient(155.93deg, #0C6EFF 4.53%, #244286 75.84%)",
          }}
        ></div>

        {/* circle Behind end */}

        {/* Form */}
        <div
          className="
    relative mx-auto mt- sm:absolute sm:left-1/2 lg:top-[80px] md:top-[60px] sm:-translate-x-1/2
    w-full sm:w-[85%] md:w-[80%] lg:max-w-[1100px]
    border-[2px] backdrop-blur-xl rounded-2xl p-6 md:p-10 text-white
  "
          style={{
            borderImage:
              "linear-gradient(130.38deg, #FFFFFF 57.86%, #244286 74.98%, #FEFEFE 89.11%, #244286 100.67%) 1",
            background:
              "linear-gradient(124.69deg, rgba(255, 255, 255, 0.14) 49.73%, rgba(255, 255, 255, 0.06) 85.29%)",
          }}
        >
          {/* Plane */}
          <img
            src={plane}
            alt="plane"
            className="hidden sm:block w-[130px] md:w-[190px] absolute right-5 md:right-40 bottom-[-20px] md:bottom-[-33px] rotate-[5deg]"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}

            <div className="order-1 md:order-none">
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">Country</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">
                How familiar are you with RWAs?
              </label>
              <textarea
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
                rows={1}
              ></textarea>

              <label className="text-sm mt-4 block">
                How would you grow your local community and engage users around
                the BIGOD brand?
              </label>
              <textarea
                placeholder="(e.g. videos, infographics, AMAs)"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
                rows={1}
              ></textarea>
            </div>

            {/* Column 2 */}

            <div className="order-3 md:order-none">
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">Time zone</label>
              <input
                placeholder="AM"
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">
                Why join the BIGOD Ambassador Program?
              </label>
              <textarea
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
                rows={1}
              ></textarea>

              <div className="mt-6">
                <label className="text-sm">Your CV (if any)</label>
                <input
                  type="file"
                  placeholder="Upload your CV"
                  className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
                />
              </div>
            </div>

            {/* Column 3 */}

            <div className="order-2 md:order-none">
              <label className="text-sm">Twitter Profile</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">Telegram Profile</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">
                How connected are you in your local blockchain community?
              </label>
              <textarea
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
                rows={1}
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 px-8 py-2 bg-[#244286] border-[2px] border-[#F8E38E] rounded-lg text-white hover:bg-blue-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
