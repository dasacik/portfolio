import React, { useEffect } from "react";
import AOS from "aos";
import "./Lang.scss";
import RusPhoto from "../../photos/RusPhoto.jpg";
import EngPhoto from "../../photos/EngPhoto.jpg";
import UzbPhoto from "../../photos/UzbPhoto.jpg";

function Lang() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="titleName" data-aos="zoom-in">
        <h2>Languages</h2>
      </div>
      <div className="conBox">
        <div className="rusCon" data-aos="fade-up">
          <div>
            <img src={RusPhoto} alt="Russian Flag" />
          </div>
          <h2>Russian</h2>
          <h4>Level: С1 – Advanced</h4>
          <p>
            I speak Russian very fluently, because I have studied in the Russian
            class since when i came to first grade
          </p>
        </div>
        <div className="engCon" data-aos="fade-up">
          <div>
            <img src={EngPhoto} alt="US and UK Flags" />
          </div>
          <h2>English</h2>
          <h4>Level: B1 – Intermediate</h4>
          <p>
            Nowadays i'm learning English, Because i must to get IELTS to
            University, to my future job too and to myself.
          </p>
        </div>
        <div className="uzbCon" data-aos="fade-up">
          <div>
            <img src={UzbPhoto} alt="Uzbekistan Flag" />
          </div>
          <h2>Uzbek</h2>
          <h4>Level: Native speaker</h4>
          <p>
            I speak Uzbek since childhood, Uzbek is my first language. In the
            future, I want to learn Japanese, Korean, Turkish and Arabic.
            languages
          </p>
        </div>
      </div>
    </>
  );
}

export default Lang;
