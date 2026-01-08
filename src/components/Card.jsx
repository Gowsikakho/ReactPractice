function Card(props) {
  return (
    <section className="card">
      <img src={props.imageUrl} alt={props.title} className="card-image" />

      <div className="card-content">
        <div className="card-location">
          <span className="location-icon">📍</span>
          <span className="country">{props.location}</span>
          <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>

        <h2>{props.title}</h2>

        <p className="date">{props.startDate} - {props.endDate}</p>

        <p className="description">{props.description}</p>
      </div>
    </section>
  );
}

export default Card;
