import React from "react";
import "./news.scss";
import arrow from "../../assets/icons/arrow-prev.png";
import { useGetNewsQuery } from "../../api/news/news.api";

function News() {
  const { data, isLoading, error } = useGetNewsQuery();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
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
            {data.map((item) => (
              <div className="news__card">
                <div className="news__card-img">
                  <img
                    src={item.main_image}
                    alt="image"
                    className="news__card-bg"
                  />
                  <button className="news__card-btn">{item.created_at}</button>
                </div>
                <div className="news__card-mb">
                  <h3 className="news__card-title">{item.title}</h3>
                  <button className=" news__card-btn-mb">25.07.2024</button>
                </div>
              </div>
            ))}
          </div>
          <button className="news__btn">Загрузить еще</button>
        </div>
      </div>
    </section>
  );
}

export default News;
