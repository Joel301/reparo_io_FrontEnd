//React
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

//Redux
import { getDetail, removeDetail } from "../../state/ducks/detail/actions";
import { filterByProfession } from "../../state/ducks/professionals/actions";
//Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import { Spinner } from "react-bootstrap";
import { Rating } from "@mui/material";


export default function Detail() {
  const { id } = useParams();

  const {
  
    firstName,
    lastName,
    profileImg,
    phoneNumber,
    address,
    email,
    professions,
    reviews,
  } = useSelector((state) => state.detail);
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();
  
  
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    dispatch(getDetail(id));
    setLoading(false)
   
   return ()=>{
    
      dispatch(removeDetail())
   }
  }, [id,]);

  return (
    <>
      {!professions ? (<div style ={{margin:'0 auto',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Spinner style={{width:'10rem',height:'10rem'}} animation="grow" variant="primary" />
        </div>
       
      ) : (
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
          <ListGroup.Item href="#link1" style={{ cursor: "default" }}>
            Reseñas
          </ListGroup.Item>
          {reviews?.map((review) => {
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
          })}
        </ListGroup>
        
      </Card>
      )}
      <div style={{display: "flex",  justifyContent: "center"}}>
      <Button onClick={(e) => navigate("/home")}>
          Volver a Inicio
        </Button>
        </div>
    </>
  );
}
