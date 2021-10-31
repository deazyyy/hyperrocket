import React from "react";
import Roadmap from "./components/Roadmap";
import Production from "./components/Production";
import Tokenomics from "./components/Tokenomics";
import Tokenomicsaccordion from "./components/Tokenomicsaccordion";
import Summary from "./components/Summary";
import Main from "./components/Main";
import Tokechart from "./components/Tokechart";

const Landing: React.FC = () => {
  return (
    <div className="landing-pg container">
      <Main />
      <Production />
      <Tokenomics />
      <Tokechart />
      <Roadmap />
      <Tokenomicsaccordion />
      <Summary />
    </div>
  );
};

export default Landing;
