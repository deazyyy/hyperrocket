import React, { useEffect } from "react";

interface Props {}

const Chatbx: React.FC<Props> = () => {
  return (
    <section
      className="production-bx  wow fadeInDown"
      data-wow-duration="0.6s"
      data-wow-delay="0.3s"
    >
      <img src="img/arc.png" className="arcimage" />
      <div
        className="heading wow fadeInDown"
        data-wow-duration="0.6s"
        data-wow-delay="0.3s"
      >
        <h1>IN PRODUCTION</h1>
        <p>
          BNB Hyper Rise is an innovative elastic token that has a manual rebase
          function & rewards in BNB. Hyper Rise is developing an idle game
          called Hyper Rocket, which allows users to earn BNB by playing, while
          also building up a buy back wallet for BNB Hyper Rise.
        </p>
      </div>
      <div className="row">
        <div
          className="col-md-6 wow fadeInLeft"
          data-wow-duration="0.6s"
          data-wow-delay="0.3s"
        >
          <div className="site-bx">
            <h2>hyper rocket</h2>
            <p>
              You receive Hyper Fuel by collecting rockets. Upgrading them
              increases the rate of fuel generation, this Hyper Fuel can be
              exchanged for BNB. <br />
              <br />
              Different tiers of rockets generate Hyper Fuel at different rates.
              <br />
              <br />A portion of the BNB from Hyper Rocket will go to a BNB
              Hyper Rise buyback wallet, allowing the chart behavior to be even
              more bullish.
            </p>
          </div>
        </div>
        <div
          className="col-md-6 wow fadeInRight"
          data-wow-duration="0.6s"
          data-wow-delay="0.3s"
        >
          <div className="site-bx">
            <h2>What is a Rebase token?</h2>
            <p>
              A rebase (or elastic) token is designed in a way that the
              circulating supply adjusts automatically according to price
              fluctuations, supply, and demand, without changing the overall
              value of the users’ holdings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbx;
