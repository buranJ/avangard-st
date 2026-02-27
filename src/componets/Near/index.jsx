import React from "react";
import near from "../../assets/imgs/near.png";
import "./near.scss";
function Near() {
  return (
    <section className="near">
      <div className="container">
        <div className="near__content">
          <h2 className="near__title">Что интересного рядом</h2>
          <div className="near__cards">
            <div className="near__card">
              <h3 className="near__card-title">Панорама города Бишкек</h3>
              <div className="near__card-wrap">
                <img src={near} alt="" className="near__card-img" />
                <div className="near__card-time">2 мин</div>
              </div>
              
            </div>
            <div className="near__card">
              <h3 className="near__card-title">Панорама города Бишкек</h3>
              <div className="near__card-wrap">
                <img src={near} alt="" className="near__card-img" />
                <div className="near__card-time">2 мин</div>
              </div>
            </div>
            <div className="near__card">
              <h3 className="near__card-title">Панорама города Бишкек</h3>
              <div className="near__card-wrap">
                <img src={near} alt="" className="near__card-img" />
                <div className="near__card-time">2 мин</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Near;
