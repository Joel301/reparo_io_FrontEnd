

//React
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

//Redux
import { getProfessions ,addProfessions, deleteProfession } from "../../../state/ducks/admins/actions"

//Bootstrap
import { useSelector } from "react-redux"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import { Form, Button } from "react-bootstrap"




export default function CrearProfesion () {

    const professions = useSelector((state) => state.admins.professions)
    // console.log(professions, "profesiones")
    const [name, setName] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfessions())
        
    },[dispatch])


    function handleInputChange(e) {
      e.preventDefault(e)
      setName(e.target.value)
    }

    //Agregar nueva profesion
    function handleSubmit(e) {
        if(name !== "" ) {
            professions.map((profesion) => {
                if(profesion.name !== name) {
                    dispatch(addProfessions( { name: name, id: professions.length + 1 }))
                }
            })
        }
    }

    function remove(id) {
        dispatch(deleteProfession(id))
    }


    return (
        <>
            <div>
                <h2 style={{display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "50px"}}>Crea una nueva profesion</h2>
                {
                    professions ? 
                    <div style={{ paddingBottom: "100px"}}>
                    <Container>
                        <h4>Profesiones Existentes :</h4>
                        <Row className="justify-content-md-center">
                            {
                                professions.map((profesion) => {
                                    return (
                                        <Col md="auto">
                                            <Badge bg="success" onClick={() => remove(profesion.id)} style={{fontSize: "18px", margin: "10px", textTransform: "capitalize", cursor: "pointer"}}>{profesion.name}</Badge>{' '}
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                   
                    <Form
                        style={{ width: "30%", display: "flex", height:'2.5rem', justifyContent: "center", marginLeft: "35%", marginTop: "50px", marginBottom: "50px"}}
                        size="sm"
                        >
                        <Form.Control
                            type="search"
                            placeholder="Nueva profesion..."
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => handleInputChange(e)}
                        />
                        <Button
                            type="submit"
                            variant="outline-success"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Crear
                        </Button>
                    </Form>
                    </div>
                 :
                 <>Error, no se encuentran las profesiones...</>
                }
            </div>
        </>
    )
}