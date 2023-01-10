import React, { useEffect } from "react";
import AOS from "aos";
import "./Edu.scss";
import PdpLogo from "../../photos/pdpLogo.jpeg";
import FounCer from "../../photos/FounCer.jpg";
import FrontCer from "../../photos/FrontCer.jpg";
import CambridgeLogo from "../../photos/CambridgeLogo.jpg";

function Edu() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="eduCon">
      <div className="titleCon">
        <h2>Educations</h2>
      </div>
      <div className="pdpCon" data-aos="zoom-in-up">
        <div className="pdpText">
          <h2>PDP Academy</h2>
          <p>
            I have been studying here since October 2021. I learned how to code
            here, how to use a computer, how to solve problems with code and I
            studied different programming languages. This learning center helped
            me achieve my goal and now I want to study back-end here to become a
            full stack developer
          </p>
        </div>
        <div className="pdpPhoto">
          <img src={PdpLogo} alt="" />
        </div>
      </div>
      <div className="pdpCerCon" data-aos="zoom-in-up">
        <div className="certificateTitle">
          <h3>Certificates</h3>
        </div>
        <div className="certificateCon">
          <div>
            <img src={FounCer} alt="" />
          </div>
          <div>
            <img src={FrontCer} alt="" />
          </div>
        </div>
      </div>

      <div className="cemCon" data-aos="zoom-out">
        <div className="cemText">
          <h2>Cambridge L.C.</h2>
          <p>
            I have been studying here since August 2022. I'm learning here
            because i want be able to speak in English and i want get IELTS to
            go to abroad end study in best Universities to be better and better.
            At the moment i'm studying in intermediate level. I'm going to
            finish this courses at september or october.
          </p>
        </div>
        <div className="cemPhoto">
          <img src={CambridgeLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Edu;
