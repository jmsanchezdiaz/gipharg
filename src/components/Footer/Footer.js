import img from "./img.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={img} alt="powered-by-giphy" />
      <h3>
        Developed by{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/jmsanchezdiaz"
        >
          {" "}
          Juan Manuel Sanchez Diaz
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
