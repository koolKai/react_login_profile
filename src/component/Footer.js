import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "sticky",
    bottom: "0",
    width: "100%",
    right: "0",
  };
  return (
    <footer
      className="bg-dark text-light py-3 d-flex-column align-items-center"
      style={footerStyle}
    >
      <p className="text-center">
        Copyright &copy; Happily Ever
        <br />
        <a href="#!" className="small text-muted text-center px-25">
          Terms of use.
        </a>
        <a href="#!" className="small text-muted text-center">
          Privacy policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
