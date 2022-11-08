import React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  Button,
  ListGroup,
  Alert,
  Badge,
  Tooltip,
  OverlayTrigger,
  Modal,
  Form,
} from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getClientId } from "../../state/ducks/clients/actions";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";

export default function DetailClient() {
  const { id } = useParams();
  const { user, usersimple } = useAuth();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { client, professional, admin } = usersimple || {};
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const professionals = useSelector(
    (state) => state.professionals.allProfessionals
  );
  // const shoppingHistory = fakeClient.orders
  //   .map((order) => order.orderDetails)
  //   .flat();
  /*  Body = {
      clientId,
      professionalId,
      comment,
      rating
      } */
  const handleSubmit = async (e, professionalId) => {
    e.preventDefault();
    console.log("hola");
    let review = {
      clientId: client.id,
      professionalId,
      comment,
      rating,
    };
    console.log(review);
    await axios
      .post("https://reparoiobackend-main.up.railway.app/api/reviews", review)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setComment("");
    setRating(0);
  };

  useEffect(() => {
    console.log(usersimple);
    // dispatch(getClientId(id));
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
            fontFamily: "DMSans",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifySelf: "center",
              height: "15rem",
              width: "15rem",
              backgroundColor: "lightblue",
              borderRadius: "50%",
            }}
          >
            <div
              style={{
                gridArea: "  1 / 1 / 3 / 2",
                justifySelf: "center",
                backgroundImage: `url(${
                  user?.photoURL || usersimple?.client?.profileImg || ""
                })`,
                backgroundSize: "cover",
                alignSelf: "center",
                borderRadius: "50%",
                height: "8rem",
                width: "8rem",
              }}
            ></div>
          </div>

          <h2
            style={{
              textAlign: "center",
              gridArea: " 3 / 1 / 4 / 2",
              alignSelf: "end",
            }}
          >
            {usersimple?.client?.firstName} {usersimple?.client?.lastName}
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
              WebkitScrollbarTrack: {
                backgroundColor: "black",
              },
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
            {[].map((item) => {
              let { firstName, lastName, id } = professionals.find(
                (prof) => prof.id === item.professionalId
              );
              let date = new Date(item.createdAt);

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
                      <div style={{ display: "flex" }}>
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
                        </p>
                      </div>
                      <Button
                        style={{ justifyContent: "flex-end" }}
                        onClick={handleShow}
                      >
                        Deja una Reseña
                      </Button>
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
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form
                        onSubmit={(e) => handleSubmit(e, item.professionalId)}
                      >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Puntua a tu profesional!</Form.Label>
                          <StarRatings
                            rating={rating}
                            starRatedColor="blue"
                            changeRating={(rating) => setRating(rating)}
                            numberOfStars={5}
                            name="rating"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Comentario</Form.Label>
                          <Form.Control
                            type="text-area"
                            placeholder="Escribe algun comentario"
                            onChange={(e) => {
                              setComment(e.target.value);
                            }}
                          />
                        </Form.Group>

                        <Button
                          variant="primary"
                          type="submit"
                          onClick={handleClose}
                        >
                          Submit
                        </Button>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                </ListGroup.Item>
              );
            })}
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
