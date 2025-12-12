import React, { useState } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import coin from "../../images/coin.png";
import plane from "../../images/plane.png";
import BorderRayCircuit from "../BorderRay/borderRay";

const Application = () => {
  const [form, setForm] = useState({
    fullName: "",
    country: "",
    familiar: "",
    growCommunity: "",
    email: "",
    timezone: "",
    whyJoin: "",
    twitter: "",
    telegram: "",
    connected: "",
    cvFile: null,
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle File Upload
  const handleFile = (e) => {
    setForm({ ...form, cvFile: e.target.files[0] });
  };

  // Submit Form API
  const handleSubmit = async () => {
    if (!form.fullName || !form.email) {
      toast.error("Name & Email are required!");
      return;
    }

    setLoading(true);

    try {
      const fd = new FormData();
      for (let key in form) {
        fd.append(key, form[key]);
      }

      const res = await axios.post(
        "https://newapi.aiiongold.com/api/users/ambassador/request_send",
        fd,
        {
         headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": "a45i2i10-ong2-4o61-aiiongold-91l0-d2n17e2wd883",
        },
        }
      );

      toast.success(res.data.message || "your ambassador application has been received. We will review your application and get back to you soon.!");
      setLoading(false);

      // Reset form after submit
      setForm({
        fullName: "",
        country: "",
        familiar: "",
        growCommunity: "",
        email: "",
        timezone: "",
        whyJoin: "",
        twitter: "",
        telegram: "",
        connected: "",
        cv: null,
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong! Try again.");
      setLoading(false);
    }
  };

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

        {/* Background Circles */}
        <div
          className="absolute w-[60px] h-[60px] rounded-full left-[50%] md:left-[370px] top-[8px]"
          style={{
            background:
              "linear-gradient(155.93deg, #375F9A 4.53%, #244286 40.73%)",
          }}
        ></div>

        {/* Form Container */}
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

          {/* 3 Column Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Column 1 */}
            <div>
              <label className="text-sm">Full Name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">Country</label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">
                How familiar are you with RWAs?
              </label>
              <textarea
                name="familiar"
                value={form.familiar}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              ></textarea>

              <label className="text-sm mt-4 block">
                How would you grow your local community?
              </label>
              <textarea
                name="growCommunity"
                value={form.growCommunity}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              ></textarea>
            </div>

            {/* Column 2 */}
            <div>
              <label className="text-sm">Email Address</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">Time zone</label>
              <input
                name="timezone"
                value={form.timezone}
                onChange={handleChange}
                type="text"
                placeholder="AM"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">
                Why join the BIGOD Ambassador Program?
              </label>
              <textarea
                name="whyJoin"
                value={form.whyJoin}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              ></textarea>

              <div className="mt-6">
                <label className="text-sm">Your CV (if any)</label>
                <input
                  type="file"
                  onChange={handleFile}
                  className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <label className="text-sm">Twitter Profile</label>
              <input
                name="twitter"
                value={form.twitter}
                onChange={handleChange}
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">Telegram Profile</label>
              <input
                name="telegram"
                value={form.telegram}
                onChange={handleChange}
                type="text"
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              />

              <label className="text-sm mt-4 block">
                How connected are you in blockchain community?
              </label>
              <textarea
                name="connected"
                value={form.connected}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-1"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-8 px-8 py-2 bg-[#244286] border-[2px] border-[#F8E38E] rounded-lg text-white hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
