import "./loc.scss";

function Loc({loc}) {
  return (
    <section className="loc">
      <div className="loc__content">
          <h2 className="loc__title-mb">Локация</h2>
        <div className="loc__cart">
          <iframe
            src={loc.location_iframe_url}
            width="652"
            height="515"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="container">
          <div className="loc__info">
            <h2 className="loc__title">Локация</h2>
            <p className="loc__text">
        {loc.location_description}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="loc__bottom">
            <div className="loc__bottom-img"><img src={loc.location_image_first} alt="" /></div>
            <div className="loc__bottom-img loc__bottom-img-mb"><img src={loc.location_image_second} alt="" /></div>
        </div>
      </div>
    </section>
  );
}

export default Loc;
