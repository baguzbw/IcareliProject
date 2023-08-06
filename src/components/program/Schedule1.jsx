import React from "react";

const DescPage = () => {
  return (
    <div className="flex justify-center text-center font-plus-jakarta">
      <div className="flex flex-col justify-center p-10">
        <h1 className="text-xl font-bold mb-2">SCHEDULE DETAILS</h1>
        <h1 className="text-xl font-bold mb-2">The 2nd International Conference on Animal Research for Eco-Friendly Livestock Industry </h1>
        <h1 className="text-xl font-bold mb-2">15-16 August 2023</h1>
        <p className="text-xl mt-5">DAY 1: Tuesday, August 15th, 2023</p>
        <p className="text-xl mb-8"> Venue: Zoom meeting hosted by Department of Animal Science, Faculty of Agriculture, Universitas Sebelas Maret</p>
        <div className="flex justify-center w-full">
          <table className="table-fixed w-3/4 font-semibold" style={{ paddingLeft: "20px", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to left, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                  Time
                </th>
                <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to right, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                  Activities/Schedule
                </th>
                <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to right, #00FF94,  #9EFF00)", borderLeft: "none", borderRight: "none" }}>
                  Speaker/PIC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b-2 text-center border-gray-600 px-4 py-2">First call for paper submission</td>
                <td className="border-b-2 text-center border-gray-600 px-4 py-2">15 March 2023</td>
                <td className="border-b-2 text-center border-gray-600 px-4 py-2">John Doe</td>
              </tr>
              <tr>
                <td className="border-b-2 text-center border-gray-600 px-4 py-2">Deadline for abstract submission</td>
                <td className="border-b-2 text-center border-gray-600 px-4 py-2">25 May 2023</td>
                <td className="border-b-2 text-center border-gray-600 px-4 py-2">Jane Smith</td>
              </tr>

              <tr>
                <td colSpan="3" className="border-b-2 text-center border-gray-600 px-4 py-2" style={{ background: "linear-gradient(to right, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                  Break
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="border-b-2 text-center border-gray-600 px-4 py-2" style={{ background: "linear-gradient(to right, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                  Closing remarks of Day 1 ICARELI
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DescPage;
