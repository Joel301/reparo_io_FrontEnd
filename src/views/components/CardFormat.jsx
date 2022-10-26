import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/ducks/cart/actions";
function CardFormat({ worker,estado,estadoBoolean}) {
  let profToString = worker.professions?.map((e) => e.name);
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const reserveOnClick =()=>{
    dispatch(addToCart(worker))
   
    estadoBoolean(estado=true)
  
   
    
  }
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
        <Button onClick={()=> reserveOnClick()}>Reservar</Button>
        <Link to={`/detail/${worker.id}`}>
          <Button bg="primary">Ver Mas...</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CardFormat;
