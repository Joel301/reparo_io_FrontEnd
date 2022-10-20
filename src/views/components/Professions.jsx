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
import { getAllProfessions,filterByProfession } from "../../state/ducks/professionals/actions";
import { Link } from "react-router-dom";



export default function Professions () {
  const dispatch = useDispatch();
  const professions = useSelector((state) => state.professionals.professions);
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
                                <Link to='/home'>
                                  <Button value={prof.name[0].toUpperCase() + prof.name.slice(1)} variant="primary" onClick={(e)=>{
                                    dispatch(filterByProfession(e.target.value))
                                  }}>

                                        {prof.name[0].toUpperCase() + prof.name.slice(1)}
                                         </Button> </Link>
                                
                            </Card>
                        </Col>
                    ))
                }
                    <Col>
                        <Card>
                                
                                <Button  variant="primary" onClick={(e)=>{
                                    dispatch(filterByProfession('all'))
                                  }} >
                                <Card.Title>Todas las profesiones</Card.Title>
                                </Button>
                            
                        </Card>
                    </Col>
                </Row>

            </div>
         </>
    )
}