import HeaderComps from "./Header-comps";
import { useRef } from "react";

const HomepageComps = () => {
  const elem = useRef(null);
  const elem2 = useRef(null);

  const slides = (trig) => {
    if (elem.current) {
      trig == "prev"
        ? (elem.current.scrollLeft -= 400)
        : (elem.current.scrollLeft += 400);
    }
  };

  const slides2 = (trig) => {
    if (elem2.current) {
      if (trig == "prev") {
        elem2.current.scrollLeft -= 400;
      } else {
        elem2.current.scrollLeft += 400;
      }
    }
  };

  return (
    <>
      <HeaderComps />
      <main>
        <section id="heroSection">
          <div id="heroContainer" className="container">
            <div className="topHero">
              <h1>THE NEW CIVIC R-CV</h1>
              <p>Available now! grab it fast limited stock.</p>
            </div>
            <div className="bottomHero">
              <div className="heroButtonWr">
                <a href="#" className="globalBtn heroBtn">
                  Grab it fast!
                </a>
                <a href="#" className="globalBtn heroBtn">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="recomendSection">
        <div id="recomendContainer" className="container">
          <div className="recomendTitle">
            <h2>Our recommendations</h2>
          </div>
          <div className="prev" onClick={() => slides("prev")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 256 512"
            >
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
            </svg>
          </div>
          <div className="recomendBoxPr" ref={elem}>
            <div className="recomendBoxChild">
              <div className="topRecomend">
                <img src="../src/all-image/recom1.jpg" alt="" />
              </div>
              <div className="bottomRecomend">
                <div className="topBottomRecomend">
                  <h3>Virtual showroom</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iure, illum.
                  </p>
                </div>
                <div className="buttonRecomend">
                  <a href="" className="globalBtn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="recomendBoxChild">
              <div className="topRecomend">
                <img src="../src/all-image/recom2.jpg" alt="" />
              </div>
              <div className="bottomRecomend">
                <div className="topBottomRecomend">
                  <h3>Express service</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sapiente, recusandae!
                  </p>
                </div>
                <div className="buttonRecomend">
                  <a href="" className="globalBtn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="recomendBoxChild">
              <div className="topRecomend">
                <img src="../src/all-image/recom3.jpg" alt="" />
              </div>
              <div className="bottomRecomend">
                <div className="topBottomRecomend">
                  <h3>Austral apps</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, magnam?
                  </p>
                </div>
                <div className="buttonRecomend">
                  <a href="" className="globalBtn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="recomendBoxChild">
              <div className="topRecomend">
                <img src="../src/all-image/recom4.jpg" alt="" />
              </div>
              <div className="bottomRecomend">
                <div className="topBottomRecomend">
                  <h3>Current offers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae, corporis?
                  </p>
                </div>
                <div className="buttonRecomend">
                  <a href="" className="globalBtn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="recomendBoxChild">
              <div className="topRecomend">
                <img src="../src/all-image/recom5.jpg" alt="" />
              </div>
              <div className="bottomRecomend">
                <div className="topBottomRecomend">
                  <h3>New models</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quidem, repellendus.
                  </p>
                </div>
                <div className="buttonRecomend">
                  <a href="" className="globalBtn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="next" onClick={() => slides("next")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 256 512"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </div>
        </div>
      </section>

      <section id="cardCarSection">
        <div id="cardCarContainer" className="container">
          <div className="titleCardCar">
            <h2>Our new vehicles</h2>
          </div>
          <div className="prev prevCar" onClick={() => slides2("prev")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 256 512"
            >
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
            </svg>
          </div>
          <div className="cardCarBoxPr" ref={elem2}>
            <div className="cardCarBoxChild">
              <div className="backgroundCar">
                <img src="../src/all-image/cardBg1.jpg" alt="" />
              </div>
              <div className="car">
                <img src="../src/all-image/cardCar1.png" alt="" />
              </div>
            </div>
            <div className="cardCarBoxChild">
              <div className="backgroundCar">
                <img src="../src/all-image/cardBg2.jpg" alt="" />
              </div>
              <div className="car">
                <img src="../src/all-image/cardCar2.png" alt="" />
              </div>
            </div>
            <div className="cardCarBoxChild">
              <div className="backgroundCar">
                <img src="../src/all-image/cardBg3.jpg" alt="" />
              </div>
              <div className="car">
                <img src="../src/all-image/cardCar3.png" alt="" />
              </div>
            </div>
            <div className="cardCarBoxChild">
              <div className="backgroundCar">
                <img src="../src/all-image/cardBg4.jpg" alt="" />
              </div>
              <div className="car">
                <img src="../src/all-image/cardCar4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="next nextCar" onClick={() => slides2("next")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 256 512"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageComps;
