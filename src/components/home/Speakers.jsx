import React from "react";
import { Link } from "react-router-dom";

const Speakers = () => {
  return (
    <div className="container mx-auto font-plus-jakarta p-8 mb-20 text-center">
      <h1 className="text-4xl font-semibold mb-6">SPEAKERS</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="m-4 w-[320px]">
            <div
              className="bg-white shadow-lg rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 0 4px #00FF94, 0 0 8px #00FF94, 0 0 12px #00FF94, 0 0 16px #00FF94",
              }}
            >
              <img className="w-full h-[500px] object-cover" src={`https://placekitten.com/320/500?image=${index}`} alt={`Speaker ${index}`} />
            </div>
            <h2 className="text-xl font-semibold mt-4 mb-2">Speaker Name {index}</h2>
            <p className="text-gray-600 text-sm">Some details about the speaker.</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/speakers">
          <button
            className="px-6 py-3 text-white text-xl rounded-2xl"
            style={{
              backgroundImage: "linear-gradient(to right, #9EFF00, #00DEFC)",
            }}
          >
            See All Speakers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Speakers;
