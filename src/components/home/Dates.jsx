import React from "react";
import illustration from "../assets/IcareliUNS.svg";
import illustration2 from "../assets/sdg.svg";

const ImportantDates = () => {
  return (
    <div className=" font-plus-jakarta flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">IMPORTANT DATES</h1>
      <div className="w-full flex justify-center mt-10">
        <table className="table-fixed w-3/4 font-semibold" style={{ paddingLeft: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to left, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                INFORMATION
              </th>
              <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to right, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                DATE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b-2 text-center border-gray-600 px-4 py-2">First call for paper submission</td>
              <td className="border-b-2 text-center border-gray-600 px-4 py-2">15 March 2023</td>
            </tr>
            <tr>
              <td className="border-b-2 text-center border-gray-600 px-4 py-2">Deadline for abstract submission</td>
              <td className="border-b-2 text-center border-gray-600 px-4 py-2">25 May 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full mt-24 mb-12 flex justify-center items-center">
        <img src={illustration2} alt="Illustration" style={{ width: "auto", height: "90px", marginRight: "30px" }} />
        <img src={illustration} alt="Illustration" style={{ width: "auto", height: "90px", marginLeft: "30px" }} />
      </div>
    </div>
  );
};

export default ImportantDates;
