import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center text-center font-plus-jakarta">
      <div className="flex flex-col p-10 w-3/4">
        <h1 className="text-xl font-bold mb-8 text-left">All the inquiries about the conference shall be addressed to:</h1>
        <table className="table-fixed w-full font-semibold" style={{ paddingLeft: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th className="w-1/2 text-xl px-4 py-2 text-left border-b-2 border-gray-600">Address</th>
              <th className="w-1/2 px-4 py-2 text-left border-b-2 border-gray-600">
                Department of Animal Science Faculty of Agriculture Universitas Sebelas Maret Surakarta Jl. Ir Sutami No.36, Kentingan, Kec. Jebres, Kota Surakarta 57126
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="w-1/2 text-xl px-4 py-2 text-left border-b-2 border-gray-600">Email & Web PIC: Farouq Heidar Barido</th>
              <th className="w-1/2 px-4 py-2 text-left border-b-2 border-gray-600">
                <a href="http://www.icareli.uns.ac.id">http://www.icareli.uns.ac.id</a>
                <br />
                Email: <a href="mailto:icareli@mail.uns.ac.id">icareli@mail.uns.ac.id</a>
              </th>
            </tr>
            <tr>
              <th className="w-1/2 text-xl px-4 py-2 text-left border-b-2 border-gray-600">Phone</th>
              <th className="w-1/2 px-4 py-2 text-left border-b-2 border-gray-600">
                <span>Ayu Intan Sari, S.Pt., M.Sc. (+62 813-2962-1234)</span>
                <br />
                <span>Yuli Yanti, S.Pt., M.Sc. Ph.D. (+62 852-3570-5175)</span>
                <br />
                <span style={{ color: "red" }}>Note: Available for chat and What`s up in office hours: 08.00-16.00 WIB (UTC+07:00) during weekdays</span>
              </th>
            </tr>
            <tr>
              <th className="w-1/2 text-xl px-4 py-2 text-left border-b-2 border-gray-600">Fax</th>
              <th className="w-1/2 px-4 py-2 text-left border-b-2 border-gray-600">+62 271 637 457</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
