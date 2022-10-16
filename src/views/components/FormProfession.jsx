import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { postProfessional , getAllProfessionals} from "../../state/ducks/professionals/actions.js";



function FormProfession() {

  const dispatch = useDispatch()
  
  const profesiones = [{ id: 2, name: "Electricista" }, { name: "Plomero", id: 1 }]

  //referenia del input para el post
  const nameRef = useRef('')
  const lastNameRef = useRef('')
  const phoneNumberRef = useRef('')
  const addressRef = useRef('')
  const profileImgRef = useRef('')
  const emailRef = useRef('')
  const professionsRef = useRef([]) 
  const passwordRef = useRef('')
  const confirmPasswordRef = useRef('')
  const aboutMeRef = useRef('')

  console.log(professionsRef);

  //console.log(passwordRef);
  //Estado de mostrar contraseña
  const [showPwd, setShowPwd] = useState(false)
  const [confirmShowPwd, setConfirmShowPwd] = useState(false)

  // estados errores de Validación: 
  const [error, setErrors] = useState({})

  // cambio de estado placeholder contraseña
  function handleShowPass(e) {
    e.preventDefault()
    setShowPwd(!showPwd)
  }
  function handleConfirmShowPass(e) {
    e.preventDefault()
    setConfirmShowPwd(!confirmShowPwd)
  }

  function handleSelectProfession(e) {
    e.preventDefault()
    if(professionsRef.current.includes(e.target.value)){
      professionsRef.current = professionsRef.current.filter(el => el !== e.target.value)
    }else professionsRef.current.push(e.target.value)
      
  }

  function hedleOnSubmit(e) {
    e.preventDefault(e)
    console.log(
      {
        firstName: nameRef.current.value,
        lastName: lastNameRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        address: addressRef.current.value,
        profileImg: profileImgRef.current.value,
        email: emailRef.current.value,
        professions: professionsRef.current,
        password: passwordRef.current.value,
        aboutMe: aboutMeRef.current.value
      }
    );
  }


  // se renderiza componente
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
        <Form.Control ref={nameRef} type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control ref={lastNameRef} type="text" placeholder="Apellido" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control ref={addressRef} type="text" placeholder="Dirección" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control ref={phoneNumberRef} type="text" placeholder="Telefono" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control ref={profileImgRef} type="text" placeholder="imagen" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={emailRef} type="email" placeholder="nombre@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Sobre mi</Form.Label>
        <Form.Control ref={aboutMeRef} type="text" placeholder="Sobre mi" as="textarea"  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check>Profesiones:
          {
            profesiones.map(profession =>
              <div key={profession.id}>
                <Form.Check.Input type={'checkbox'} value={profession.name} isValid onChange={(e) => handleSelectProfession(e)} />
                <Form.Check.Label>{profession.name}</Form.Check.Label>
              </div>
            )
          }
        </Form.Check>
      </Form.Group>
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
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control
          ref={confirmPasswordRef}
          type={confirmShowPwd ? "text" : "password"}
          placeholder="Confirmar contraseña" />
        <i onClick={(e) => handleConfirmShowPass(e)}>
          {confirmShowPwd ?
            <i className="material-icons" >visibility</i> :
            <i className="material-icons" >visibility_off</i>
          }
        </i>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Acepto términos y condiciones" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrame
      </Button>

    </Form >
  );
}

export default FormProfession;
