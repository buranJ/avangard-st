import "./about.scss";
import Bilding from "../../assets/icons/about_building.png";
import Examination from "../../componets/Examination";
import Materials from "../../componets/Materials";
import Certificates from "../../componets/Certificates";
import Licenses from "../../componets/Licenses";
import HistoriCompane from "../../componets/HistoriCompane";
import { useGetAboutUsQuery } from "../../api/about/about.api";

function About() {
  const { data, isLoading, error } = useGetAboutUsQuery();
    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки данных</div>;
    console.log(data);
    
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__content">
            <h2 className="about__title">О нас</h2>
            <p className="about__info">
              {data.description}
            </p>
            <div className="about__icons">
              {
                data.advantages.map((item) => (
                  <div className="about__icon">
                    <img src={item.svg} alt="" className="about__icon-img" />
                    <p className="about__icon-text">{item.title}</p>
                  </div>
                ))
              }

            </div>
            <div className="about__videos">
              <div className="about__video">
                <iframe
                  width="560"
                  height="315"
                  src={data.youtube_url_1}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="about__video">
                <iframe
                  width="560"
                  height="315"
                  src={data.youtube_url_2}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="about__specialist">
              <h2 className="about__specialist-title">
                {data.section_1.title}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: data.section_1.description }} className="aboute__specialist-text">
              </div>
            </div>
          </div>
        </div>
      </section>

      <Examination />
      <Materials object={data.section_3}  />
      <HistoriCompane list={data.section_4} />
      <Licenses licenses={data.section_5} />
      <Certificates certificates={data.section_6} />
      
    </>
  );
}

export default About;
