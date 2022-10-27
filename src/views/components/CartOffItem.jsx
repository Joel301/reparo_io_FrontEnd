import React from "react";
import { useEffect, useState } from "react";
import { Card, ListGroup, Dropdown, Button, Modal, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addDayToProf,deleteItemCart,removeDayFromProf } from "../../state/ducks/cart/actions";
function CartOffItem({ professional, totalDays, days }) {
  let { firstName, lastName, professions,id } = professional;
  let dispatch = useDispatch()
  const [ alert , setAlert ] = useState({
    day:'',
    show:false
  })
  let stringProfessions = professions.map((prof) => prof.name).join(" ,");
  const week = [
    "Lunes ",
    "Martes ",
    "Miercoles ", // eventualmente agregar calendario y unirlo al back para se deshabiliten los dias que el profesional tiene ocupados
    "Jueves ",
    "Viernes ",
    "Sabado ",
  ];
  const daysHandler = (e)=>{
    if(days.includes(e.target.innerText)) return setAlert({day:`${e.target.innerText}`,show:true});
    dispatch(addDayToProf(id ,e.target.innerText))
}

  return (
    <Card bg="info" style={{ width: "18rem" }}>
      <Card.Header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h6>{`${firstName} ${lastName}`}</h6>{" "}
        <Button variant="info" onClick={()=>dispatch(deleteItemCart(id))}>Eliminar</Button>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> {stringProfessions} </ListGroup.Item>
        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Selecciona los dias
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {week.map((day) => {
                return (
                  <Dropdown.Item    onClick={daysHandler}>
                    {day}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item>{
          days.map((day)=><Badge onClick={()=> dispatch(removeDayFromProf(id,day))}>{day}</Badge>)
          }</ListGroup.Item>
        
        <ListGroup.Item>Total de dias: {totalDays} </ListGroup.Item>
      </ListGroup>
      <Modal show={alert.show} onHide={()=>setAlert({day:'',show:false})}>
        <Modal.Header closeButton>
          <Modal.Title>No puedes realizar esta accion</Modal.Title>
        </Modal.Header>
        <Modal.Body>El dia {alert.day} para el profesional {firstName} {lastName} ya ha sido reservado</Modal.Body>
       
      </Modal>
    </Card>
  );
}

export default CartOffItem;
