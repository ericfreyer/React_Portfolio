import React from "react";
import IMG_3760 from "./images/IMG_3760.JPG";
import GitHub from "./images/GitHub-Mark.png";
import gmail from "./images/gmail.webp";
import Linkedin from "./images/Linkedin_symbol_transparent.png";
import "../../../src/styles.css";
import Fade from '../../components/fade';

function Home() {
  return (
    
    <div><Fade />
      <div className="fadeIn fadeDiv">
        <h1>Okay...Here we go!</h1>
      </div>
      <div
        className="container sm border border-dark w-50 p-3 middleDiv"
        style={{
          marginTop: "5%",
          backgroundColor: "rgba(211, 197, 252, 0.116)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>About Me</h1>
        <div className="row">
          <div className="col-sm-6 h-100 d-inline-block">
            <img
              src={IMG_3760}
              width="100%"
              height="100%"
              className="rounded
          float-left img-fluid"
              alt="Eric"
              style={{ height: "auto" }}
            />
            <div className="row">
              <div
                className="col-sm-12 d-inline-block"
                style={{
                  textAlign: "center",
                  paddingTop: "2%",
                  paddingLeft: "10%",
                }}
              >
                <ul
                  className="list-group list-group-horizontal"
                  style={{ listStyleType: "none" }}
                >
                  <li>
                    <a href="mailto: ericcfreyer@gmail.com">
                      <img
                        src={gmail}
                        style={{ width: "120%", height: "80%" }}
                        className="rounded float-left img-fluid img-thumbnail"
                        alt="Gmail"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="Linkedin"
                      className="rounded float-left"
                      href="https://www.linkedin.com/in/eric-freyer-977719168/"
                    >
                      <img
                        src={Linkedin}
                        style={{
                          height: "25%",
                          width: "25%",
                          background: "none",
                        }}
                        alt="Linkedin"
                      />
                    </a>
                  </li>
                  <li style={{ paddingRight: "7%" }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="Github"
                      className="rounded float-left"
                      href="https://github.com/ericfreyer"
                    >
                      <img
                        src={GitHub}
                        style={{ height: "120%", width: "120%" }}
                        alt="GitHub"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 border text-justify overflow-auto align-justified d-flex justify-content-center d-flex align-items-center"
            style={{ fontFamily: "Noto Serif, serif", fontSize: "20px" }}
          >
            Hello! My name is Eric Freyer. I lived for five years in Montana
            where I received my BS in biology. I currently make a living working
            as a freelance art handler for various museums and galleries in and
            around the metropolitan area. Most notably I have worked for the
            American Museum of Natural History, the MOMA, the Met, and in Andy
            Warhol's studio. I am now studying to become a full-stack web
            developer and have grown a love for front-end work and design.
          </div>
        </div>
      </div>
      <h1 style={{opacity: '0'}}>yo</h1>
      <h1 style={{opacity: '0'}}>yo</h1>
      <h1 style={{opacity: '0'}}>yo</h1>
      <h1 style={{opacity: '0'}}>yo</h1>
    </div>
  );
}



export default Home;
