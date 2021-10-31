import React, { useEffect } from "react";

interface Props {}

const Roadmap: React.FC<Props> = () => {
  return (
    <section className="roadmap-bx">
      <div
        className="heading wow fadeInDown"
        data-wow-duration="0.6s"
        data-wow-delay="0.3s"
      >
        <h1>Roadmap</h1>
      </div>
      <div className="row">
        <div
          className="col-md-4 wow fadeInLeft"
          data-wow-duration="0.6s"
          data-wow-delay="0.3s"
        >
          <div className="site-bx">
            <p>
              Idea and concept formation <br />
              <br />
              Team recruitment
              <br />
              <br />
              Economics established
              <br />
              <br />
              Determined the prospective use-case and utility
              <br />
              <br />
              Private pre-sale
              <br />
              <br />
              Website development
            </p>
          </div>
        </div>
        <div
          className="col-md-4 wow fadeInDown"
          data-wow-duration="0.6s"
          data-wow-delay="0.3s"
        >
          <div className="site-bx">
            <p>
              Hyper Rocket game development
              <br />
              <br />
              Creation of social media accounts
              <br />
              <br />
              Smart contract audit
              <br />
              <br />
              Website launch
              <br />
              <br />
              Pre-Launch marketing campaign
            </p>
          </div>
        </div>
        <div
          className="col-md-4 wow fadeInRight"
          data-wow-duration="0.6s"
          data-wow-delay="0.3s"
        >
          <div className="site-bx">
            <p>
              whitelist/public presale
              <br />
              <br />
              launch on pancake swap
              <br />
              <br />
              listing on CMC and CG
              <br />
              <br />
              Hyper Rocket Game launch
              <br />
              <br />
              Marketing continues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
