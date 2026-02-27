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
            {data.map((item) => (<div className="objects__card">
              <div className="objects__card-img-wrapper">
              <div className="objects__card-img1-wrapper">
              <img className="objects__card-img1" src={item.imagebg} alt="" />
              </div>
              <img className="objects__card-img2" src={item.imagepng} alt="" />
              </div>
              <h3 className="objects__card-title">{item.title}</h3>
              <p className="objects__card-desc">Жилой комплекс премиум класса
                ул. Токомбаева 26/1
                8 многоэтажных блоков</p>
              <button className="objects__card-btn">О проекте</button>
            </div>))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objects;
