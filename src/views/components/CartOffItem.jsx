
//React
import React from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

//Actions
import { addDayToProf,deleteItemCart,removeDayFromProf } from "../../state/ducks/cart/actions"

//Bootstrap
import { Card, ListGroup, Dropdown, Button, Modal, Badge, Toast, ToastContainer } from "react-bootstrap"



export default function CartOffItem({ professional, totalDays, days, exitCanvas, }) {

  let { firstName, lastName, professions, id, availableDays } = professional;

  const [noDaysAlert,setNoDaysAlert] = useState(false) // este estado se creo para mostrar el mensaje de error si ningun dia fue seleccionado
  
  let dispatch = useDispatch()
  
  const [ alert , setAlert ] = useState({
    day:'',
    show:false
  })
  
  const noDaysHandler = ()=>{
    if(days.length === 0 && exitCanvas == true){
      return setNoDaysAlert(true)
    }

    return setNoDaysAlert(false)
  } 
  
  let stringProfessions = professions.map((prof) => prof.name).join(" ,")
  
  const week = [
    "Lunes ",
    "Martes ",
    "Miercoles ", // eventualmente agregar calendario y unirlo al back para se deshabiliten los dias que el profesional tiene ocupados
    "Jueves ",
    "Viernes ",
    "Sabado ",
  ];
  
  const daysHandler = (e)=>{
    if(days.includes(e.target.innerText)) return setAlert({day:`${e.target.innerText}`,show:true})

    dispatch(addDayToProf(id ,e.target.innerText))
  }

  useEffect(()=>{
    noDaysHandler()
  })


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
              {availableDays.map((day) => {
                return (
                  <Dropdown.Item    onClick={daysHandler}>
                    {day}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item style={{cursor:"pointer"}}>{
          days.map((day)=><Badge onClick={()=> dispatch(removeDayFromProf(id,day))}>{day}</Badge>)
          }</ListGroup.Item>
        
        <ListGroup.Item>Total de dias: {days.length} </ListGroup.Item>
      </ListGroup>
      <ToastContainer>
      <Toast style={{color:"white"}} bg="danger" position="bottom-start" show={alert.show} onClose={()=>setAlert({day:'',show:false})}>
          <Toast.Header>
            
            <strong className="me-auto">No puedes realizar esta accion</strong>
            
          </Toast.Header>
          <Toast.Body>El dia {alert.day} para el profesional {firstName} {lastName} ya ha sido reservado</Toast.Body>
        </Toast>
        </ToastContainer>
        <ToastContainer>
      <Toast style={{color:"white"}} bg="danger" position="bottom-start" show={noDaysAlert} onClose={()=>setNoDaysAlert(false)} >
          <Toast.Header>
            
            <strong className="me-auto">No puedes realizar esta accion</strong>
            
          </Toast.Header>
          <Toast.Body>Debes seleccionar los dias de tu profesional para seguir navegando</Toast.Body>
        </Toast>
        </ToastContainer>
      
    </Card>
  );
}

