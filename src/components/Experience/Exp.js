import React, { useEffect } from "react";
import AOS from "aos";
import "./Exp.scss";
import devPhoto from "../../photos/dev-team.jpg";

function Exp() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="expBox"  data-aos="zoom-in">
      <div className="photoTitle">
        <img src={devPhoto} alt="developers" />
      </div>
      <div className="textBox">
        <h2>Experience</h2>
        <p>
          I don't have work experience yet, but I do have experience working in
          a team. I have skills with command control, I do my job to the end, I
          work wholeheartedly and I can find a common language with people.
        </p>
      </div>
    </div>
  );
}

export default Exp;
