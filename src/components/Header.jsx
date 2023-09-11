import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import nbaLogo from "../assets/nba.png";

const Header = () => {
  return (
    <Container>
      <Image src={nbaLogo} width="20%"></Image>
      <h1 className="display-4 fw-bold">NBA Legends</h1>
    </Container>
  );
};

export default Header;
