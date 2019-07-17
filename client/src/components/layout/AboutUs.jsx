import React, { Fragment } from "react";
import Footer from "./Footer";
import coverImg from "../images/about-profile-cover.png";
import profileImg from "../images/about-profile-img.png";

{
  /* This style brings the content below the fixed header */
}
const footerDiv = {
  marginTop: "108px"
};

const AboutUs = () => {
  return (
    <Fragment>
      <div className="aboutUs-ct">
        <h2>Meet The Developers</h2>
        {/* Profile cards- row 1 */}
        <div className="card-container">
          {/* Card - Carl K */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={profileImg} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Carl Kakisis</h3>
                    <p className="classYear">CareerDevs 2019</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    "To be or not to be, this is my awesome motto!"
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                      others...
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>235</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>114</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>35</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card - Tom B */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={profileImg} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Tom Blais</h3>
                    <p className="classYear">CareerDevs 2019</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    "To be or not to be, this is my awesome motto!"
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                      others...
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>235</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>114</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>35</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card - Marcus G */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={profileImg} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Marcus Galvin</h3>
                    <p className="classYear">CareerDevs 2019</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    "To be or not to be, this is my awesome motto!"
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                      others...
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>235</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>114</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>35</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile cards- row 2 */}
          <div className="card-container">
            {/* Card - Jose M */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="cover">
                    <img src={coverImg} />
                  </div>
                  <div className="user">
                    <img src={profileImg} />
                  </div>
                  <div className="content">
                    <div className="main">
                      <h3 className="name">JoseMiguel Marte</h3>
                      <p className="classYear">CareerDevs 2019</p>
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="footer" />
                    <i class="fas fa-share" /> Flip
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="header">
                    <h5 className="motto">
                      "To be or not to be, this is my awesome motto!"
                    </h5>
                  </div>
                  <div className="content">
                    <div className="main">
                      <h4 className="text-center">Studies</h4>
                      <p className="text-center">
                        Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                        others...
                      </p>
                    </div>
                    <div className="stats-container">
                      <div className="stats">
                        <h4>235</h4>
                        <p>Followers</p>
                      </div>
                      <div className="stats">
                        <h4>114</h4>
                        <p>Following</p>
                      </div>
                      <div className="stats">
                        <h4>35</h4>
                        <p>Projects</p>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="github">
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card - Hayden B */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="cover">
                    <img src={coverImg} />
                  </div>
                  <div className="user">
                    <img src={profileImg} />
                  </div>
                  <div className="content">
                    <div className="main">
                      <h3 className="name">Hayden Bryant</h3>
                      <p className="classYear">CareerDevs 2019</p>
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="footer" />
                    <i className="fas fa-share" /> Flip
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="header">
                    <h5 className="motto">
                      "To be or not to be, this is my awesome motto!"
                    </h5>
                  </div>
                  <div className="content">
                    <div className="main">
                      <h4 className="text-center">Studies</h4>
                      <p className="text-center">
                        Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                        others...
                      </p>
                    </div>
                    <div className="stats-container">
                      <div className="stats">
                        <h4>235</h4>
                        <p>Followers</p>
                      </div>
                      <div className="stats">
                        <h4>114</h4>
                        <p>Following</p>
                      </div>
                      <div className="stats">
                        <h4>35</h4>
                        <p>Projects</p>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="github">
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card - Carl D */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="cover">
                    <img src={coverImg} />
                  </div>
                  <div className="user">
                    <img src={profileImg} />
                  </div>
                  <div className="content">
                    <div className="main">
                      <h3 className="name">Carl Durand</h3>
                      <p className="classYear">CareerDevs 2019</p>
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="footer" />
                    <i className="fas fa-share" /> Flip
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="header">
                    <h5 className="motto">
                      "To be or not to be, this is my awesome motto!"
                    </h5>
                  </div>
                  <div className="content">
                    <div className="main">
                      <h4 className="text-center">Studies</h4>
                      <p className="text-center">
                        Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                        others...
                      </p>
                    </div>
                    <div className="stats-container">
                      <div className="stats">
                        <h4>235</h4>
                        <p>Followers</p>
                      </div>
                      <div className="stats">
                        <h4>114</h4>
                        <p>Following</p>
                      </div>
                      <div className="stats">
                        <h4>35</h4>
                        <p>Projects</p>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="github">
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile cards- row 2 */}
        <div className="card-container">
          {/* Card - Matt T */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={profileImg} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Matt Tartaglia</h3>
                    <p className="classYear">CareerDevs 2019</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i class="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    "To be or not to be, this is my awesome motto!"
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                      others...
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>235</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>114</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>35</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card - Steve B */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={profileImg} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Steve Barriere</h3>
                    <p className="classYear">CareerDevs 2019</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    "To be or not to be, this is my awesome motto!"
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                      others...
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>235</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>114</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>35</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card - Oscar D */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={profileImg} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Oscar Diahn</h3>
                    <p className="classYear">CareerDevs 2019</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    "To be or not to be, this is my awesome motto!"
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                      others...
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>235</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>114</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>35</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={footerDiv}>
        <Footer />
      </div>{" "}
    </Fragment>
  );
};

export default AboutUs;
