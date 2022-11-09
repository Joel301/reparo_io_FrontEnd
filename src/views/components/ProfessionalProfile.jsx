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

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { filterByProfession } from "../../state/ducks/professionals/actions";
import { Rating } from "@mui/material";

export default function ProfessionalProfile({user}) {
  const navigate = useNavigate();
  
 
  const {
    id,
    firstName,
    lastName,
    profileImg,
    phoneNumber,
    address,
    email,
    reviews,
    orders
  } = user

  
  const dispatch = useDispatch();
  const professionals = useSelector(
    (state) => state.professionals.allProfessionals
  );
  
  let professions = professionals.find((prof)=>prof.id===id ).professions

  useEffect(() => {
    console.log(reviews)
  }, [dispatch, id]);

  return (
    <>
      {user ? (
          <Card
          style={{
            display: "grid",
            gridTemplateColumns: " 2fr repeat(4, 1fr)",
            gridTemplateRows: "repeat(8, 1fr)",
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
                backgroundImage: `url(${profileImg})`,
                backgroundSize: "cover",
                alignSelf: "center",
                borderRadius: "50%",
                height: "10rem",
                width: "10rem",
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
            {firstName} {lastName}
          </h2>
          <h5
            style={{
              gridArea: "4 / 1 / 5 / 2",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {address}{" "}
          </h5>
          <h5
            style={{
              gridArea: " 5 / 1 / 6 / 2",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {email}
          </h5>
          <h5
            style={{
              gridArea: "6 / 1 / 7 / 2",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {phoneNumber}
          </h5>
          <div
            style={{
              gridArea: "7 / 1 / 8 / 2",
              justifySelf: "center",
              alignSelf: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {professions?.map((profession) => {
              return (
                <Button
                  key={profession.id}
                  onClick={(e) => {
                    dispatch(filterByProfession([e.target.value]));
                    return navigate(`/home/${profession.name}`);
                  }}
                >
                  {profession.name}
                </Button>
              );
            })}
          </div>
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
            defaultActiveKey="#link1"
          >
            <ListGroup.Item key='soyunico'href="#link1" style={{ cursor: "default" }}>
              Reseñas
            </ListGroup.Item>
            {reviews.map((review) => {
              return (
                <ListGroup.Item
                key={review.id}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <cite>"{review.comment}"</cite>
                    <div style={{ display: "flex",gap:'1rem' }}>
                      <div
                        style={{
                          backgroundImage: `url(${review.client.profileImg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                        }}
                      />
                      <p
                        style={{
                          color: "black",
                          textDecoration: "underline",
                          textDecorationColor: "darkgrey",
                        }}
                      >
                        {" "}
                        {review.client.firstName}
                      </p>
                    </div>
                  </div>
                  <Badge bg="primary" pill>
                    <Rating value={review.rating} readOnly />
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
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
            defaultActiveKey="#link1"
          >
            <ListGroup.Item key='yotambiensoy uncio' href="#link1" style={{ cursor: "default" }}>
              Reseñas
            </ListGroup.Item>
            {/* {reviews?.map((review) => {
              return (
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <cite>"{review.comment}"</cite>
                    <div style={{ display: "flex",gap:'1rem' }}>
                      <div
                        style={{
                          backgroundImage: `url(${review.clientImg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                        }}
                      />
                      <p
                        style={{
                          color: "lightgrey",
                          textDecoration: "underline",
                          textDecorationColor: "lightgrey",
                        }}
                      >
                        {" "}
                        {review.clientName}
                      </p>
                    </div>
                  </div>
                  <Badge bg="primary" pill>
                    <Rating value={review.rating} readOnly />
                  </Badge>
                </ListGroup.Item>
              );
            })} */}
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