import "./media.scss";
import { useGetSmiNewsQuery } from "../../api/news/news.api";

function Media() {
  const { data, isLoading, error } = useGetSmiNewsQuery();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <section className="media">
      <div className="container">
        <div className="media__content">
          <h2 className="media__title">СМИ об “Авангард Стиль”</h2>
          <div className="media__cards">
            {data.results.map((item) => (
              <a href={item.url} target="_blank" className="media__card">
                <img src={item.image} alt="image" className="media__img" />
                <div className="media__card-info">
                  <p className="media__card-text">
                 {item.title}
                  </p>
                  <h3 className="media__card-date">{item.created_at}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Media;
