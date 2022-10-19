import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//CSS Styles
import "./Professions.css"
import imgCarrito from "../pages/imgs/carrito.png"

//Botstrap
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import { getAllProfessions } from "../../state/ducks/professionals/actions";


export default function Professions () {
  const dispatch = useDispatch();
  const professions = useSelector((state) => state.professions);
  useEffect(() => {
    dispatch(getAllProfessions());
  }, [dispatch]);
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

                    {professions?.map((p) => {
                              return <Dropdown.Item key={p.name} value={p.name}> 
                                {p.name[0].toUpperCase() + p.name.slice(1)}
                                </Dropdown.Item>}
                            )}
                          </Dropdown.Menu>
                </Dropdown>
                <Button>
                    <img 
                        className="imgCarrito"
                        src={imgCarrito}
                        alt="img"
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
                    professions.map((prof) => (
                        <Col>
                            <Card>
                                {/* <Card.Body> */}
                                    <Button variant="primary">
                                        <Card.Title>{prof.name[0].toUpperCase() + prof.name.slice(1)}</Card.Title>
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