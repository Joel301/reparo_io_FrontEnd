import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import { validateFormClient } from "./validation";
import { postClient } from "../../../state/ducks/clients/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "../../../state/ducks/users/actions";
import { Navigate } from "react-router-dom";
function FormEditClient() {
  //referencia de información del input para el post:
  const userClient = useSelector((state) => state.user);
  const [actual, setActual] = useState({
    nameRef: userClient.firstName,
    lastNameRef: userClient.lastName,
    phoneNumberRef: userClient.phoneNumber,
    addressRef: userClient.address,
    profileImgRef: userClient.profileImg,
    emailRef: userClient.email,
  });
  const dispatch = useDispatch()
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const phoneNumberRef = useRef("");
  const addressRef = useRef("");
  const profileImgRef = useRef("");
  const emailRef = useRef("");
  

  //Aca viene el cloudinary:

  // const [image, setImage] = useState("");
  // const [loading, setLoading] = useState(false);

  // const upLoadImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "reparoio_images");
  //   setLoading(true);
  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/de2sdmotl/image/upload",
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   );
  //   const file = await res.json();
  //   console.log(file.secure_url);
  //   console.log(res);
  //   setImage(file.secure_url);
  //   setLoading(false);
  // };

  //Estado de mostrar contraseña
  const [showPwd, setShowPwd] = useState(false); // pendiente usar useEffect para no renderizar todo el componente
  const [confirmShowPwd, setConfirmShowPwd] = useState(false); // pendiente usar useEffect para no renderizar todo el componente

  // cambio de estado placeholder contraseña
  function handleShowPass(e) {
    e.preventDefault();
    setShowPwd(!showPwd);
  }
  function handleConfirmShowPass(e) {
    e.preventDefault();
    setConfirmShowPwd(!confirmShowPwd);
  }

  // estados errores de Validación:
  const [errors, setErrors] = useState({});

  async function hedleOnSubmit(e) {
    e.preventDefault();

    const input = {
      firstName: nameRef.current.value===''?actual.nameRef:nameRef.current.value,
      lastName: lastNameRef.current.value===""?actual.lastNameRef:lastNameRef.current.value,
      email: emailRef.current.value ===""?actual.emailRef:emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value===""?actual.phoneNumberRef:phoneNumberRef.current.value,
      address: addressRef.current.value===''?actual.addressRef:addressRef.current.value,
    };
    console.log(input)
     const currentError = validateFormClient(input);
     setErrors(currentError);
     await axios.put(
       `https://reparoiobackend-main.up.railway.app/api/clients/${userClient.id}`,
       input
     ).then((res)=>console.log(res));
  }
  let rerenderUser
  useEffect(()=>{
    rerenderUser = {
      email:emailRef.current.value ===""?actual.emailRef:emailRef.current.value,
      password:userClient.password,
      google:false
    }
    return ()=>{
      
      dispatch(loginUser(rerenderUser))
      
    }
  },[])

  return (
    <Form
      onSubmit={(e) => hedleOnSubmit(e)}
      style={{
        display: "flex",
        gap: "3px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form.Group className="mb-3 ">
        <Form.Control placeholder={actual.nameRef} ref={nameRef} type="text" />
      </Form.Group>
      {errors.firstName && <p className="errors">{errors.firstName}</p>}
      <Form.Group className="mb-3">
        <Form.Control placeholder={actual.lastNameRef} ref={lastNameRef} type="text" />
      </Form.Group>
      {errors.lastName && <span className="errors"> {errors.lastName}</span>}
      <Form.Group className="mb-3">
        <Form.Control ref={addressRef} type="text" placeholder={actual.addressRef} />
      </Form.Group>
      {errors.address && <span className="errors">{errors.address}</span>}
      <Form.Group className="mb-3">
        <Form.Control ref={phoneNumberRef} type="text" placeholder={actual.addressRef} />
      </Form.Group>
      {errors.phoneNumber && (
        <span className="errors">{errors.phoneNumber}</span>
      )}
      {/* <Form.Group className="mb-3">
        <Form.Control
          ref={profileImgRef}
          type="text"
          placeholder={actual.profileImgRef}
          onChange={upLoadImage}
        />
      </Form.Group> */}
      {errors.profileImg && <span className="errors">{errors.profileImg}</span>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          ref={emailRef}
          type="email"
          placeholder={actual.emailRef}
        />
      </Form.Group>
      {errors.email && <span className="errors">{errors.email}</span>}
      

      <Button variant="primary" type="submit">
        Guardar Cambios
      </Button>
    </Form>
  );
}

export default FormEditClient;
