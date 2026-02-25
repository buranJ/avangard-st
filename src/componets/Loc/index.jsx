import "./loc.scss";
import About from "../../assets/imgs/about.png"
import cartRiht from "../../assets/imgs/locetionRight.png"

function Loc() {
  return (
    <section className="loc">
      <div className="loc__content">
        <div className="loc__cart">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad8df2a8a2d517805e8466ccf15786a024ae383f371dede8c1b99ac476e3ba5f2&amp;source=constructor"
            width="652"
            height="515"
            frameborder="0"
          ></iframe>
        </div>
        <div className="container">
          <div className="loc__info">
            <h2 className="loc__title">Локация</h2>
            <p className="loc__text">
              Локация клубного дома идеально сочетает близость к городу и все
              преимущества загородной жизни. Это поистине райское место для
              создания собственного уголка комфорта и гармонии.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="loc__bottom">
            <div className="loc__bottom-img"><img src={About} alt="" /></div>
            <div className="loc__bottom-img"><img src={cartRiht} alt="" /></div>
        </div>
      </div>
    </section>
  );
}

export default Loc;
