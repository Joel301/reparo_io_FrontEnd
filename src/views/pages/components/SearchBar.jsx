import React from "react";
import{ Form, Button } from "react-bootstrap"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfesional } from "../../../state/ducks/professionals/actions";
import { useEffect } from "react";
import Paginado from "./Paginado";



export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    
    

    function handleInputChange(e){
        e.preventDefault(e);
        setName(e.target.value);
        
    }

    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getProfesional(name));

    }


    return(
        <Form style={{width: "30%", display: "flex" }} className="d-flex container-sm" size="sm">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e => handleInputChange(e)} />
            <Button type="submit" variant="outline-success" onClick={e => handleSubmit(e)}>Search</Button>
          </Form>
              
    )
}