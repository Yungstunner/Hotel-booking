import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  return (
    <div className="p-4">
      {/* Page Title */}
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue — all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      {/* Summary Cards */}
      <div className="flex flex-wrap gap-6 my-8">
        {/* Total Bookings */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl flex items-center p-5 w-full sm:w-[300px]">
          <img
            src={assets.totalBookingIcon}
            alt="Total Bookings"
            className="h-10 w-10 mr-4"
          />
          <div className="font-medium">
            <p className="text-blue-600 text-lg">Total Bookings</p>
            <p className="text-gray-700 text-base">
              {dashboardData?.totalBookings ?? "N/A"}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl flex items-center p-5 w-full sm:w-[300px]">
          <img
            src={assets.totalRevenueIcon}
            alt="Total Revenue"
            className="h-10 w-10 mr-4"
          />
          <div className="font-medium">
            <p className="text-blue-600 text-lg">Total Revenue</p>
            <p className="text-gray-700 text-base">
              ${dashboardData?.totalRevenue ?? "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="mt-10">
        <h2 className="text-xl text-blue-900 font-semibold mb-4">
          Recent Bookings
        </h2>
        <div className="w-full max-w-5xl border border-gray-300 rounded-xl max-h-80 overflow-y-scroll shadow-sm bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 sticky top-0 z-10 text-gray-800">
              <tr>
                <th className="py-3 px-4 font-medium">User Name</th>
                <th className="py-3 px-4 font-medium max-sm:hidden">
                  Room Name
                </th>
                <th className="py-3 px-4 font-medium text-center">
                  Total Amount
                </th>
                <th className="py-3 px-4 font-medium text-center">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.bookings.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 text-gray-700">
                    {item.user.username}
                  </td>
                  <td className="py-3 px-4 text-gray-700 max-sm:hidden">
                    {item.room.roomType}
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-center">
                    ${item.totalPrice}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className={`py-1 px-3 text-xs rounded-full font-medium ${
                        item.isPaid
                          ? "bg-green-200 text-green-700"
                          : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {item.isPaid ? "Completed" : "Pending"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
