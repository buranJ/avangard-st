import React from "react";
import object from "../../assets/imgs/object.png";
import "./objects.scss";

function Objects() {
  return (
    <section className="objects">
      <div className="container">
        <div className="objects__content">
          <h2 className="objects__title">Строящиеся объекты</h2>
          <div className="objects__cards">
        
               <div className="objects__card">
              <img src={object} alt="" />
              <h3 className="objects__card-title">КД “Panorama Park”</h3>
              <button className="objects__card-btn">О проекте</button>
            </div>
              <div className="objects__card">
              <img src={object} alt="" />
              <h3 className="objects__card-title">КД “Panorama Park”</h3>
              <button className="objects__card-btn">О проекте</button>
            </div>
                <div className="objects__card">
              <img src={object} alt="" />
              <h3 className="objects__card-title">КД “Panorama Park”</h3>
              <button className="objects__card-btn">О проекте</button>
            </div>
                <div className="objects__card">
              <img src={object} alt="" />
              <h3 className="objects__card-title">КД “Panorama Park”</h3>
              <button className="objects__card-btn">О проекте</button>
            </div>
                <div className="objects__card">
              <img src={object} alt="" />
              <h3 className="objects__card-title">КД “Panorama Park”</h3>
              <button className="objects__card-btn">О проекте</button>
            </div>
                <div className="objects__card">
              <img src={object} alt="" />
              <h3 className="objects__card-title">КД “Panorama Park”</h3>
              <button className="objects__card-btn">О проекте</button>
            </div>
              
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objects;
