import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./components/SearchBar";
import {getAllProfessions} from '../../state/ducks/professionals/actions';

import CardsList from "./components/CardsLists";

export default function Home(){
    const professiones = useSelector(state => state.professions)
    console.log(professiones, "profesiones de home")
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProfessions())
        
    },[dispatch])
    
    return (
        <CardsList/>
    )
}
   
 
