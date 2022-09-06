import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const AboutUs = () => {
  return (
    <div id="model5">
      <div className="divider"></div>
      <div className="members">
        <div className="member">
          <img width={400} src={""} />
          <div className="description">
            <h1>Ahmed ALAMI</h1>
            <h2>CEO</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor
              sit amet consectet.
            </p>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="member">
          <img width={400} src={""} />
          <div className="description">
            <h1>Omar Nadir</h1>
            <h2>CEO</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor
              sit amet consectet.
            </p>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="member">
          <img width={400} src={""} />
          <div className="description">
            <h1>Khaled MAHER</h1>
            <h2>CEO</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor
              sit amet consectet.
            </p>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
