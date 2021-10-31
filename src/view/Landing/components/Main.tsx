import React, { useEffect } from "react";

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <section className="hero-bx">
      <div className="heading wow fadeInLeft"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
        <img src="img/logo-text.png"/>
      </div>
      <div className="row">
        <div className="col-md-6 wow fadeInLeft"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
          <div className="herosite-bx">
            <h1 className="mheading">hyper <br/> rocket</h1>
            <h2>A fun way to go to the moon</h2>
            <p>
            An aesthetically pleasing idle game that allows users to gain BNB by simply playing
            </p>
            <div className="bttnOuterflex">
              <div className="bttnOutere">
                <div className="bttnOuter">
                  <div className="bttn">PLAY</div>
                  <div className="bttnbg"></div>
                  <div className="bttnborder"></div>
                </div>
              </div>
              <div className="bttnOutere">
                <div className="bttnOuter">
                  <div className="bttn">WHITEPAPER</div>
                  <div className="bttnbg"></div>
                  <div className="bttnborder"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-md-6 wow fadeInRight"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
          <div className="herosite-bx logolouter" >
          <img src="img/logo.png" className="logol"/>
          </div>
        </div>
      </div>
      <div className="socialIcons wow fadeInLeft"
    data-wow-duration="0.6s"
    data-wow-delay="0.3s">
        <div className="iconOuter">
          <div className="icon"><i className="fab fa-telegram-plane"></i></div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon"><i className="fab fa-instagram"></i></div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon"><i className="fab fa-twitter"></i></div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon"><i className="fab fa-facebook"></i></div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon"><i className="fab fa-reddit-alien"></i></div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon"><i className="fab fa-youtube"></i></div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
      </div>
    </section>
  );
};

export default Main;
