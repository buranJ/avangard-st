import React from "react";
import "./live.scss";
import Progress from "../Progress";
import { useState } from "react";

function Live() {
    const [open, setOpen] = useState(false)
    function isOpen() {
      setOpen(!open)
    }
    function Close() {
      setOpen(!open)
    }
  return (
    <section className="live">
      <div className="container">
        <div className="live__content">
          <div className="live__card live__card1">
            <h2 className="live__card-title">Прямой эфир</h2>
            <p className="live__card-text">
              Смотрите трансляцию строительства в режиме реального времени по
              ссылке:
            </p>
            <button className="live__card-btn live__card-btn1">Посмотреть</button>
          </div>
          <div className="live__card live__card2">
            <h2 className="live__card-title">Этапы строительства</h2>
            <p className="live__card-text">
            Смотрите «Этапы строительства» по ссылке:
            </p>
            <button onClick={isOpen}  className="live__card-btn live__card-btn2">Посмотреть</button>
          </div>
        </div>
      </div>
      {open && <Progress onClose={Close} />}
    </section>
  );
}

export default Live;
