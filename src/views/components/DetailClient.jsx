import React from "react";
import { useEffect } from "react";
import {
  Card,
  Button,
  ListGroup,
  Alert,
  Badge,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getClientId } from "../../state/ducks/clients/actions";
import { Link } from "react-router-dom";
// {
//   "id": "bf2665ba-9c64-40b6-b948-49cb9690145e",
//   "firstName": "primernombre",
//   "lastName": "apeido",
//   "phoneNumber": "kulikitakati",
//   "address": "kulikitakati",
//   "email": "kulikittaka@sacatiki.com",
//   "password": "1234567",
//   "profileImg": "https://img.icons8.com/fluency-systems-regular/96/000000/guest-male.png",
//   "enabled": true,
//   "cart": {
//       "id": "b1add96b-9d5a-4048-a6b5-f7c776e99334"
//   },
//   "orders": [
//       {
//           "id": "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
//           "amount": 1500,
//           "createdAt": "2022-11-01T23:41:03.185Z",
//           "updatedAt": "2022-11-01T23:41:03.185Z",
//           "clientId": "bf2665ba-9c64-40b6-b948-49cb9690145e",
//           "orderDetails": [
//               {
//                   "id": "7a406dab-aa48-40b8-a758-969f84831cb5",
//                   "reservationAmount": 1500,
//                   "days": [
//                       "lunes"
//                   ],
//                   "createdAt": "2022-11-01T23:41:03.384Z",
//                   "updatedAt": "2022-11-01T23:41:03.384Z",
//                   "orderId": "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
//                   "professionalId": "ba289e85-f3e4-457a-a082-c1c4939968e1"
//               }
//           ]
//       }
//   ]
// }

export default function DetailClient() {
  const { id } = useParams();
  const navigate = useNavigate()
  const client = useSelector((state) => state.client);
  const dispatch = useDispatch();
  const professionals = useSelector(state=>state.professionals.allProfesionals)
  useEffect(() => {
    dispatch(getClientId(id));
  }, [dispatch, id]);

  return (
    <>
      {client ? (
        <Card
          style={{
            display: "grid",
            gridTemplateColumns: " 2fr repeat(4, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            gridColumGap: "1rem",
            width: "60rem",
            margin: "3rem auto",
            height: "40rem",
          }}
        >
          <div
            style={{
              gridArea: " 1 / 1 / 3 / 2",
              justifySelf: "center",
              backgroundImage: `url(${client.profileImg})`,
              backgroundSize: "cover",
              alignSelf: "center",
              borderRadius: "50%",
              height: "10rem",
              width: "10rem",
            }}
          ></div>

          <h2
            style={{
              textAlign: "center",
              gridArea: " 1 / 3 / 2 / 6",
              alignSelf: "end",
            }}
          >
            {client.firstName} {client.lastName}
          </h2>

          <h5
            style={{
              gridArea: "2 / 3 / 3 / 6",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {" "}
            {client.address}
          </h5>
          <h5
            style={{
              gridArea: " 3 / 3 / 4 / 6",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {" "}
            {client.phoneNumber}
          </h5>
          <h5
            style={{
              gridArea: "4 / 3 / 5 / 6",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {client.email}
          </h5>

          <Button
            onClick={()=>navigate("/home")}
            style={{
              height: "3rem",
              gridArea: " 5 / 3 / 6 / 6",
              alignSelf: "center",
              margin: "3rem",
            }}
            variant="primary"
          >
            Back
          </Button>
                                                {/* HISTORIAL DE COMPRAS */}
          <ListGroup
            as="ol"
            style={{ gridArea: "3 / 1 / 6 / 3", margin: "2rem" }}
          >
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Historial de Compras</div>
              </div>
            </ListGroup.Item>

           
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Reberto Del Valle</div>
                precio
              </div>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">Dias contratados</Tooltip>
                }
              >
                <Badge bg="primary" pill>
                  14 {/* aca iria el item de compra.horas */}
                </Badge>
              </OverlayTrigger>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ) : (
        <Alert variant="danger">
          <Alert.Heading>Ha ocurrido un problema</Alert.Heading>
          <p>Redirigete hacia Home.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link to="/">
              <Button variant="outline-success">HOME</Button>
            </Link>
          </div>
        </Alert>
      )}
    </>
  );
}
