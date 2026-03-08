import { useGetTechnicalBaseQuery } from "../../api/contact/contact.api";

import Collage from "../../componets/Collage";
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
          {arr.map((el) => {
            return <Collage item={el} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Technical;
