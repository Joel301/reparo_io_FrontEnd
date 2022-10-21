import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { validateFormClient } from "./validation";


export default function FormClient() {
  //referencia de información del input para el post:
  const nameRef = useRef('')
  const lastNameRef = useRef('')
  const phoneNumberRef = useRef('')
  const addressRef = useRef('')
  const profileImgRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const confirmPasswordRef = useRef('')



  //Estado de mostrar contraseña
  const [showPwd, setShowPwd] = useState(false)// pendiente usar useEffect para no renderizar todo el componente
  const [confirmShowPwd, setConfirmShowPwd] = useState(false)// pendiente usar useEffect para no renderizar todo el componente

  // cambio de estado placeholder contraseña
  function handleShowPass(e) {
    e.preventDefault()
    setShowPwd(!showPwd)
  }
  function handleConfirmShowPass(e) {
    e.preventDefault()
    setConfirmShowPwd(!confirmShowPwd)
  }

  // estados errores de Validación: 
  const [errors, setErrors] = useState({})

  function hedleOnSubmit(e) {
    e.preventDefault()

    const input = {
      firstName: nameRef.current.value,
      lastName: lastNameRef.current.value,
      password: passwordRef.current.value === confirmPasswordRef.current.value ? 
                passwordRef.current.value: "No coinciden",
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      profileImg: profileImgRef.current.value,
      address: addressRef.current.value
    };

    const currentError = validateFormClient(input)
    setErrors(currentError)

    console.log(input)
  }

  return (
    <Form
      onSubmit={(e) => (hedleOnSubmit(e))}
      style={{
        display: 'flex',
        gap: '3px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Form.Group className="mb-3 " >
        <Form.Control
          ref={nameRef}
          type="text"
          placeholder="Nombre" />
      </Form.Group>
      {errors.firstName && <p className="errors">{errors.firstName}</p>}
      <Form.Group className="mb-3" >
        <Form.Control
          ref={lastNameRef}
          type="text"
          placeholder="Apellido" />
      </Form.Group>
      {errors.lastName && <span className="errors"> {errors.lastName}</span>}
      <Form.Group className="mb-3" >
        <Form.Control
          ref={addressRef}
          type="text"
          placeholder="Dirección" />
      </Form.Group>
      {errors.address && <span className="errors">{errors.address}</span>}
      <Form.Group className="mb-3" >
        <Form.Control
          ref={phoneNumberRef}
          type="text"
          placeholder="Telefono" />
      </Form.Group>
      {errors.phoneNumber && <span className="errors">{errors.phoneNumber}</span>}
      <Form.Group className="mb-3" >
        <Form.Control
          ref={profileImgRef}
          type="text"
          placeholder="imagen" />
      </Form.Group>
      {errors.profileImg && <span className="errors">{errors.profileImg}</span>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          ref={emailRef}
          type="email"
          placeholder="nombre@example.com" />
      </Form.Group>
      {errors.email && <span className="errors">{errors.email}</span>}
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control
          ref={passwordRef}
          type={showPwd ? "text" : "password"}
          placeholder="Crear Contraseña" />
        <i onClick={(e) => handleShowPass(e)}>
          {showPwd ?
            <i className="material-icons" >visibility</i> :
            <i className="material-icons" >visibility_off</i>
          }
        </i>
      </Form.Group>
      {errors.password && <span className="errors">{errors.password}</span>}
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control
          ref={confirmPasswordRef}
          type={confirmShowPwd ? "text" : "password"}
          placeholder="Confirmar contraseña" />
        <div onClick={(e) => handleConfirmShowPass(e)}>
          {confirmShowPwd ?
            <i className="material-icons" >visibility</i> :
            <i className="material-icons" >visibility_off</i>
          }
        </div>
      </Form.Group>
      {errors.password && <span className="errors">{errors.password}</span>}

      <Button variant="primary" type="submit">
        Registrame
      </Button>

    </Form >
  );
} 