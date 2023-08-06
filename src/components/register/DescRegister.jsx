import React from "react";
import illustration from "../assets/IcareliUNS.svg";

const HeaderRegister = () => {
  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-20 text-center">
      <div className="w-3/4 flex flex-col items-start justify-center p-5 text-left">
        <h1 className="text-5xl font-bold mb-12 font-plus-jakarta">CONFERENCE FEE</h1>
        <p className="text-lg font-plus-jakarta">
          Non-presenter: 100,000 IDR / 10 U$D <br /> Presenter: 500,000 IDR / 50 U$D <br /> Publication in proceeding (IOP: EES): 2,000,000 IDR / 200 U$D
          <br /> Publication in Livestock and Animal Research (Sinta 2): 1,500,000 IDR / 150 U$D <br /> Publication in Journal of the Indonesian Tropical Animal Agriculture (Scopus Q3): 2,500,000 IDR / 250 U$D
        </p>
      </div>
      <div className="w-3/4 flex flex-col items-start justify-center mt-8 p-5 text-left">
        <h1 className="text-5xl font-bold mb-12 font-plus-jakarta">PAYMENT</h1>
        <p className="text-lg font-plus-jakarta">
          Name of Bank : Bank Mandiri <br /> Beneficiary : drh. Endang Tri Rahayu, M.Sc. <br /> Account Number : 1380019140941 <br /> Transaction Name : ICARELI Registration for Name (i.e. ICARELI Registration for Penny H Hamid)
        </p>
        <p className="text-lg font-plus-jakarta mt-8">Publication fee will be invoiced after acceptance, and please upload the payment proofs when once registration process completed to the secretary of conference.</p>
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

          <button
            className="px-6 py-3 text-white text-xl rounded-2xl"
            style={{
              backgroundImage: "linear-gradient(to right, #00FF94, #00BEB3)",
            }}
          >
            Register for Participant
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderRegister;
