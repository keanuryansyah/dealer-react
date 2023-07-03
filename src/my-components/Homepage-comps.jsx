import HeaderComps from "./Header-comps";

const HomepageComps = () => {
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
    </>
  );
};

export default HomepageComps;
