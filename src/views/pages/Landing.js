//State
import { useState } from 'react'

//Components
import HeaderNavBar from "./HeaderNavBar"

//Css Styles & imgs
import "./landing.css"
import imgClient from "./imgs/client.png"
import imgPro from "./imgs/pro.png"
import imfArrow from "./imgs/arrow.png"

// Bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function Landing () {

    const [client, setClient] = useState('client')

    const onChangeClient = (e) => {
        e.preventDefault()
        if(client === 'pro') {
            setClient('client')
        }
    }

    const onChangePro = (e) => {
        e.preventDefault()
        if(client === 'client') {
            setClient('pro')
        }
    }

    return (
        <div className="landing">

            {/* NAVBAR */}
            <HeaderNavBar />

            {/* BUTTONS */}
            <div className="alter-buttons">
                <div className="btns">
                    <a onClick={onChangeClient} href="/">
                        <img 
                        className='img' 
                        src={imgClient}
                        alt='imageClie'
                        />
                        <br/>
                        Necesito un servicio
                    </a>
                </div>

                <div className="btns">
                    <a onClick={onChangePro} href="/">
                        <img 
                        className='img2' 
                        src={imgPro}
                        alt='imageProf'

                        />
                        <br/>
                        Soy Profesional
                    </a>

                </div>
            </div>

            {/* TITULO */}
            <div>
                <h2>
                    ¿COMO FUNCIONA?
                </h2>
                <img
                className='img-arrow'
                src={imfArrow}
                alt='arrow'

                />

            </div>

            {
                client === 'client' ?
                <>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                            <Card.Title> (1)
                            ¡COMPLETA TU REGISTRO DE CLIENTE!</Card.Title>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                            <Card.Title> (2)
                            ¡Hacé tu primera solicitud!</Card.Title>
                            <Card.Text>
                            ¡Es gratis! Hacé una solicitud indicando lo que necesitás, 
                            mientras más detalles incluyás más fácil será encontrar un profesional 
                            que se adapte a vos.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (3)
                                Elegí al
                                profesional que más te convenza.</Card.Title>
                                <Card.Text>
                                Recordá que
                                los profesionales con el certificado de 
                                seguridad (sello debajo de la dirección) son 
                                los más seguros.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (4)
                            Hablá con el profesional.</Card.Title>
                                <Card.Text>
                                Una vez que el profesional ha revisado tu solicitud 
                            se pondrá en contacto con vos a través del chat. 
                            Podrán usar el chat para aclarar dudas, enviar más 
                            información, concretar la fecha para la visita… 
                            ¡No te olvides de solicitar tu cotización desde el chat!
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (5)
                                Pedí tu cotización desde el chat</Card.Title>
                                <Card.Text>
                                Pedí tu cotización desde el chat
                            A la derecha del nombre del profesional podés ver el 
                            apartado de cotizaciones. En esta sección podés 
                            solicitar una cotización al profesional si este aun 
                            no la ha mandado. No te preocupes, se puede 
                            modificar en cualquier momento si no estás de acuerdo.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (6)
                            Paga a través de la pagina</Card.Title>
                                <Card.Text>
                                Ahora pagar por Reparo.io es más fácil que nunca.
                                Paga tus servicios contratados a través de la pagina 
                                de manera más fácil, rápida y segura.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (7)
                            ¡Valorá al profesional!</Card.Title>
                                <Card.Text>
                                No olvidés valorar el trabajo del profesional para
                             ayudar a otros usuarios a encontrar el mejor profesional del hogar.
                            ¡Juntos hacemos Reparo.io!
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
                :
                <>
                    <Row xs={1} md={2} className="g-4">
                    <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (1)
                                    ¡COMPLETA TU REGISTRO DE PROFESIONAL!</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (2)
                            ¡Ya estás listo para recibir solicitudes!</Card.Title>
                                <Card.Text>
                                ¡Tené paciencia! las solicitudes llegarán... Respondé las solicitudes
                             de trabajo cuando lleguen a tu perfil para ser el primero. El número
                              de solicitudes que recibas dependerá de tu actividad, la localización
                               y el rango en el cual te puedas desplazar.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (3)
                            Chateá y enviá cotizaciones a tus clientes</Card.Title>
                                <Card.Text>
                                Contestá rápido a tus clientes para conseguir el trabajo antes que otros
                             profesionales. El cliente no podrá comunicarse con vos si no le hablás
                              primero. Enviá tu cotización al cliente desde la sección de cotizaciones del chat.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (4)
                            Conseguí tu certificado de seguridad</Card.Title>
                                <Card.Text>
                                Conseguí el certificado de seguridad de Reparo.io, ¡es gratis! Esto te 
                            ayudará a generar más confianza y conseguir más clientes. La seguridad
                             es muy importante en la comunidad Reparo.io.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (5)
                            ¡Recibe pagos por Reparo.io!</Card.Title>
                                <Card.Text>
                                Configura tu cuenta para recibir pagos de manera segura cuando y donde
                             quieras, ofreciendo un servicio más completo a tus clientes.
                            ¡Es gratis!.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                <Card.Title> (6)
                            Convertite en Premium</Card.Title>
                                <Card.Text>
                                ¡Conseguí más clientes! Convertite en profesional Premium para tener 
                            acceso prioritario a solicitudes, ofrecer promociones, destacar tu 
                            ficha de profesional y revisar tus estadísticas.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            }

        </div>
    )
}


