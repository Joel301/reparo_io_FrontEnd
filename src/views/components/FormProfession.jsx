import React, { useRef } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function FormProfession() {
  
  const profesiones = [{ id: 2, name: "Electricista" }, { name: "Plomero", id: 1 }]

  //referenia del input para el post
  const name = useRef('')
  const lastName = useRef('')

  //Estado de mostrar contraseña
  const [showPwd, setShowPwd] = useState(false)
  const [confirmShowPwd, setConfirmShowPwd] = useState(false)

  // cambio de estado placeholder contraseña
  function handleShowPass(e) {
    e.preventDefault()
    setShowPwd(!showPwd)
  }
  function handleConfirmShowPass(e) {
    e.preventDefault()
    setConfirmShowPwd(!confirmShowPwd)
  }



  // se renderiza componente
  return (
    <Form style={{ display: 'flex', gap: '3px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Form.Group className="mb-3 " >
        <Form.Control ref={name} type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control ref={lastName} type="text" placeholder="Apellido" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Dirección" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Telefono" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="nombre@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select  >
          <option>Selecciona Profesiones</option>
          {
            profesiones.map(profesion =>
              <option key={profesion.id} value={profesion.name}>{profesion.name}</option>
            )
          }
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type={showPwd ? "text" : "password"} placeholder="Crear Contraseña" />
        <i onClick={(e) => handleShowPass(e)}>
          {showPwd ?
            <i className="material-icons" >visibility</i> :
            <i className="material-icons" >visibility_off</i>
          }
        </i>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type={confirmShowPwd ? "text" : "password"} placeholder="Confirmar contraseña" />
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
