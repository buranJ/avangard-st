import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import befor from "../../assets/imgs/befor.png";
import after from "../../assets/imgs/after.png";
import "./beforAfter.scss";

function BeforAfter() {
  return (
    <section className="befor">
      <div className="container">
        <div className="befor__top">
          <h2 className="befor__title">Атмосфера вечернего парка</h2>
        </div>
        <div className="befor__content">
          <ReactBeforeSliderComponent
            firstImage={{ imageUrl: befor }}
            secondImage={{ imageUrl: after }}
          />
        </div>
      </div>
    </section>
  );
}

export default BeforAfter;
