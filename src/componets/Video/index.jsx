import "./video.scss"

function Video({ video }) {
    return (
        <section className="video">
            <div className="container">
                <div className="video__content">
                    <iframe src={video.youtube_url} frameBorder="0"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Video