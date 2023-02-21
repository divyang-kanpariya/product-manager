import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../css/footer.css";

const Footer = () => {
  const footersx = {
    position: "fixed",
    bottom: "0",
    backgroundColor: "black",
    width: "100%",
    height: "64px",
  };

  return (
    <div style={footersx}>
      <div className="footer-left">
        <p className="copyright-text">
          <CopyrightIcon /> Divyang Kanpariya
        </p>
        <div className="footer-right">
          <InstagramIcon className="footer-icons" />
          <FacebookIcon className="footer-icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
