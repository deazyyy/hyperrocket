import React, { useEffect } from "react";

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <section className="hero-bx">
      <div
        className="heading wow fadeInLeft"
        data-wow-duration="0.6s"
        data-wow-delay="0.3s"
      >
        <img src="img/logo-text.png" />
      </div>
      <div className="row">
        <div
          className="col-md-6 wow fadeInLeft"
          data-wow-duration="0.6s"
          data-wow-delay="0.3s"
        >
          <div className="herosite-bx">
            <h1 className="mheading">
              hyper <br /> rocket
            </h1>
            <h2>A fun way to go to the moon</h2>
            <p>
              An aesthetically pleasing idle game that allows users to gain BNB
              by simply playing
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
        <div
          className="col-md-6 wow fadeInRight"
          data-wow-duration="0.6s"
          data-wow-delay="0.3s"
        >
          <div className="herosite-bx logolouter">
            <img src="img/logo.png" className="logol" />
          </div>
        </div>
      </div>
      <div
        className="socialIcons wow fadeInLeft"
        data-wow-duration="0.6s"
        data-wow-delay="0.3s"
      >
        <div className="iconOuter">
          <div className="icon">
            <i className="fab fa-telegram-plane"></i>
          </div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon">{tiktok()}</div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon">
            <i className="fab fa-facebook"></i>
          </div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon">
            <i className="fab fa-reddit-alien"></i>
          </div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon">{cmc()}</div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
        <div className="iconOuter">
          <div className="icon">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="iconbg"></div>
          <div className="iconborder"></div>
        </div>
      </div>

    </section>
  );
};

const tiktok = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"width="14" height="14" x="0" y="0" viewBox="0 0 512 512" ><g><g xmlns="http://www.w3.org/2000/svg"><path d="m480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83-1.56-7.82-2.4-15.89-2.48-24.16h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68-8.75 2.89-18.2 4.26-28.04 3.72-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-62.34-22.41c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56c14.35 11.07 30.04 20.23 46.88 27.34 26.19 11.05 53.96 16.65 82.54 16.64v-60.61-22.49c.02.02-.22.02-.24.02z" fill="#ffffff" data-original="#000000"></path></g></g></svg>
  );
};
const cmc = () => {
  return (
    <svg viewBox="0 0 76.52 77.67" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z" fill="#fff"/></svg>
  );
};
export default Main;
