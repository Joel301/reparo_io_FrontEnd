import React from "react";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

function CardFormat({ worker }) {
  let profToString = worker.professions?.map((e) => e.name);
  console.log(worker);
  return (
    <Card bg="light" style={{ width: "18rem", height: "22rem" }}>
      <div
        variant="top"
        
        style={{ height: "10rem",width:'16.5rem',backgroundImage:`url(${worker.profileImg})`,  backgroundRepeat: "no-repeat",
        backgroundSize: "cover",borderRadius:'0.5rem',
        backgroundPosition: "center"}}
      />
      <Card.Body>
        <Card.Title>{`${worker.firstName} ${worker.lastName}`}</Card.Title>

        <Card.Text>{profToString?.join(", ")}</Card.Text>
        <Card.Subtitle>Reputacion: {worker.review}</Card.Subtitle>
      </Card.Body>
      <Card.Footer
        style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
      >
        <Button >Reservar</Button>
        <Link to={`/detail/${worker.id}`}>
          <Button bg="primary">Ver Mas...</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CardFormat;
