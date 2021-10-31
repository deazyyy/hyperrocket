import React, { useEffect } from "react";

interface Props {}

const Summary: React.FC<Props> = () => {
  return (
    <section className="summary-bx wow fadeInDown"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
      <img src="img/arc.png" className="arcimage"/>
      <div className="row">
        <div className="col-md-6">
          <div className="site-bx">
            <h2>summary</h2>
            <p>
            BNB Hyper Rise is an innovative elastic token that has a manual rebase
function & rewards in BNB. Hyper Rise is developing an idle game called
Hyper Rocket, which allows users to earn BNB by playing, while also
building up a buy back wallet for BNB Hyper Rise.<br/><br/>

You receive Hyper Fuel by collecting rockets. Upgrading these rockets
increases the rate of fuel generation, this Hyper Fuel can be exchanged for
BNB.<br/><br/>

On each BNB Hyper Rise token transaction, a 15% fee will be applied. This
transaction fee amount is distributed as follows: 5% BNB rewards, 5%
Marketing, 3% liquidity and 2% Dev/Owner.<br/><br/>

You can see your BNB rewards by going on BscScan.com , looking for your
BSC wallet, and clicking on the "Internal Txns" button. The transactions that
have our reward's address in the "from" column, are BNB rewards coming
from Hyper Rise.<br/><br/>

Make sure to join our telegram for updates: https://t.me/BNB_Hyper_Rise <br/><br/>




              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
