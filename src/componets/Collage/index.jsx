function Collage({ item }) {
  return (
    <div className="tech__img">
      <div className="tech__img-left">
        <img src={item[0].image} alt="image" className="tech__img-1" />
        <img src={item[1].image} alt="image" className="tech__img-2" />
      </div>

      <div className="tech__img-right">
        <img src={item[2].image} alt="image" className="tech__img-3" />

        <div className="tech__img-bot">
          <img src={item[3].image} alt="image" className="tech__img-4" />
          <img src={item[4].image} alt="image" className="tech__img-4" />
        </div>
      </div>
    </div>
  );
}

export default Collage;