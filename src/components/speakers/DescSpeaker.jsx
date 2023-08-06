import React from "react";

const DescSpeakers = () => {
  return (
    <div className="container mx-auto font-plus-jakarta p-8 mb-20 text-center">
      <h1 className="text-5xl font-semibold mb-6">Keynote Speakers</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {Array.from({ length: 1 }, (_, index) => (
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
      <h1 className="text-5xl font-semibold mt-20 mb-12 ml-44 text-left">Invited Speakers</h1>
      <div className="flex flex-col items-start gap-8 ml-44">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="flex flex-row">
            <div
              className="bg-white shadow-lg rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 0 4px #00FF94, 0 0 8px #00FF94, 0 0 12px #00FF94, 0 0 16px #00FF94",
              }}
            >
              <img className="w-[320px] h-[500px] object-cover" src={`https://placekitten.com/320/500?image=${index}`} alt={`Speaker ${index}`} />
            </div>
            <div className="ml-20 flex flex-col text-left justify-center">
              <h2 className="text-5xl font-semibold mb-2">Speaker Name {index}</h2>
              <h1 className="text-3xl">Topic</h1>
              <p className="text-gray-600 text-xl">Some details about the speaker.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescSpeakers;
