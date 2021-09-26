import img from "./img.png";

const Footer = () => {
  console.log(img);
  return (
    <footer id="footer">
      <img src={img} alt="" />
    </footer>
  );
};

export default Footer;
