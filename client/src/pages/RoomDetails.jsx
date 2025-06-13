import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    if (room) {
      setRoom(room);
      setMainImage(room.images[0]);
    }
  }, [id]);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room details */}
        <div className="flex flex-col gap-2">
          {/* Title and Offer */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-playfair">
              {room.hotel.name}{" "}
              <span className="font-inner text-sm">({room.roomType})</span>
            </h1>
            <p className="text-sm font-inner py-1.5 px-3 text-white bg-orange-500 rounded-full">
              20% OFF
            </p>
          </div>

          {/* Room rating */}
          <div className="flex items-center gap-1">
            <StarRating />
            <p className="ml-2">200+ reviews</p>
          </div>
        </div>

        {/* Room address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image
                      ? "outline outline-2 outline-orange-500"
                      : ""
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Room highlights */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10 w-full gap-4">
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience luxury like never before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Room price */}
          <p className="text-2xl font-medium whitespace-nowrap self-start md:self-center">
            {`$${room.pricePerNight}/night`}
          </p>
        </div>

        {/* Check-in checkout form */}
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 md:gap-10 text-gray-500 w-full md:w-auto">
            {/* Check-In */}
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="w-px h-15 bg-gray-300/70 max:md:hidden"></div>

            {/* Check-Out */}
            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="w-px h-15 bg-gray-300/70 max:md:hidden"></div>

            {/* Guests */}
            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                placeholder="1"
                className="w-full max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-orange-600 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-10 py-3 md:py-4 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>

        {/* Common specifications */}
        <div className="mt-25 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-6.5"
              />

              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl border-y border-gray-300 my-1.5 py-10 text-gray-500">
          <p>
            Guests will be allocated on the ground floor according to
            availability.You get a comfortable two bedroom apartment has a true
            city feeling. The price quoted is for two guests to get the exact
            price for groups.The guests will be allocated ground floor according
            to availability.You get the comfortable two bedrooms apartment that
            has a true city feeling.
          </p>
        </div>
        {/* Hosted by: */}
        <div
          className="flex flex-col items-start gap-4
        "
        >
          <div className="flex gap-4">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="h-14 w-14 md:h-18 md:w-18 rounded-full"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl">Hosted by {room.hotel.name}</p>
            <div className="flex items-center mt-1">
              <StarRating />
              <p className="ml-2">200+ reviews</p>
            </div>
          </div>
        </div>
        <button
          className="px-6 py-2.5 mt-4
        rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer"
        >
          Contact Now
        </button>
      </div>
    )
  );
};

export default RoomDetails;
