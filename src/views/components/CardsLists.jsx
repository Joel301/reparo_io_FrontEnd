import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Alert,
  Badge,
  Button,
  Modal,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  orderByName,
  getOrderReputation,
  filterByProfession,
  filterByReputation,
  getAllProfessionals,
} from "../../state/ducks/professionals/actions";

//Componentes
import CartOffCanvas from "./CartOffCanvas";
import CardFormat from "./CardFormat";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import { useParams, useNavigate } from "react-router-dom";

function CardsList() {
  const { prof } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profesionales = useSelector(
    (state) => state.professionals.professionalsFiltered
  );

  const professions = useSelector((state) => state.professionals.professions);

  const [orden, setOrden] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [filterByProf, setFilterByProf] = useState([]);

  const [estado, setEstado] = useState(false);

  const [repeatProfAlert, setReapeatProfAlert] = useState(false);

  const setRepeatedAlert = (state) => setReapeatProfAlert(state);
  const estadoBoolean = (state) => setEstado(state);

  const reputations = [
    { id: "1", name: "★" },
    { id: "2", name: "★★" },
    { id: "3", name: "★★★" },
    { id: "4", name: "★★★★" },
    { id: "5", name: "★★★★★" },
  ];

  ///Paginacion
  const professionalsPerPage = 8;

  const indexOfLastProfessional = currentPage * professionalsPerPage;

  const indexOfFirstProfessional =
    indexOfLastProfessional - professionalsPerPage;

  let currentProfessionals = profesionales.slice(
    indexOfFirstProfessional,
    indexOfLastProfessional
  );

  const paginado = (pageNum) => {
    setCurrentPage(pageNum);
  };
  /// Si no hay profesionales no renderiza la lista
  function shouldRender() {
    if (
      currentProfessionals.length === 0 ||
      profesionales[0] === "No professional found"
    ) {
      return false;
    } else {
      return true;
    }
  }
  ///  Necesitaba saber el primer render para poder filtrar apartir de los botones y
  ///  que no se me quede el filtrado clavado con la prof que viene de params
  function useDetectFirstRender() {
    const firstRender = useRef(true);

    useEffect(() => {
      firstRender.current = false;
    }, []);

    return firstRender.current;
  }
  const firstRender = useDetectFirstRender();
  //// Filters
  const professionFilterHandleOnChange = (e) => {
    setCurrentPage(1);
    navigate("/home");
    if (e.target.innerText === "All") {
      return setFilterByProf([]);
    }
    if (!filterByProf.includes(e.target.innerText)) {
      setFilterByProf([...filterByProf, e.target.innerText]);
    }
  };

  const reputationFilterHandleOnChange = (repId) => {
    setCurrentPage(1);

    dispatch(filterByReputation(repId));
  };

  const deleteFilter = (prof) => {
    let arr = filterByProf.filter((e) => e !== prof);
    setFilterByProf(arr);
  };

  /// Orders
  function handleOrderByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.innerText));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.innerText}`);
  }

  function handleOrderReputation(e) {
    e.preventDefault();
    dispatch(getOrderReputation(e.target.innerText));
    setOrden(`Ordenado ${e.target.innerText}`);
  }

  useEffect(() => {
    if (firstRender && prof) {
      setFilterByProf([prof]);
    }

    dispatch(filterByProfession(filterByProf));

    console.log(filterByProf);
  }, [filterByProf]);

  return (
    <Container
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        height: "max-content",
        alignItems: "center",
      }}
    >
      <Container
        expand="md"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* Dropdown Reputacion */}
        <Dropdown style={{ display: "flex", height: "2.5rem" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic2">
            Reputacion
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={(e) => reputationFilterHandleOnChange("Todas")}
            >
              Todas
            </Dropdown.Item>
            {reputations.map((rep) => {
              return (
                <Dropdown.Item
                  onClick={(e) => reputationFilterHandleOnChange(rep.id)}
                >
                  {rep.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown Profesion */}
        <Dropdown style={{ height: "2.5rem" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Profesion
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => professionFilterHandleOnChange(e)}>
              All
            </Dropdown.Item>
            {professions.map((prof) => {
              return (
                <Dropdown.Item
                  key={prof.id}
                  onClick={(e) => professionFilterHandleOnChange(e)}
                >
                  {prof.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={{ height: "2.5rem" }}>
          <Dropdown.Toggle>Orden por Nombre</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => handleOrderByName(e)}>
              asc
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleOrderByName(e)}>
              desc
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{ height: "2.5rem" }}>
          <Dropdown.Toggle>Orden por Reviews</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => handleOrderReputation(e)}>
              asc
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleOrderReputation(e)}>
              desc
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <SearchBar />
      </Container>
      {filterByProf.length > 0 ? (
        <div
          style={{
            display: "flex",
            width: "80%",
            height: "2rem",
            backgroundColor: "lightgray",
            borderRadius: "0.5rem",
            marginTop: "3px",
            gap: "2px",
            alignItems: "center",
            padding: "2px",
          }}
        >
          {filterByProf?.map((e) => {
            return (
              <Badge
                onClick={() => deleteFilter(e)}
                style={{ height: "fit-content", cursor: "pointer" }}
              >
                {e}
              </Badge>
            );
          })}
        </div>
      ) : null}

      {shouldRender() ? (
        <Row
          style={{ margin: "5%", marginTop: "0.5%" }}
          xs={1}
          md={3}
          lg={4}
          className="g-4"
        >
          {currentProfessionals?.map((e) => {
            return (
              <Col
                key={e.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "18rem",
                }}
              >
                <CardFormat
                  estado={estado}
                  estadoBoolean={estadoBoolean}
                  setRepeatedAlert={setRepeatedAlert}
                  repeatedAlert={repeatProfAlert}
                  worker={e}
                  key={e.id}
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        <Alert
          style={{ margin: "5%", marginTop: "5%", textAlign: "center" }}
          variant="danger"
        >
          <Alert.Heading>No se ha encontrado ningun Profesional</Alert.Heading>
          <p style={{ paddingBottom: "9rem" }}>
            Puede ser que debido a tus opciones de filtrado y nuestra actual
            cantidad de profesionales no concuerden con dicha busqueda.
          </p>
          <hr />
          <p className="mb-0">Prueba con otras opciones ;D</p>
        </Alert>
      )}

      {profesionales.length > 8 ? (
        <Paginado
          professionalsPerPage={professionalsPerPage}
          profesionales={profesionales.length}
          paginado={paginado}
          currentPage={currentPage}
          style={{ flex: "flex-end" }}
        />
      ) : null}
      <CartOffCanvas estado={estado} estadoBoolean={estadoBoolean} />
      {/* {  Mensaje de Error para profesional repetido   } */}
      <Modal
        style={{ color: "white" }}
        show={repeatProfAlert}
        onHide={() => setReapeatProfAlert(false)}
      >
        <Modal.Header style={{ backgroundColor: " #CC6666" }} closeButton>
          <Modal.Title>No se puede realizar esta accion!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: " #CC6666" }}>
          El profesional ya fue agregado a tu carrito
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: " #CC6666" }} />
      </Modal>
    </Container>
  );
}

export default CardsList;
