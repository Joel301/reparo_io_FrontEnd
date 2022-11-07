//React
import React, { useState } from "react";

//Components
import EditarProfesional from "./EditarProfesional";
import Ordenes from "./Ordenes";
import EditarCliente from "./EditarCliente";
import CrearProfesion from "./CrearProfesion";

//React-Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Admin() {
  const allProfesionales = useSelector(state => state.professionals.allProfessionals.length)
  const allProfesiones = useSelector(state => state.professionals.professions.length)

  const navigate = useNavigate();

  const [component, setComponent] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeComponent = (e) => {
    e.preventDefault();
    setComponent(e.target.value);
  };

  return (
    <>
      <Modal.Body style={{ margin: "0 auto"}}>
        <div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
          <Card
            style={{
              height: "60%",
              border: "3px solid blue",
              boxShadow: "0 0 10px #000",
              margin: "2%",
              padding: "4%",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Lucas Caño</h1>
            <img
              src="https://i.pinimg.com/originals/75/08/77/750877ee27f0a6082c6590f805714efc.png"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                alignSelf: "center",
              }}
            />
            <ListGroup variant="flush">
              <ListGroup.Item>ID Admin: 98TWEJR65464</ListGroup.Item>
              <ListGroup.Item>Correo: luema94@gmail.com</ListGroup.Item>
              <ListGroup.Item>Celular: 2614987585</ListGroup.Item>
              <ListGroup.Item>Nacionalidad: Argentina</ListGroup.Item>
            </ListGroup>
          </Card >
          <Card style={{
              height: "60%",
              border: "3px solid blue",
              boxShadow: "0 0 10px #000",
              margin: "2%",
              padding: "4%",
            }}>
            <h1>Datos de la Pagina</h1>
            <ListGroup variant="flush">
              <ListGroup.Item>Cantidad Profesionales: {allProfesionales}</ListGroup.Item>
              <ListGroup.Item>Cantidad Profesiones: {allProfesiones}</ListGroup.Item>
              <ListGroup.Item>Cantidad de Clientes: 5</ListGroup.Item>
              <ListGroup.Item style={{fontWeight: "bold", textAlign: "center"}}>Profesionales por profesion </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ margin: "1.5%", width: "20%" }}
          >
            Herramientas
          </Button>
          <Button
            style={{ margin: "1.5%", width: "20%" }}
            onClick={() => navigate("/")}
          >
            Volver
          </Button>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Modificaciones</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Button
              variant="primary"
              onClick={onChangeComponent}
              value="editarProfesional"
              style={{ margin: "2.5%" }}
            >
              Editar Profesionales
            </Button>
            <Button
              variant="primary"
              onClick={onChangeComponent}
              value="ordenes"
              style={{ margin: "2.5%" }}
            >
              Ordenes de Compra
            </Button>
            <Button
              variant="primary"
              onClick={onChangeComponent}
              value="editarCliente"
              style={{ margin: "2.5%" }}
            >
              Editar Cliente
            </Button>
            <Button
              variant="primary"
              onClick={onChangeComponent}
              value="crearProfesion"
              style={{ margin: "2.5%" }}
            >
              Crear Profesiones
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
        {component === "editarProfesional" ? (
          <EditarProfesional />
        ) : component === "ordenes" ? (
          <Ordenes />
        ) : component === "editarCliente" ? (
          <EditarCliente />
        ) : component === "crearProfesion" ? (
          <CrearProfesion />
        ) : (
          <></>
        )}
      </Modal.Body>
    </>
  );
}
