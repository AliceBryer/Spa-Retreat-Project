import React from "react";
import { useState, useEffect } from "react";
import candle from "../img/candle.avif";
import diffuser from "../img/diffuser.avif";
import massage from "../img/massage.avif";
import oil from "../img/oil.avif";
import relax from "../img/relax.avif";

const homepagePics = [candle, massage, diffuser, massage, oil, relax];

function Homepage() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(
        homepagePics[Math.floor(Math.random() * homepagePics.length)]
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home-page">
      <div className="homepage-pic-container">
        <div>
          <img className="welcome-pic" src={currentImage} alt="spa pictures" />
        </div>
        <div className="welcome-msg">Welcome to 404GetAway</div>
      </div>
    </section>
  );
}

export default Homepage;
