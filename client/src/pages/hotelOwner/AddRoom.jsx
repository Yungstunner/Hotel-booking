import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free-Wifi": false,
      "Free-Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully to provide accurate room details, pricing, and amenities for a better user booking experience."
      />

      {/* Image Upload */}
      <p className="text-gray-800 font-semibold mt-10 mb-2">Upload Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 flex-wrap">
        {Object.keys(images).map((key) => (
          <label
            htmlFor={`roomImage${key}`}
            key={key}
            className="cursor-pointer border-2 border-dashed rounded-md overflow-hidden w-32 h-32 flex items-center justify-center bg-gray-50 hover:border-primary transition"
          >
            <img
              className="w-full h-full object-cover"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt={`Preview ${key}`}
            />
            <input
              id={`roomImage${key}`}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      {/* Room Type and Price */}
      <div className="w-full flex flex-col sm:flex-row sm:gap-6 mt-8">
        <div className="flex-1">
          <label className="text-gray-800 font-medium mb-1 block">
            Room Type
          </label>
          <select
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select room type</option>
            <option value="Single bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="luxury room">Luxury Room</option>
            <option value="Family suite">Family Suite</option>
          </select>
        </div>
        <div className="mt-4 sm:mt-0">
          <label className="text-gray-800 font-medium mb-1 block">
            Price <span className="text-sm text-gray-500">/night</span>
          </label>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-primary transition"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-800 font-semibold mt-8 mb-2">Amenities</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <label
            key={index}
            htmlFor={`amenity${index + 1}`}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id={`amenity${index + 1}`}
              className="accent-primary w-4 h-4"
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            <span>{amenity}</span>
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white px-8 py-2 rounded-md mt-10 transition duration-200"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
