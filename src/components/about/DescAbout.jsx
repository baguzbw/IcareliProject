import React from "react";
import illustration from "../assets/IcareliUNS.svg";
import about from "../assets/pgn.svg";
import sapi1 from "../assets/sapi1.svg";
import sapi2 from "../assets/sapi2.svg";
import illustration2 from "../assets/sdg.svg";

const DescPage = () => {
  return (
    <div className="flex flex-col h-auto font-plus-jakarta p-24">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center mb-4">
          <img src={about} alt="Image 1" className="w-1/2" />
        </div>
        <p className="text-xl mb-10">
          Food security and adequacy becomes an important issue after the pandemic situation is over. Adequacy of food is influenced by the global political situation so that many observers say that 2023 is a tough year to go through. Food
          security and food safety are basic needs for a wide audience that must be met. Food of animal origin is one of the main sources of protein which is fundamental and requires safety guarantees for consumers. The right production
          strategy concepts and steps can be met with cross-sectoral science and technology collaboration so that they have sustainable availability.
        </p>
        <p className="text-xl mb-10">
          The ICARELI conference uses the latest issues in the field of production technology, namely precision and smart farming systems, bio-industrial synthetic amino acids for meat, prevention of carbon emissions from waste by proper
          processing, issues of climate change and the epidemiology of the spread of animal diseases (transboundary diseases) that can threaten food security. The concept will be explained by invited speakers who are experts in their fields
          from Japan, Australia, Indonesia, Italy, and South Korea. In addition, the keynote speaker is the Minister of Agriculture of the Republic of Indonesia, as a policy maker who can provides a general description of livestock in
          Indonesia today and future plans for its development.
        </p>

        <div className="flex flex-row justify-start items-start mb-10">
          <div className="flex flex-col w-1/2 mr-4">
            <img src={sapi1} alt="Image 1" className="mb-4" />
            <img src={sapi2} alt="Image 2" />
          </div>
          <div className="flex flex-col w-3/4">
            <h1 className="text-2xl font-bold mb-10">SCOPE :</h1>
            <p className="text-xl mb-10">
              The ICARELI 2023 bring the topics of “Synergy in Advanced Sciences and Technologies for Sustainable Livestock Industry” to relate together policymakers, engineers, social-economic accessors, farmers, and academia. The scope of
              our seminar includes, but not limited to, the following: a. Advanced Biotechnologies for Animal Products Processing b. Mitigation of Climate Change and Emission for Livestock Production c. Engineering for Sustainable Animal
              Production System d. Artificial Intelligence and Smart Farming for Animal and Livestock Research e. Socio-Economic Studies on Sustainable Animal Farming f. Animal Waste Management and Bioenergy g. Animal Health, Welfare and
              Diseases (link: directed to LAR) h. Eco-friendly and Sustainable Animal Feed Resources, Nutrition, Forage and Pasture i. Food Safety and Security of Animal Resources j. Recent Advances in Functional Peptides for Human Health
              k. The Tropical Biodiversity Selected papers will be published in IOP which is indexed in Scopus.
            </p>
          </div>
        </div>
        <div className="w-full mt-24  flex justify-center items-center">
          <img src={illustration2} alt="Illustration" style={{ width: "auto", height: "90px", marginRight: "30px" }} />
          <img src={illustration} alt="Illustration" style={{ width: "auto", height: "90px", marginLeft: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default DescPage;
