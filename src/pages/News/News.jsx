import React from "react";
import "./news.scss";
import arrow from "../../assets/icons/arrow-prev.png";
import news from "../../assets/imgs/parking.png";

function News() {
  return (
    <section className="news">
      <div className="container">
        <div className="news__content">
          <div className="news__top">
            <button className="news__top-btn">
              <img src={arrow} alt="arrow" />
            </button>
            <h2 className="news__top-title">Новости</h2>
          </div>
          <div className="news__cards">
            <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
               <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
            <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
              <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
               <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
             <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
              <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
              <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
             <div className="news__card">
              <div className="news__card-img">
                <img src={news} alt="image" />
                <button className="news__card-btn">25.07.2024</button>
              </div>
              <div className="news__card-mb">
              <h3 className="news__card-title">
                Стандарт Паркинга в современном ЖК
              </h3>
              <button className=" news__card-btn-mb">25.07.2024</button>
              </div>
            </div>
           
          </div>
          <button className="news__btn">Загрузить еще</button>
        </div>
      </div>
    </section>
  );
}

export default News;
