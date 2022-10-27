import React from "react";

//State
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//redux
import { getAllProfessionals } from "../../state/ducks/professionals/actions";

//Components
import Professions from "../components/Professions";
import FormProfession from "../components/Formularios/FormProfession";

//Css Styles & imgs
import "./landing.css";

// Bootstrap
import Accordion from "react-bootstrap/Accordion";
import AboutUs from "../components/AboutUs";
import { Button, Carousel, Col, Offcanvas, Row } from "react-bootstrap";

export default function Landing() {
  const [client, setClient] = useState("client");

  const dispatch = useDispatch();
  // const profesionales = useSelector((state) => (state.professionals))

  useEffect(() => {
    dispatch(getAllProfessionals());
  }, [dispatch]);

  const onChangeClient = (e) => {
    e.preventDefault();
    if (client === "pro") {
      setClient("client");
    }
  };

  const onChangePro = (e) => {
    e.preventDefault();
    if (client === "client") {
      setClient("pro");
    }
  };

  // on offCanvas show
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="landing">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "2rem",
          height:'20rem'
         
        }}
      >
        <Row md={2}>
          <Col>
        <Carousel
        interval={null}
        fade={true}
        style={{width:'30rem',height:'20rem'}}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/retrato-trabajador-planta-industrial-mascara-concepto-coronavirus_53419-9409.jpg?w=2000"
          alt="First slide"
          style={{filter: "brightness(60%)",borderRadius:'0.5rem'}}
        />
        <Carousel.Caption>
          <h3>Soy Profesional</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/retrato-trabajador-planta-industrial-mascara-concepto-coronavirus_53419-9409.jpg?w=2000"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>¡Completa Tu Registro de Profesional!</h3>
          <p>En la barra de navegacion busca el boton registro y completa el formulario</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/retrato-trabajador-planta-industrial-mascara-concepto-coronavirus_53419-9409.jpg?w=2000"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>¡Ya estás listo para recibir solicitudes!</h3>
          <p>
          ¡Tené paciencia! las solicitudes llegarán... Respondé las
                solicitudes de trabajo cuando lleguen a tu perfil para ser el
                primero. El número de solicitudes que recibas dependerá de tu
                actividad, la localización y el rango en el cual te puedas
                desplazar.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/retrato-trabajador-planta-industrial-mascara-concepto-coronavirus_53419-9409.jpg?w=2000"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>Chateá y enviá cotizaciones a tus clientes</h3>
          <p>
          Contestá rápido a tus clientes para conseguir el trabajo antes
                que otros profesionales. El cliente no podrá comunicarse con vos
                si no le hablás primero. Enviá tu cotización al cliente desde la
                sección de cotizaciones del chat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/retrato-trabajador-planta-industrial-mascara-concepto-coronavirus_53419-9409.jpg?w=2000"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>Conseguí tu certificado de seguridad</h3>
          <p>
          Conseguí el certificado de seguridad de Reparo.io, ¡es gratis!
                Esto te ayudará a generar más confianza y conseguir más
                clientes. La seguridad es muy importante en la comunidad
                Reparo.io.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/retrato-trabajador-planta-industrial-mascara-concepto-coronavirus_53419-9409.jpg?w=2000"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>¡Recibe pagos por Reparo.io!</h3>
          <p>
          Configura tu cuenta para recibir pagos de manera segura cuando y
                donde quieras, ofreciendo un servicio más completo a tus
                clientes. ¡Es gratis!.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/retrato-trabajador-planta-industrial-mascara-concepto-coronavirus_53419-9409.jpg?w=2000"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>Convertite en Premium</h3>
          <p>
          ¡Conseguí más clientes! Convertite en profesional Premium para
                tener acceso prioritario a solicitudes, ofrecer promociones,
                destacar tu ficha de profesional y revisar tus estadísticas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </Col>




{/*    ///////////////////////////////////////////////////////////// */}
<Col>
     <Carousel
        interval={null}
        fade={true}
        style={{width:'30rem',height:'20rem'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(60%)",borderRadius:'0.5rem'}}
        />
        <Carousel.Caption>
          <h3>Soy Cliente</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>¡COMPLETA TU REGISTRO DE CLIENTE!</h3>
          <p>En la barra de navegacion busca el boton registro y completa el formulario</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>¡Ya estás listo para recibir solicitudes!</h3>
          <p>¡¡Tené paciencia! las solicitudes llegarán... Respondé las
                solicitudes de trabajo cuando lleguen a tu perfil para ser el
                primero. El número de solicitudes que recibas dependerá de tu
                actividad, la localización y el rango en el cual te puedas
                desplazar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>¡Hacé tu primera solicitud!</h3>
          <p>
          ¡Es gratis! Hacé una solicitud indicando lo que necesitás,
              mientras más detalles incluyás más fácil será encontrar un
              profesional que se adapte a vos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>Elegí al profesional que más te convenza.</h3>
          <p>
          Recordá que los profesionales con el certificado de seguridad
              (sello debajo de la dirección) son los más seguros.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>Hablá con el profesional.</h3>
          <p>
          Una vez que el profesional ha revisado tu solicitud se pondrá en
              contacto con vos a través del chat. Podrán usar el chat para
              aclarar dudas, enviar más información, concretar la fecha para la
              visita… ¡No te olvides de solicitar tu cotización desde el chat!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3> Pedí tu cotización desde el chat</h3>
          <p>
          Pedí tu cotización desde el chat A la derecha del nombre del
              profesional podés ver el apartado de cotizaciones. En esta sección
              podés solicitar una cotización al profesional si este aun no la ha
              mandado. No te preocupes, se puede modificar en cualquier momento
              si no estás de acuerdo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>  Paga a través de la pagina</h3>
          <p>
          Ahora pagar por Reparo.io es más fácil que nunca. Paga tus
              servicios contratados a través de la pagina de manera más fácil,
              rápida y segura.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/3776273/31936/i/600/depositphotos_319362956-stock-photo-man-pointing-showing-copy-space.jpg"
          alt="First slide"
          style={{filter: "brightness(20%)",borderRadius:'0.5rem'}}
        />

        <Carousel.Caption>
          <h3>  ¡Valorá al profesional!</h3>
          <p>
          No olvidés valorar el trabajo del profesional para ayudar a otros
              usuarios a encontrar el mejor profesional del hogar. ¡Juntos
              hacemos Reparo.io!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
      </div>
        <div></div>
      {/* Profesiones */}
      <Professions />

      {/* About Us */}
      <AboutUs />
    </div>
  );
}
