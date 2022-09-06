import candle from "../img/candle.avif";
import diffuser from "../img/diffuser.avif";
import massage from "../img/massage.avif";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AboutUs = () => {
  return (
    <div id="model4">
      <h1 className="model-title">Team Model 4</h1>
      <div className="divider"></div>
      <div className="members">
        <div className="member">
          <img width={200} height={200} src={candle} />
          <div className="description">
            <h1>Angela Wong</h1>
            <h2>CEO</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor
              sit amet consectet.
            </p>
            <div className="social-media">
              <GitHubIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div className="member">
          <img width={200} height={200} src={massage} />
          <div className="description">
            <h1>Omar Nadir</h1>
            <h2>CEO</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor
              sit amet consectet.
            </p>
            <div className="social-media">
              <GitHubIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div className="member">
          <img width={200} height={200} src={diffuser} />
          <div className="description">
            <h1>Khaled MAHER</h1>
            <h2>CEO</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor
              sit amet consectet.
            </p>
            <div className="social-media">
              <GitHubIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
