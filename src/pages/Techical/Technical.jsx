import { useGetTechnicalBaseQuery } from "../../api/contact/contact.api";
import tech from "../../assets/imgs/tech.png";
import "./technical.scss";

function Technical() {
  const { data, isLoading, error } = useGetTechnicalBaseQuery();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  let arr = [];
  for (let i = 0; i < data.images.length; i += 5) {
    arr.push(data.images.slice(i, i + 5));
  }
  console.log(arr);

  return (
    <section className="tech">
      <div className="container">
        <div className="tech__content">
          <h2 className="tech__title">{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
          <iframe
            width="98%"
            height="632"
            src={data.youtube_url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="tech__video"
          ></iframe>
          <div className="tech__video-text">Видео 2019 года</div>
          {arr.map((item) => {
            return (
              <div className="tech__img">
                <div className="tech__img-left">
                  <img src={item[0].image} alt="image" className="tech__img-1" />
                  <img src={item[1].image} alt="image" className="tech__img-2" />
                </div>
                <div className="tech__img-right">
                  <img src={item[2].image}  alt="image" className="tech__img-3" />
                  <div className="tech__img-bot">
                    <img src={item[3].image} alt="image" className="tech__img-4" />
                    <img src={item[4].image} alt="image" className="tech__img-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Technical;
