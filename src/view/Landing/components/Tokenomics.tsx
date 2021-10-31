import React, { useEffect } from "react";

interface Props {}

const Tokenomics: React.FC<Props> = () => {
  return (
    <section className="tokenomics-bx wow fadeInDown"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
      <img src="img/arc.png" className="arcimage"/>
      <div className="heading">
        <h1>Tokenomics</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="site-bx">
            <h2 style={{textAlign:"center"}}>economics</h2>
            <p>
            BNB Hyper Rise has created an innovative, all in one contract that combines the rebase modality with reward features, and buybacks. <br/><br/>

On each BNB Hyper Rise token transaction, a 15% fee will be applied. This transaction fee amount is distributed as follows.
            </p>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-md-6 wow fadeInLeft"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
          <div className="site-bx">
            <h2>5% BNB Rewards</h2>
            <h2>5% MARKETING</h2>
          </div>
        </div>
        <div className="col-md-6 wow fadeInRight"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
          <div className="site-bx">
            <h2>3% LIQUIDITY</h2>
            <h2>2% DEV / OWNER</h2> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
