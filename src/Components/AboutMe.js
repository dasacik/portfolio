import React, { useEffect } from "react";
import "../Styles/AboutMe.scss";
import AOS from "aos";

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="FatherCon">
      <div data-aos="fade-up" className="TitleCon">
        <h1>About me</h1>
      </div>
      <div className="SonCon">
       <img src='dasa.jpg' alt="a" />
      </div>
    </div>
  );
}

export default AboutMe;
