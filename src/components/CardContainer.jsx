import React from "react";
import { Container } from "react-bootstrap";
import data from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <Container  >
      <h1>Merhaba</h1>
      {data.map((player) => {
        return <PlayerCard {...player} />;
      })}
    </Container>
  );
};

export default CardContainer;
