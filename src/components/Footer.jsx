import React from "react";
import backgroundImage from "./assets/bgfooter.svg";

const Footer = () => {
  return (
    <footer className="py-8 border-t" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container mx-auto flex flex-col font-plus-jakarta text-[#707072] text-sm px-4">
        <div className="flex">
          <div className="w-1/5 mr-24">
            <p>The 2nd International Conferences on Animal Research for Eco-Friendly Livestock Industry Synergy in Advanced Sciences and Technologies for Sustainable Livestock Industry</p>
          </div>
          <div className="w-4/5 flex justify-between space-x-2">
            <div className="w-1/5">
              <p className="font-bold">Address:</p>
              <p>Department of Animal Science, Faculty of Agriculture, Universitas Sebelas Maret.Jl. Ir Sutami No.36, Kentingan, Kec. Jebres, Kota Surakarta 57126</p>
            </div>
            <div className="w-1/5">
              <p className="font-bold">Email & Web:</p>
              <a href="http://www.icareli.uns.ac.id">http://www.icareli.uns.ac.id</a>
              <br />
              <a href="mailto:icareli@mail.uns.ac.id">icareli@mail.uns.ac.id</a>
            </div>
            <div className="w-1/5">
              <p className="font-bold">Phone:</p>
              <span>Ayu Intan Sari, S.Pt., M.Sc. (+62 813-2962-1234)</span>
              <br />
              <span>Yuli Yanti, S.Pt., M.Sc. Ph.D. (+62 852-3570-5175)</span>
              <br />
              <span style={{ color: "red" }}>Note: Available for chat and What`s up in office hours: 08.00-16.00 WIB (UTC+07:00) during weekdays</span>
            </div>
            <div className="w-1/5">
              <p className="font-bold"> Fax:</p>
              <span>+62 271 637 457</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
