import React from "react";
import { useEffect } from "react";
import { Card, Button, ListGroup, ListGroupItem, Alert} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClientId } from "../../state/ducks/clients/actions"
import { Link } from "react-router-dom"


export default function DetailClient(){
    const { id } = useParams();
    const detalleCliente = useSelector((state) => (state.clients))
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getClientId(id))
    },[dispatch, id])

    return (
      <>
      { detalleCliente?
          <Card style={{display: "flex", border: "rgb(14, 20, 26) solid 1px", margin: "20px" }}>
          <Card.Title style={{textAlign: "center"}}>{detalleCliente.firstName} {detalleCliente.lastName}</Card.Title>
          <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
          <img style={{width: "300px", height: "300px" , borderRadius: "50%"}} src={detalleCliente.profileImg} />
          </div>
            <Card.Body style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
              <ListGroup>
                  <ListGroupItem>Address: {detalleCliente.address}</ListGroupItem>
                  <ListGroupItem>PhoneNumber: {detalleCliente.phoneNumber}</ListGroupItem>
                  <ListGroupItem>E-mail: {detalleCliente.email}</ListGroupItem>
              </ListGroup>
              <div style={{display: "flex", justifyContent: "center", width: "100%", padding: "20px"}}>
              <Button style={{width: "20%"}} variant="primary">Back</Button>
              </div>
            </Card.Body>
          </Card>
          :<Alert variant="danger">
                    <Alert.Heading>Ha ocurrido un problema</Alert.Heading>
                        <p>
                            Redirigete hacia Home.
                        </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Link to="/">
                            <Button variant="outline-success">
                                HOME
                            </Button>
                        </Link>
                     </div>
                </Alert>
      }
      
    
    </>
    )
}