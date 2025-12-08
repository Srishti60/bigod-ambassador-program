import banner from "../../images/bannervd.mp4";

function Banner() {
  return (
    <div className="w-full flex flex-col lg:gap-12 gap-6 justify-center items-center p-2 md:p-6 ">
      <video
        autoPlay
        muted
        loop
        src={banner}
        alt="banner"
        className="w-full   rounded-3xl"
      />
      <div className="flex flex-col gap-6 text-center justify-center items-center  ">
        <h1 className="text-[#26306D] lg:text-6xl md:text-6xl text-3xl font-bold">
          BIGOD <br /> Ambassador Program
        </h1>
        <div className="flex flex-col gap-1">
        <p className="text-[#224187] lg:text-2xl md:text-2xl text-xl font-semibold">Lead the Next Era of Tokenized Gold</p>
        <p className="text-[#224187] lg:text-2xl md:text-2xl text-xl">Become a BIGOD Ambassador and help
          drive global <br /> adoption of real-world gold on Web3 <br /> This is your chance
          to lead
        </p>
        </div>
        <button className="bg-[#224187] text-white w-[350px] h-[70px] rounded-full text-2xl mb-4">Apply Now</button>
      </div>
    </div>
  );
}

export default Banner;
