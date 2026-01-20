export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img}
                    alt={props.name}
                />
            </div>
            <div className="info-container">
                <span className="country">{props.country}</span>
                <a 
                    href={props.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    View on Google Maps
                </a>
                <h2 className="entry-title">{props.name}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    );
}