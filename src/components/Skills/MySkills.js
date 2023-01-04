import "./MySkills.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import { useState } from "react";

function MySkills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const rgbColor = () => {
    setTimeout(() => {
      let rgbRed = Math.floor(Math.random() * 256);
      let rgbGreen = Math.floor(Math.random() * 256);
      let rgbBlue = Math.floor(Math.random() * 256);
      setRed(rgbRed);
      setGreen(rgbGreen);
      setBlue(rgbBlue);
    }, 2000);
  };
  console.log(rgbColor());
  return (
    <div className="fatherCon">
      <div className="titleName" data-aos="fade-up">
        <h2>My Skills</h2>
      </div>
      <div className="skillsCon" data-aos="fade-right">
        <div className="cycle1">
          <p>Interactive</p>
        </div>
        <div
          className="cycle2"
          style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
        >
          <p>
            React Js
            <br />
            Sass
            <br />
            TypeScript
          </p>
        </div>
        <div className="cycle3">
          <p>
            Physical <br /> Computing
          </p>
        </div>
        <div
          className="cycle4"
          style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
        >
          <p>
            HTML
            <br />
            CSS
            <br />
            JavaScript
          </p>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
