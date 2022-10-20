import React from "react";

//State
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//redux
import { getAllProfessionals } from "../../state/ducks/professionals/actions";

//Components
import Professions from "../components/Professions";
import FormProfession from "../components/Formularios/FormProfession"

//Css Styles & imgs
import "./landing.css";
import imgClient from "./imgs/client.png";
import imgPro from "./imgs/pro.png";
import imfArrow from "./imgs/arrow.png";

// Bootstrap
import Accordion from "react-bootstrap/Accordion";
import AboutUs from "../components/AboutUs";
import { Button, Offcanvas } from "react-bootstrap";

export default function Landing() {
  const [client, setClient] = useState("client");

  const dispatch = useDispatch();
  // const profesionales = useSelector((state) => (state.professionals))

  useEffect(() => {
    dispatch(getAllProfessionals());
  }, [dispatch])

  const onChangeClient = (e) => {
    e.preventDefault()
    if (client === "pro") {
      setClient("client")
    }
  };

  const onChangePro = (e) => {
    e.preventDefault()
    if (client === "client") {
      setClient("pro")
    }
  }

  // on offCanvas show
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="landing">
      
    

      {/* BUTTONS */}
      <div className="alter-buttons">
        <div className="btns">
          <a onClick={onChangeClient} href="/">
            <img className="img" src={imgClient} alt="imageClie" />
            <br />
            Necesito un servicio
          </a>
        </div>

        <div className="btns">
          <a onClick={onChangePro} href="/">
            <img className="img2" src={imgPro} alt="imageProf" />
            <br />
            Soy Profesional
          </a>
        </div>
      </div>

      {/* TITULO */}
      <div>
        <h2 style={{ paddingTop: "30px" }}>¿COMO FUNCIONA?</h2>
        <img className="img-arrow" src={imfArrow} alt="arrow" />
      </div>

      {/* Acordeon como funciona */}
      {client === "client" ? (
          <Accordion alwaysOpen style={{
            width: "70%",
            justifyContent: "center",
            marginLeft: "15%",
            marginTop: "20px",
          }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                (1) ¡COMPLETA TU REGISTRO DE CLIENTE!
              </Accordion.Header>
              <Accordion.Body>
                Registrate haciendo click aquí:
                <br />
                <Button>Regístrate</Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                (2) ¡Hacé tu primera solicitud!
              </Accordion.Header>
              <Accordion.Body>
                ¡Es gratis! Hacé una solicitud indicando lo que necesitás,
                mientras más detalles incluyás más fácil será encontrar un
                profesional que se adapte a vos.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                (3) Elegí al profesional que más te convenza.
              </Accordion.Header>
              <Accordion.Body>
                Recordá que los profesionales con el certificado de seguridad
                (sello debajo de la dirección) son los más seguros.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>(4) Hablá con el profesional.</Accordion.Header>
              <Accordion.Body>
                Una vez que el profesional ha revisado tu solicitud se pondrá en
                contacto con vos a través del chat. Podrán usar el chat para
                aclarar dudas, enviar más información, concretar la fecha para
                la visita… ¡No te olvides de solicitar tu cotización desde el
                chat!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                (5) Pedí tu cotización desde el chat
              </Accordion.Header>
              <Accordion.Body>
                Pedí tu cotización desde el chat A la derecha del nombre del
                profesional podés ver el apartado de cotizaciones. En esta
                sección podés solicitar una cotización al profesional si este
                aun no la ha mandado. No te preocupes, se puede modificar en
                cualquier momento si no estás de acuerdo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                (6) Paga a través de la pagina
              </Accordion.Header>
              <Accordion.Body>
                Ahora pagar por Reparo.io es más fácil que nunca. Paga tus
                servicios contratados a través de la pagina de manera más fácil,
                rápida y segura.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>(7) ¡Valorá al profesional!</Accordion.Header>
              <Accordion.Body>
                No olvidés valorar el trabajo del profesional para ayudar a
                otros usuarios a encontrar el mejor profesional del hogar.
                ¡Juntos hacemos Reparo.io!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      ) : (
        <div className="acordeon">
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                (1) ¡COMPLETA TU REGISTRO DE PROFESIONAL!
              </Accordion.Header>
              <Accordion.Body>
                Registrate haciendo click aquí:
                <br />
                <Button onClick={handleShow}>Regístrate</Button>
              </Accordion.Body>
              <Offcanvas bg="dark" show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Regístrate</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <FormProfession />
                </Offcanvas.Body>
              </Offcanvas>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                (2) ¡Ya estás listo para recibir solicitudes!
              </Accordion.Header>
              <Accordion.Body>
                ¡Tené paciencia! las solicitudes llegarán... Respondé las
                solicitudes de trabajo cuando lleguen a tu perfil para ser el
                primero. El número de solicitudes que recibas dependerá de tu
                actividad, la localización y el rango en el cual te puedas
                desplazar.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                (3) Chateá y enviá cotizaciones a tus clientes
              </Accordion.Header>
              <Accordion.Body>
                Contestá rápido a tus clientes para conseguir el trabajo antes
                que otros profesionales. El cliente no podrá comunicarse con vos
                si no le hablás primero. Enviá tu cotización al cliente desde la
                sección de cotizaciones del chat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                (4) Conseguí tu certificado de seguridad
              </Accordion.Header>
              <Accordion.Body>
                Conseguí el certificado de seguridad de Reparo.io, ¡es gratis!
                Esto te ayudará a generar más confianza y conseguir más
                clientes. La seguridad es muy importante en la comunidad
                Reparo.io.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                (5) ¡Recibe pagos por Reparo.io!
              </Accordion.Header>
              <Accordion.Body>
                Configura tu cuenta para recibir pagos de manera segura cuando y
                donde quieras, ofreciendo un servicio más completo a tus
                clientes. ¡Es gratis!.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>(6) Convertite en Premium</Accordion.Header>
              <Accordion.Body>
                ¡Conseguí más clientes! Convertite en profesional Premium para
                tener acceso prioritario a solicitudes, ofrecer promociones,
                destacar tu ficha de profesional y revisar tus estadísticas.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}

      {/* Profesiones */}
      <Professions />

      {/* About Us */}
      <AboutUs />
    </div>
  );
}
