import React, { useEffect } from "react";


interface Props {}

const Tokenomicsaccordion: React.FC<Props> = () => {
  return (
    <section className="tokenomicsaccordion-bx">
      <div className="heading wow fadeInDown"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
        <h1>Tokenomics</h1>
      </div>
      <div className="row">
        <div className="col-md-12 wow fadeInDown"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
          <div className="site-bx">
            <h2 data-toggle="collapse" data-target="#acc1">
              Where do I see my BNB rewards?{" "}
              <i className="fa fa-plus" aria-hidden="true"></i>
            </h2>

            <p id="acc1" className="collapse show">
              <div className="acc-cntnt">
                <div className="cntnt-row">
                  <div className="num">1st</div>
                  <div>Go into BscScan.com</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">2nd</div>
                  <div>Search for your BSC wallet address.</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">3rd</div>
                  <div>Click on "Internal Txns"</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">4th</div>
                  <div>
                    The transactions that have our reward's address in the
                    "from" column, are BNB rewards coming from Hyper Rise.
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>

        <div className="col-md-12 wow fadeInDown"
    data-wow-duration="0.6s"
    data-wow-delay="0.6s">
          <div className="site-bx">
            <h2 data-toggle="collapse" data-target="#acc2">
              Where do I see my BNB rewards?{" "}
              <i className="fa fa-plus" aria-hidden="true"></i>
            </h2>

            <p id="acc2" className="collapse">
              <div className="acc-cntnt">
                <div className="cntnt-row">
                  <div className="num">1st</div>
                  <div>Go into BscScan.com</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">2nd</div>
                  <div>Search for your BSC wallet address.</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">3rd</div>
                  <div>Click on "Internal Txns"</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">4th</div>
                  <div>
                    The transactions that have our reward's address in the
                    "from" column, are BNB rewards coming from Hyper Rise.
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="col-md-12 wow fadeInDown"
    data-wow-duration="0.6s"
    data-wow-delay="0.9s">
          <div className="site-bx">
            <h2 data-toggle="collapse" data-target="#acc3">
              Where do I see my BNB rewards?{" "}
              <i className="fa fa-plus" aria-hidden="true"></i>
            </h2>

            <p id="acc3" className="collapse">
              <div className="acc-cntnt">
                <div className="cntnt-row">
                  <div className="num">1st</div>
                  <div>Go into BscScan.com</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">2nd</div>
                  <div>Search for your BSC wallet address.</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">3rd</div>
                  <div>Click on "Internal Txns"</div>
                </div>
                <div className="cntnt-row">
                  <div className="num">4th</div>
                  <div>
                    The transactions that have our reward's address in the
                    "from" column, are BNB rewards coming from Hyper Rise.
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomicsaccordion;
