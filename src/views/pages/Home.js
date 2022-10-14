import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";

export default function Home(){
    const dispatch = useDispatch()
    const getProfessional = useSelector((state) => (state.professionals))
    useEffect(() =>{
        dispatch(getProfessional())
    }, [dispatch])

    return (
        <div>
         <SearchBar/>
         
         </div>
        )
}

   
 
