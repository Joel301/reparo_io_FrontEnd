import React from "react";
import { useEffect,useState } from "react";
import {
  Card,
  Button,
  ListGroup,
  Alert,
  Badge,
  Tooltip,
  OverlayTrigger,
  Modal,
  Form
} from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getClientId } from "../../state/ducks/clients/actions";
import { Link } from "react-router-dom";

export let fakeClient = {
  id: "bf2665ba-9c64-40b6-b948-49cb9690145e",
  firstName: "primernombre",
  lastName: "apeido",
  phoneNumber: "kulikitakati",
  address: "kulikitakati",
  email: "kulikittaka@sacatiki.com",
  password: "1234567",
  profileImg:
    "https://img.icons8.com/fluency-systems-regular/96/000000/guest-male.png",
  enabled: true,
  cart: {
    id: "b1add96b-9d5a-4048-a6b5-f7c776e99334",
  },
  orders: [
    {
      id: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
      amount: 1500,
      createdAt: "2022-11-01T23:41:03.185Z",
      updatedAt: "2022-11-01T23:41:03.185Z",
      clientId: "bf2665ba-9c64-40b6-b948-49cb9690145e",
      orderDetails: [
        {
          id: "7a406dab-aa48-40b8-a758-969f84831cb5",
          reservationAmount: 1500,
          days: ["lunes"],
          createdAt: "2022-11-01T23:41:03.384Z",
          updatedAt: "2022-11-01T23:41:03.384Z",
          orderId: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
          professionalId: "e6f76316-87ae-4a47-b103-f8fa8d17d945",
        },
      ],
    },
    {
      id: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
      amount: 1500,
      createdAt: "2022-11-01T23:41:03.185Z",
      updatedAt: "2022-11-01T23:41:03.185Z",
      clientId: "bf2665ba-9c64-40b6-b948-49cb9690145e",
      orderDetails: [
        {
          id: "7a406dab-aa48-40b8-a758-969f84831cb5",
          reservationAmount: 1500,
          days: ["lunes"],
          createdAt: "2022-11-01T23:41:03.384Z",
          updatedAt: "2022-11-01T23:41:03.384Z",
          orderId: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
          professionalId: "2584a487-ca9a-48e6-a527-3dd49e91db93",
        },
      ],
    },
    {
      id: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
      amount: 1500,
      createdAt: "2022-11-01T23:41:03.185Z",
      updatedAt: "2022-11-01T23:41:03.185Z",
      clientId: "bf2665ba-9c64-40b6-b948-49cb9690145e",
      orderDetails: [
        {
          id: "7a406dab-aa48-40b8-a758-969f84831cb5",
          reservationAmount: 1500,
          days: ["lunes"],
          createdAt: "2022-11-01T23:41:03.384Z",
          updatedAt: "2022-11-01T23:41:03.384Z",
          orderId: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
          professionalId: "2584a487-ca9a-48e6-a527-3dd49e91db93",
        },
      ],
    },
    {
      id: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
      amount: 1500,
      createdAt: "2022-11-01T23:41:03.185Z",
      updatedAt: "2022-11-01T23:41:03.185Z",
      clientId: "bf2665ba-9c64-40b6-b948-49cb9690145e",
      orderDetails: [
        {
          id: "7a406dab-aa48-40b8-a758-969f84831cb5",
          reservationAmount: 1500,
          days: ["lunes"],
          createdAt: "2022-11-01T23:41:03.384Z",
          updatedAt: "2022-11-01T23:41:03.384Z",
          orderId: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
          professionalId: "2584a487-ca9a-48e6-a527-3dd49e91db93",
        },
      ],
    },
    {
      id: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
      amount: 1500,
      createdAt: "2022-11-01T23:41:03.185Z",
      updatedAt: "2022-11-01T23:41:03.185Z",
      clientId: "bf2665ba-9c64-40b6-b948-49cb9690145e",
      orderDetails: [
        {
          id: "7a406dab-aa48-40b8-a758-969f84831cb5",
          reservationAmount: 1500,
          days: ["lunes"],
          createdAt: "2022-11-01T23:41:03.384Z",
          updatedAt: "2022-11-01T23:41:03.384Z",
          orderId: "e7b7742c-5caa-4aa8-86e3-3fd3936d887b",
          professionalId: "2584a487-ca9a-48e6-a527-3dd49e91db93",
        },
      ],
    },
  ],
};

export default function DetailClient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating,setRating] = useState(0)
  const client = fakeClient; /* useSelector((state) => state.client); */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const professionals = useSelector(
    (state) => state.professionals.allProfessionals
  );
  const shoppingHistory = fakeClient.orders
    .map((order) => order.orderDetails)
    .flat();
  console.log(shoppingHistory);
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
            gridTemplateRows: "repeat(8, 1fr)",
            /* gridColumGap: "10rem", */
            width: "80rem",
            margin: "3rem auto",
            padding: "1rem",
            height: "40rem",
          }}
        >
          <div
            style={{
              gridArea: "  1 / 1 / 3 / 2",
              justifySelf: "center",
              backgroundImage: `url(${client.profileImg})`,
              backgroundSize: "cover",
              alignSelf: "center",
              borderRadius: "50%",
              height: "8rem",
              width: "8rem",
            }}
          ></div>

          <h2
            style={{
              textAlign: "center",
              gridArea: " 3 / 1 / 4 / 2",
              alignSelf: "end",
            }}
          >
            {client.firstName} {client.lastName}
          </h2>

          <h5
            style={{
              gridArea: "4 / 1 / 5 / 2",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {" "}
            {client.address}
          </h5>
          <h5
            style={{
              gridArea: " 5 / 1 / 6 / 2",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {" "}
            {client.phoneNumber}
          </h5>
          <h5
            style={{
              gridArea: "6 / 1 / 7 / 2",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {client.email}
          </h5>

          {/* HISTORIAL DE COMPRAS */}
          <ListGroup
            as="ol"
            style={{
              gridArea: "1 / 3 / 9 / 6",
              margin: "2rem",
              maxHeight: "50rem",
              marginBottom: "10px",
              overflowY: "scroll",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              bg="primary"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Historial de Compras</div>
              </div>
            </ListGroup.Item>
            {shoppingHistory.map((item) => {
              let { firstName, lastName } = professionals.find(
                (prof) => prof.id === item.professionalId
              );
              let date = new Date(item.createdAt);
              console.log(date);
              return (
                <ListGroup.Item
                  key={item.id}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div
                      className="fw-bold"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/detail/${item.professionalId}`)}
                    >{`${firstName} ${lastName}`}</div>
                    <p style={{ display: "flex", color: "gray" }}>
                      {" "}
                      Precio:
                      <p style={{ color: "black", marginLeft: "3px" }}>
                        {item.reservationAmount}
                      </p>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        width: "29rem",
                        justifyContent: "space-between",
                      }}
                    >
                      {" "}
                      <div style={{display: "flex"}}>
                      <p
                        style={{
                          
                          color: "gray",
                          
                        }}
                      >
                        {" "}
                        Fecha:
                        
                      </p>
                      <p style={{ color: "black", marginLeft: "3px" }}>
                          {date.toString().split("", 15)}
                        </p></div>
                      <Button style={{ justifyContent: "flex-end" }} onClick={handleShow}>Deja una Reseña</Button>
                    </div>
                  </div>

                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">
                        {item.days.join(" ,")}
                      </Tooltip>
                    }
                  >
                    <Badge bg="primary" pill>
                      {item.days.length}
                    </Badge>
                  </OverlayTrigger>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Puntua a tu profesional!</Form.Label>
        <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={(rating)=>setRating(rating)}
        numberOfStars={5}
        name='rating'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Comentario</Form.Label>
        <Form.Control type="text-area" placeholder="Escribe algun comentario" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
          </Modal>
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
