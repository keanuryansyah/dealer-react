import { useState } from "react";

const HeaderComps = () => {
  // data mobil
  const [data, setData] = useState("");
  const [active, setActive] = useState("Accord");

  // slide down element
  const [slideDown, setSlideDown] = useState("");

  const changeAll = (cardata) => {
    setData(cardata);
    setActive(cardata.carname);
  };

  const slide = (param) => {
    if (slideDown.trigger == param.trigger) {
      param.bool = false;
      param.trigger = "";
    }

    setSlideDown(param);
  };

  return (
    <>
      <header>
        <section id="headerSection">
          <div id="headerContainer" className="container">
            <div className="headerLogo">
              <a href="#">
                <img src="../src/all-image/logo.png" alt="" />
              </a>
            </div>
            <nav>
              <ul>
                <li onClick={() => slide({ trigger: "Vehicles", bool: true })}>
                  <span>Vehicles</span>
                  <span
                    className={slideDown.trigger == "Vehicles" ? "rotate" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </li>
                <li
                  onClick={() =>
                    slide({ trigger: "Shopping tools", bool: true })
                  }
                >
                  <span>Shopping tools</span>
                  <span
                    className={
                      slideDown.trigger == "Shopping tools" ? "rotate" : ""
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </li>
                <li
                  onClick={() => slide({ trigger: "After sell", bool: true })}
                >
                  <span>After sell</span>
                  <span
                    className={
                      slideDown.trigger == "After sell" ? "rotate" : ""
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </li>
                <li onClick={() => slide({ trigger: "About us", bool: true })}>
                  <span>About us</span>
                  <span
                    className={slideDown.trigger == "About us" ? "rotate" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </li>
              </ul>
              <div className="burgerMenu">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg>
                </span>
              </div>
            </nav>
          </div>
        </section>
      </header>

      <section id="navSection" className={slideDown.bool ? "slide" : ""}>
        <div className="navWr">
          <div id="navContainer" className="container">
            <div
              className={`vehiclesBoxPr navGB ${
                slideDown.trigger == "Vehicles" ? "selected" : ""
              }`}
            >
              <div className="leftVehicle">
                <div className="listCarPr">
                  <div
                    className={`listCarChild ${
                      active == "Accord" ? "active" : ""
                    }`}
                    onClick={() =>
                      changeAll({ carname: "Accord", desccar: "Handsome car" })
                    }
                  >
                    <div className="leftListCarChild">
                      <img src="../src/all-image/Accord.jpg" alt="" />
                    </div>
                    <div className="rightListCarChild">
                      <h3>Accord</h3>
                      <p>Handsome car</p>
                    </div>
                  </div>
                  <div
                    className={`listCarChild ${
                      active == "Ferrari" ? "active" : ""
                    }`}
                    onClick={() =>
                      changeAll({ carname: "Ferrari", desccar: "Cool car" })
                    }
                  >
                    <div className="leftListCarChild">
                      <img src="../src/all-image/Ferrari.jpg" alt="" />
                    </div>
                    <div className="rightListCarChild">
                      <h3>Ferrari</h3>
                      <p>Cool car</p>
                    </div>
                  </div>
                  <div
                    className={`listCarChild ${
                      active == "Lamborghini" ? "active" : ""
                    }`}
                    onClick={() =>
                      changeAll({
                        carname: "Lamborghini",
                        desccar: "Excellent car",
                      })
                    }
                  >
                    <div className="leftListCarChild">
                      <img src="../src/all-image/Lamborghini.jpg" alt="" />
                    </div>
                    <div className="rightListCarChild">
                      <h3>Lamborghini</h3>
                      <p>Excellent car</p>
                    </div>
                  </div>
                  <div
                    className={`listCarChild ${
                      active == "Classic-vw" ? "active" : ""
                    }`}
                    onClick={() =>
                      changeAll({
                        carname: "Classic-vw",
                        desccar: "Classic car",
                      })
                    }
                  >
                    <div className="leftListCarChild">
                      <img src="../src/all-image/Classic-vw.jpg" alt="" />
                    </div>
                    <div className="rightListCarChild">
                      <h3>Classic-vw</h3>
                      <p>Classic car</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middleVehicle">
                <div className="topMiddleVehicle">
                  <h4>{data == "" ? "Accord" : data.carname}</h4>
                  <p>{data == "" ? "Handsome car" : data.desccar}</p>
                </div>
                <div className="buttonWr">
                  <a className="globalBtn headerBtn" href={`/${active}`}>
                    View detail
                  </a>
                  <a className="globalBtn headerBtn" href="">
                    Book now
                  </a>
                </div>
              </div>
              <div className="rightVehicle">
                <img
                  src={`../src/all-image/${active}.jpg`}
                  alt=""
                  className={active == "Accord" ? "show" : ""}
                />
                <img
                  src={`../src/all-image/${active}.jpg`}
                  alt=""
                  className={active == "Ferrari" ? "show" : ""}
                />
                <img
                  src={`../src/all-image/${active}.jpg`}
                  alt=""
                  className={active == "Lamborghini" ? "show" : ""}
                />
                <img
                  src={`../src/all-image/${active}.jpg`}
                  alt=""
                  className={active == "Classic-vw" ? "show" : ""}
                />
              </div>
            </div>
            <div
              className={`shoppingToolsBox navGB ${
                slideDown.trigger == "Shopping tools" ? "selected" : ""
              }`}
            >
              <div className="leftShoppingTools">
                <img src="../src/all-image/shoppingTools.png" alt="" />
              </div>
              <div className="rightShoppingTools">
                <ul>
                  <li>
                    <a href="#">Build and price</a>
                  </li>
                  <li>
                    <a href="#">Search inventory</a>
                  </li>
                  <li>
                    <a href="#">Find a dealer</a>
                  </li>
                  <li>
                    <a href="#">Shop online</a>
                  </li>
                  <li>
                    <a href="#">Request a quote</a>
                  </li>
                  <li>
                    <a href="#">Book a test drive</a>
                  </li>
                  <li>
                    <a href="#">Compare vehicles</a>
                  </li>
                  <li>
                    <a href="#">Certified pre-owned</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`afterSellBox navGB ${
                slideDown.trigger == "After sell" ? "selected" : ""
              }`}
            >
              <div className="leftAfterSellBox">
                <img src="../src/all-image/afterSell.jpg" alt="" />
              </div>
              <div className="rightAfterSellBox">
                <ul>
                  <li>
                    <a href="#">Service menu</a>
                  </li>
                  <li>
                    <a href="#">Owners manual</a>
                  </li>
                  <li>
                    <a href="#">Austral mobile apps</a>
                  </li>
                  <li>
                    <a href="#">Austral mobile service</a>
                  </li>
                  <li>
                    <a href="#">Austral we care</a>
                  </li>
                  <li>
                    <a href="#">Facilities</a>
                  </li>
                  <li>
                    <a href="#">Booking service</a>
                  </li>
                  <li>
                    <a href="#">Assurance</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderComps;
