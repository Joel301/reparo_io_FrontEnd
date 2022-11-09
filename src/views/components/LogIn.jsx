import React, { useState } from "react";
import { Form, Offcanvas, Button } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../state/ducks/users/actions";
import { Google } from "@mui/icons-material";
function LogIn({ show, onClose }) {
  const loggedUser = useSelector((state) => state.user);
  const [userToLog, setUserToLog] = useState({
    email: "",
    password: "",
    google: false,
  });
  const { login, loginWithGoogle, user ,logout} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser(userToLog));

      
    } catch (error) {
      //aqui debe de manejarse el error dependiendo lo que se tenga que hacer si no se puede logear

      console.log(error);
    }
  };
  const handleInputChange = (e) =>
    setUserToLog({ ...userToLog, [e.target.name]: e.target.value });

  const googlelog =  async() => {
    await logout()
  //  await loginWithGoogle().then(res=>{
  //   setUserToLog({ email: res.user.email, password: null, google: true })
  //   console.log('res De LoginCon gooogle',res)
  // }).then(()=>dispatch(loginUser(userToLog)))
    let userGoogle = await loginWithGoogle()
    setUserToLog({ email: userGoogle.user.email, password: null, google: true })
    dispatch(loginUser(userToLog))
    navigate("/");
    
    
  };
  return (
    <Offcanvas placement="end" show={show} onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Iniciaar sesion</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <Button onClick={googlelog}>
          <Google /> Continua con Google
        </Button>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label> Usuario(email/registrado): </Form.Label>
            <Form.Control
              name={`email`}
              type="email"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña: </Form.Label>
            <Form.Control
              name={`password`}
              type="password"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button type="submit" style={{ margin: "2rem 2rem", width: "80%" }}>
            Logear
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LogIn;
