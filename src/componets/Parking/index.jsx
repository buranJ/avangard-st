import "./parking.scss"

function Parking({parking}){
 
    return(
        <section className="parking">
            <div className="container">
                <div className="parking__content">
                    <h2 className="parking__title">
                       {parking.images[0].title}
                    </h2>
                    <img src={parking.images[0].under_parking_layout} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Parking