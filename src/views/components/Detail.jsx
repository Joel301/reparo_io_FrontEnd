
//React
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"

//Redux
import { getDetail } from "../../state/ducks/detail/actions"

//CSS Styles
import "./Detail.css"

//Bootstrap
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

export default function Detail() {

    const { id } = useParams()

    const detalle = useSelector((state) => state.detail)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])


    return (

        <>
            {
                detalle ?

                    <Card style={{ width: '80%', marginLeft: "10%", fontWeight: "500", marginTop: "2.5%", marginBottom: "10%" }}>
                        <Card.Img variant="top" src={detalle.profileImg} style={{ marginTop: "2.5%", marginLeft: "2.5%", maxWidth: "300px", borderRadius: "50%", minHeight: "300px", maxHeight: "300px", border: "1px solid grey" }} />
                        <Card.Body style={{ justifyContent: "center" }}>

                            <Card.Title style={{ textTransform: "uppercase", justifyContent: "center", display: "flex " }}>
                                <Badge bg="primary" style={{ width: "30%", fontSize: "30px" }}>{detalle.lastName} {detalle.firstName}</Badge>

                            </Card.Title>

                            <Card.Text style={{ display: "flex", justifyContent: "center", textTransform: "uppercase" }}>
                                {
                                    detalle.professions?.map((prof) => {
                                        return <Badge key={`${prof.id}_${prof.name}`} bg="primary" style={{ width: "150px", fontSize: "20px", margin: "20px" }}>{prof.name}</Badge>
                                    })
                                }
                            </Card.Text>

                            <Card.Title style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}>
                                Reseñas: {detalle.review} ★★★★★ (hardcode)
                            </Card.Title>

                            <ListGroup variant="flush" style={{ justifyContent: "center", widht: "90%", display: "flex ", border: "1px solid grey" }}>
                                <ListGroup.Item>Email: {detalle.email}</ListGroup.Item>
                                <ListGroup.Item>Direccion: {detalle.address}</ListGroup.Item>
                                <ListGroup.Item>Telefono: {detalle.phoneNumber}</ListGroup.Item>
                            </ListGroup>

                            <Button variant="primary" style={{ marginTop: "2.5%", width: "20%" }}>RESERVAR</Button>

                        </Card.Body>
                    </Card>

                    :

                    <>
                        <Alert variant="danger">
                            <Alert.Heading>Ha ocurrido un problema</Alert.Heading>
                            <p>
                                Redirigete hacia el Home.
                            </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Link to="/home">
                                    <Button variant="outline-success">
                                        HOME
                                    </Button>
                                </Link>
                            </div>
                        </Alert>
                    </>

            }
        </>
    )
}