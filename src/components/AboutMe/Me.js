import "./aboutMe.scss";
import myPhoto from "../../photos/Dasa.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
function Me() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="aboutMeCon">
      <div className="textMe" data-aos="fade-right">
        <h2>About me</h2>
        <p>
          I enjoy creating cool products which make people's lives better. I
          study at school, I learned programming at PDP Academy. I have
          experience working in a team. I grew up in Tashkent, i love my job and
          i didn't give up when i developed projects. My dream is be a very
          successful senior developer. About it ,i'm learning more and more for
          it.
        </p>
      </div>
      <div className="myPhoto" data-aos="fade-right">
        <img src={myPhoto} alt="" />
      </div>
    </div>
  );
}

export default Me;
