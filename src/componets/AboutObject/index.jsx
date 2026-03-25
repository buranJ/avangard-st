import Panorama from "../../assets/imgs/PanoramaParkDay.png";
import "./objectdetaill.scss";
function AboutObject({ about }) {
    const text=about.description
    const parts = text.split("\r\n\r\n");


const firstPart = parts[0];
const secondPart = parts[1];
    
    console.log(firstPart);
    console.log(secondPart);
    
    
    
  return (
    <section className="detail">
      <div className="container">
        <h2 className="detail__title">О жилом комплексе</h2>
        <div className="detail__content">
          <div className="detail__left">
            <p className="detail__info">
              {firstPart} <br /> <br /> {secondPart}
            </p>
            <div className="detail__btns">
              {about.apartments.map((item) => (
                <div className="detail__btn">{item.title}</div>
              ))}
            </div>
          </div>
          <div className="detail__rigth">
            <img src={about.first_image } alt="" className="detail__img" />
            <div className="detail__blog">
              <p className="detail__strit">{about.address}</p>
              <div className="detail__blog-btns">
                <div className="detail__blog-btn">{about.max_blocks}</div>
                <div className="detail__blog-btn">{about.max_apartment}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutObject;
