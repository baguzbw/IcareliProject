import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/pgn.svg";

const DescPage = () => {
  return (
    <div className="flex h-screen font-plus-jakarta">
      <div className="w-1/2 flex justify-center items-center">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start p-10">
        <h1 className="text-4xl font-bold mb-4">ABOUT 2nd ICARELI</h1>
        <h1 className="text-4xl font-bold mb-4"></h1>
        <h1 className="text-2xl font-bold mb-4">Synergy in Advanced Sciences and Technologies for Sustainable Livestock Industry</h1>
        <p className="text-xl mb-10">
          Food security and adequacy becomes an important issue after the pandemic situation is over. Adequacy of food is influenced by the global political situation so that many observers say that 2023 is a tough year to go through. Food
          security and food safety are basic needs for a wide audience that must be met.
        </p>
        <Link to="/about">
          <button
            className="px-6 py-3 text-white text-xl rounded-2xl"
            style={{
              backgroundImage: "linear-gradient(to right, #00FF94, #00BEB3)",
            }}
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DescPage;
