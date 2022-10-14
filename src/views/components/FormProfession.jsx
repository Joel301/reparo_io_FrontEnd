import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function FormProfession() {

  const selectProf  = useRef([])

  const profesiones = [{id:2,name:"Electricista"},{name:"Plomero", id: 1}]

  function handleSelecProf(e){
    e.preventDefault()
    selectProf.push(e.target.value )
  }
  

  return (
    <Form style={{ width: "50%", }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Nombre" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Apellidos" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Correo" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select  onChange = { (e)=> handleSelecProf(e)}>
          <option>Selecciona Profesiones</option>
          {
            profesiones.map(profesion =>
              <option key={profesion.id} value={profesion.name}>{profesion.name}</option>
            )

          }
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form >
  );
}

export default FormProfession;
