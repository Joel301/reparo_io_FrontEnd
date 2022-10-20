
//React Redux
import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getAllProfessions, filterByProfession } from "../../state/ducks/professionals/actions"

//CSS Styles
import "./Professions.css"

//Botstrap
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'



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
                                  <Button 
                                    value={prof.name[0].toUpperCase() + prof.name.slice(1)} 
                                    variant="primary" 
                                    style={{width: "100%"}}
                                    onClick={(e)=>{dispatch(filterByProfession(e.target.value))}}>

                                        {prof.name[0].toUpperCase() + prof.name.slice(1)}

                                  </Button> 
                                </Link>
                            </Card>
                        </Col>
                    ))
                }
                    <Col>
                        <Card>
                            <Link to='/home'>
                                <Button 
                                    variant="primary" 
                                    style={{width: "100%"}}
                                    onClick={(e)=>{ dispatch(filterByProfession('all')) }} >

                                    <Card.Title>Todas las profesiones</Card.Title>

                                </Button>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
         </>
    )
}