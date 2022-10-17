import React from "react";
import{ Form, Button } from "react-bootstrap"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfesional } from "../../state/ducks/professionals/actions";



export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    

    function handleInputChange(e){
        e.preventDefault(e);
        setName(e.target.value);
    }

    //asdasdasdasdasadsd
    async function handleSubmit(e){
        e.preventDefault();
        dispatch(getProfesional(name));

    }


    return(
        <>
        <style type= "text/css">{`
            .form-sm{
                width: 40px

            }
            `}</style>
        <Form className="d-flex container-sm" size="sm">
            
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
              onChange={e => handleInputChange(e)} />
            <Button type="submit" variant="outline-success" onClick={e => handleSubmit(e)}>Buscar</Button>
          </Form>
              </>
    )
}