import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[100] flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl max-w-4xl w-full max-md:mx-4">
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 rounded-l-xl hidden md:block object-cover"
        />
        <div className="relative flex flex-col items-start md:w-1/2 w-full p-8 md:p-10">
          {/* Close Icon */}
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />

          {/* Title */}
          <p className="text-2xl font-semibold self-center mt-6 mb-4">
            Register your hotel
          </p>

          {/* Hotel Name */}
          <div className="w-full mb-4">
            <label htmlFor="name" className="font-medium text-gray-600">
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* Phone */}
          <div className="w-full mb-4">
            <label htmlFor="contact" className="font-medium text-gray-600">
              Phone
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* Address */}
          <div className="w-full mb-4">
            <label htmlFor="address" className="font-medium text-gray-600">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>

          {/* Select City */}
          <div className="w-full mb-6">
            <label htmlFor="city" className="font-medium text-gray-600">
              City
            </label>
            <select
              id="city"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            >
              <option value="">Select city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white px-6 py-2 rounded-md"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
