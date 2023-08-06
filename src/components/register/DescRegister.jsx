import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";
import illustration from "../assets/IcareliUNS.svg";

const HeaderRegister = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${API_BASE_URL}registration`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-20 text-center">
      <div className="w-3/4 flex flex-col items-start justify-center p-5 text-left">
        <h1 className="text-5xl font-bold mb-12 font-plus-jakarta">CONFERENCE FEE</h1>
        <div className="text-lg font-plus-jakarta" dangerouslySetInnerHTML={{ __html: data.conference_fee }} />
        <div className="text-xl mt-4" />
      </div>
      <div className="w-3/4 flex flex-col items-start justify-center mt-8 p-5 text-left">
        <h1 className="text-5xl font-bold mb-12 font-plus-jakarta">PAYMENT</h1>
        <div className="text-lg font-plus-jakarta" dangerouslySetInnerHTML={{ __html: data.payment }} />
      </div>

      <div className="flex h-screen font-plus-jakarta">
        <div className="w-1/2 flex justify-center items-center">
          <img src={illustration} alt="Illustration" />
        </div>
        <div className="w-1/2 flex flex-col justify-center text-left items-start p-10">
          <h1 className="text-2xl font-bold mb-4">2nd ICARELI 2023</h1>
          <h1 className="text-4xl font-bold mb-4">The 2nd International Conferences on Animal Research for Eco-Friendly Livestock Industry</h1>
          <h1 className="text-2xl font-light">`Synergy in Advanced Sciences and Technologies for Sustainable Livestock Industry`</h1>
          <p className="text-xl mt-4">Presented by The Faculty of Animal Science, Universitas Sebelas Maret, Surakarta, Indonesia Hybrid meeting,</p>
          <p className="text-xl font-bold mt-4 mb-4">August 15th- 16th 2023</p>

          <a href={data.link_registrasi} target="_blank" rel="noopener noreferrer">
            <button
              className="px-6 py-3 text-white text-xl rounded-2xl"
              style={{
                backgroundImage: "linear-gradient(to right, #00FF94, #00BEB3)",
              }}
            >
              Register for Participant
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderRegister;
