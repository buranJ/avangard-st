import React from "react";
import object from "../../assets/imgs/object.png";
import arrow from "../../assets/icons/arrow-black.png";
import "./objects.scss";
import { useGetObjectsListQuery } from "../../api/objects/objects.api";

function Objects() {
  const { data, isLoading, error } = useGetObjectsListQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  console.log(data);
  return (
    <section className="objects">
      <div className="container">
        <div className="objects__content">
          <div className="objects__top">
            <h2 className="objects__title">Строящиеся объекты</h2>
            <img src={arrow} alt="arrow" />
          </div>
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
