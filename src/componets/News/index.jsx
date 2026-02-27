import arrow from "../../assets/icons/arrow.png"
import parking from "../../assets/imgs/parking.png"
import "./news.scss"
import { useGetSmiNewsQuery } from "../../api/news/news.api";

function News() {
      const { data, isLoading, error } = useGetSmiNewsQuery();
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error...</div>;
      console.log(data);
      
    return (
        <section className="news">
            <div className="container">
                <div className="news__content">
                    <div className="news__top">
                        <h2 className="news__title">Новости</h2>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="news__cards">
                        <div className="news__card">
                            <div className="news__card-imageWrapper">
                                <img className="news__card-img" src={parking} alt="parking" />
                                <div className="news__card-date">
                                    <h4>25.07.2024</h4>
                                </div>
                            </div>
                            <div className="news__card-mb">
                                <h3 className="news__card-title">
                                    Стандарт Паркинга в современном ЖК
                                </h3>
                                <div className="news__card-date-mb">
                                    <h4>25.07.2024</h4>
                                </div>
                            </div>
                        </div>
                        <div className="news__card">
                            <div className="news__card-imageWrapper">
                                <img className="news__card-img" src={parking} alt="parking" />
                                <div className="news__card-date">
                                    <h4>25.07.2024</h4>
                                </div>
                            </div>
                            <div className="news__card-mb">
                                <h3 className="news__card-title">
                                    Стандарт Паркинга в современном ЖК
                                </h3>
                                <div className="news__card-date-mb">
                                    <h4>25.07.2024</h4>
                                </div>
                            </div>
                        </div>
                        <div className="news__card">
                            <div className="news__card-imageWrapper">
                                <img className="news__card-img" src={parking} alt="parking" />
                                <div className="news__card-date">
                                    <h4>25.07.2024</h4>
                                </div>
                            </div>
                            <div className="news__card-mb">
                                <h3 className="news__card-title">
                                    Стандарт Паркинга в современном ЖК
                                </h3>
                                <div className="news__card-date-mb">
                                    <h4>25.07.2024</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News