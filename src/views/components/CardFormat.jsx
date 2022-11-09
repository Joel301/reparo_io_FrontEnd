
//React
import React from "react";
import { Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../state/ducks/cart/actions";

//CSS
import style from "./CardFormat.module.css"

//Bootstrap
import { Card, Button } from "react-bootstrap";
import { Rating } from "@mui/material";


function CardFormat({ worker,estado,estadoBoolean,setRepeatedAlert,repeatedAlert, client}) {

  let profToString = worker.professions?.map((e) => e.name)

  const reservedProf = useSelector(state=>state.cart.list)
  
  const dispatch = useDispatch()

  const reserveOnClick =()=>{
    if(reservedProf.find((item)=>item.professional.id === worker.id)){
      return setRepeatedAlert(repeatedAlert=true)
    }
    dispatch(addToCart(worker, client))
    estadoBoolean(estado=true)
  }

  return (

    <Card  bg="light" style={{ width: "18rem", height: "22rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <div className={style.inner}>
        <div className={style.img}
          variant="top"
          style={{ height: "10rem",width:'16.5rem',backgroundImage:`url(${worker.profileImg})`,  backgroundRepeat: "no-repeat",
          backgroundSize: "cover",borderRadius:'0.5rem', backgroundPosition: "center"}}
        />
      </div>

      <Card.Body>
        <Card.Title style={{display: "flex", gap: "2rem", justifyContent: "center", fontWeight: "bold", 
            textTransform: "capitalize", textPrimary:"red"}}>
          {`${worker.firstName} ${worker.lastName}`}
        </Card.Title>

        <Card.Text  style={{display: "flex", gap: "2rem", justifyContent: "center",
          textTransform: "capitalize"}}>
            {profToString?.join(", ")}
        </Card.Text>

        <Card.Subtitle style={{display: "flex", gap: "2rem", justifyContent: "center", 
          textTransform: "capitalize"}}>
            Reputacion: <Rating value={worker.rating} readOnly />
        </Card.Subtitle>
      </Card.Body>

      <Card.Footer
        style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
      >
        <Link to={`/detail/${worker.id}`}>
          <Button bg="primary">Ver Mas...</Button>
        </Link>

        <Button variant="success" onClick={()=> reserveOnClick()}>
          Reservar
        </Button>

      </Card.Footer>
    </Card>
  )
}

export default CardFormat;
