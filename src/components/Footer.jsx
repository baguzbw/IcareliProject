import React from "react";
import backgroundImage from "./assets/bgfooter.svg";

const Footer = () => {
  return (
    <footer
      className="py-8 border-t flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center font-plus-jakarta text-[#707072] text-lg font-bold">
        <p>The International Conference on Animal Research for Eco-Friendly Livestock Industry</p>
        <p>Presented by The Faculty of Animal Science, Universitas Sebelas Maret, Surakarta, Indonesia Hybrid meeting.</p>
        <p className="mt-2">Copyright © 2023 </p>
      </div>
    </footer>
  );
};

export default Footer;
