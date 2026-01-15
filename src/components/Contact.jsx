import PhoneIcon from "../assets/phone-icon.png";
import MailIcon from "../assets/mail-icon.png";

function Contact(props) {
  return (
    <article className="contact-card">
      <img src={props.img} alt={`Photo of ${props.name}`} />

      <h3>{props.name}</h3>

      <div className="info-group">
        <img src={PhoneIcon} alt="phone icon" />
        <p>{props.phone}</p>
      </div>

      <div className="info-group">
        <img src={MailIcon} alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
}

export default Contact;
