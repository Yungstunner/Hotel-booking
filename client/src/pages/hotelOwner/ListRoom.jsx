import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-gray-600 mt-10 font-semibold text-lg">All Rooms</p>

      <div className="w-full mt-4 overflow-auto border rounded-xl shadow-sm bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-5 font-medium">Room Type</th>
              <th className="py-3 px-5 font-medium max-sm:hidden">Amenities</th>
              <th className="py-3 px-5 font-medium">Price/Night</th>
              <th className="py-3 px-5 font-medium text-center">
                Availability
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {rooms.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="py-3 px-5 text-gray-800">{item.roomType}</td>

                <td className="py-3 px-5 text-gray-600 max-sm:hidden">
                  {item.amenities?.join(", ") || "N/A"}
                </td>

                <td className="py-3 px-5 text-gray-800 font-medium">
                  ${item.pricePerNight}
                </td>

                <td className="py-3 px-4 border-t border-gray-300 text-sm text-center text-red-500">
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      readOnly
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200" />
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5" />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
