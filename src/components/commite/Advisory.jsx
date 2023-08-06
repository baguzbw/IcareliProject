import React from "react";

const Advisory = () => {
  return (
    <div className="flex justify-center text-center font-plus-jakarta">
      <div className="flex flex-col justify-left p-10">
        <h1 className="text-xl font-bold mb-8">Advisory board</h1>
        <div className="flex justify-center w-full">
          <table className="table-fixed w-3/4 font-semibold" style={{ paddingLeft: "20px", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to left, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                  Name
                </th>
                <th className="w-1/2 px-4 py-2 border-b-2 border-gray-600" style={{ background: "linear-gradient(to right, #9EFF00, #00FF94)", borderLeft: "none", borderRight: "none" }}>
                  Institusions
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
      </div>
    </div>
  );
};

export default Advisory;
