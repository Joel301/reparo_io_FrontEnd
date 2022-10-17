
//CSS Styles
import "./Professions.css"
import imgCarrito from "../pages/imgs/carrito.png"

//Botstrap
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';

export default function Professions () {

let professionsHardCode = [
  {
    "id": 8,
    "name": "jardinero"
  },
  {
    "id": 4,
    "name": "cerrajero"
  },
  {
    "id": 1,
    "name": "aire acondicionado"
  },
  {
    "id": 5,
    "name": "electricista"
  },
  {
    "id": 3,
    "name": "carpintero"
  },
  {
    "id": 10,
    "name": "plomero"
  },
  {
    "id": 9,
    "name": "mecánico"
  },
  {
    "id": 6,
    "name": "gasista"
  },
  {
    "id": 2,
    "name": "albañil"
  },
  {
    "id": 7,
    "name": "herrero"
  }
]

    return (
        <>

            {/* Titulo componente profesiones  */}
            <div style={{marginTop: "70px", fontWeight: "bolder" }}>
                <h3>
                Elige una profesion:
                </h3>
            </div>

            {/* Boton Carrito y Selecion profesiones */}

            <div className='dropdown'>
                
                    <Dropdown>

                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Profesiones
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Aire acondicionado</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Albañil</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Carpintero</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Cerrajero</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Electricista</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">Gasista</Dropdown.Item>
                        <Dropdown.Item href="#/action-7">Herrero</Dropdown.Item>
                        <Dropdown.Item href="#/action-8">Jardinero</Dropdown.Item>
                        <Dropdown.Item href="#/action-9">Mecánico</Dropdown.Item>
                        <Dropdown.Item href="#/action-10">Plomero</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button>
                    <img 
                        className="imgCarrito"
                        src={imgCarrito}
                        />
                </Button>
            
            </div>

            {/* Listado de profesiones  */}
            <div className='profesiones'>

                <Row 
                    xs={1} 
                    md={4} 
                    className="g-4"
                    style={{margin: "90px"}}>
                {
                    professionsHardCode.map((prof) => (
                        <Col>
                            <Card>
                                {/* <Card.Body> */}
                                    <Button variant="primary">
                                        <Card.Title>{prof.name}</Card.Title>
                                    </Button>
                                {/* </Card.Body> */}
                            </Card>
                        </Col>
                    ))
                }
                    <Col>
                        <Card>
                            {/* <Card.Body> */}
                                <Button variant="primary">
                                <Card.Title>Todas las profesiones</Card.Title>
                                </Button>
                            {/* </Card.Body> */}
                        </Card>
                    </Col>
                </Row>

            </div>
         </>
    )
}