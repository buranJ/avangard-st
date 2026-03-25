import "./adv.scss"

function Advantages({ adv }) {
    return (
        <section className="adv">
            <div className="container">
                <div className="adv__content">
                    <h2 className="adv__title">Преимущества</h2>
                    <div className="adv__cards">
                        {adv.map((item) => (
                            <div className="adv__card">
                                <h3 className="adv__card-title">{item.title}</h3>
                                <img src={item.iconUrl} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages