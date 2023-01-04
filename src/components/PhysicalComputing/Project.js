import "./Projects.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import KFCpc from "../../photos/KFCpc.jpg";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="box">
      <div className="titleBox" data-aos="fade-up">
        <h2>My Project</h2>
      </div>
      <div className="fatherCon">
        <div className="photoCon" data-aos="fade-right">
          <img src={KFCpc} alt="KFC_PC" className="photo1" />
        </div>
        <div className="textCon" data-aos="fade-right">
          <h2>KFC.uz</h2>
          <p>
            I finished this project last summer. This project took about 1.5
            months. This site has been designed with languages like: React js,
            Sass, Html. There I didn’t use API, because I haven’t familiar
            people who works in the back-end sphere, because of this, I
            developed 60 products for myself in ArrayObjects which I submitted
            to Redux In this project,<br/> I learned how to make a Scroll Button in
            React js and create a basket <br/> But unfortunately I didn't get the link
            from netify because it can't somehow open my file
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
