import React from "react";
import arrowpointer from "../../images/arrowpointer.png";
import coin from "../../images/coin.png";
import watermark from "../../images/watermark.png";
import BorderRayCircuit from "../BorderRay/borderRay";

const Note = () => {
  return (
    <div className="relative w-full bg-white flex justify-center px-4 py-1 overflow-hidden">

      {/* Left Coin */}
      <img
        src={coin}
        alt="coin-left"
        className="
          hidden lg:block
          absolute w-[350px] left-[-130px] rotate-[-50deg] -top-28
        "
      />

      {/* Right Coin */}
      <img
        src={coin}
        alt="coin-right"
        className="
          hidden lg:block
          absolute w-[350px] right-[-150px] rotate-[32deg] -bottom-20
        "
      />

      {/* Main Box */}
      <div
        className="
          w-full max-w-[650px] lg:w-[600px]
          h-auto
          rounded-lg relative bg-white
          p-6 sm:p-8
        "
        style={{
          backgroundImage: `url(${watermark})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#26306D]">
          Important Note
        </h2>

        {/* Underline Effect */}
        <div className="flex justify-center mt-3">
          <BorderRayCircuit />
        </div>

        {/* Content Section */}
        <div className="relative mt-8 space-y-6 text-[15px] sm:text-[17px] leading-6">

          {/* Point 1 */}
          <div className="flex gap-3">
            <img
              src={arrowpointer}
              alt="arrow"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className="text-[#224187] text-lg font-semibold pt-1">
              We’re looking for real community builders with authentic passion.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex gap-3">
            <img
              src={arrowpointer}
              alt="arrow"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className="text-[#224187] text-lg font-semibold pt-1">
              Submissions with false details or AI-generated responses will be rejected.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex gap-3">
            <img
              src={arrowpointer}
              alt="arrow"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className="text-[#224187] text-lg font-semibold pt-1">
              If selected, you’ll receive an official email from the BIGOD team with onboarding instructions.
            </p>
          </div>

        </div>

        {/* GOLD TEXT Section */}
        <div className="text-center mt-10">
          <p className="text-[#D4AD52] text-lg sm:text-2xl font-medium">
            Why Become a BIGOD Ambassador?
          </p>

          <p className="text-[#D4AD52] mt-4 text-lg sm:text-2xl font-medium">
            Where Real Gold Meets Real Impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Note;
