import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import "./beforAfter.scss";

function BeforAfter({ befor }) {
  // console.log(befor);
  return (
    <section className="befor">
      <div className="container">
        <div className="befor__top">
          <h2 className="befor__title">Атмосфера вечернего парка</h2>
        </div>
        <div className="befor__content">
          <ReactBeforeSliderComponent
            firstImage={{ imageUrl: befor.day_image }}
            secondImage={{ imageUrl: befor.night_image }}
          />
        </div>
      </div>
    </section>
  );
}

export default BeforAfter;
