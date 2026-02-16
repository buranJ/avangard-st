import "./hero.scss";
function Hero({ data }) {
  console.log(data);
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__info">
            <h1 className="hero__title">SINCE 1998</h1>
            <h2 className="hero__text">Доверие, заслуженное годами</h2>
          </div>
          <div className="hero__info">
            <h1 className="hero__title">155</h1>
            <h2 className="hero__text">Построили объектов</h2>
          </div>
          <div className="hero__info">
            <h1 className="hero__title">700тыс м2</h1>
            <h2 className="hero__text">Введено в эксплуатацию</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
