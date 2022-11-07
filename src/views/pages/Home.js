import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllProfessions } from "../../state/ducks/professionals/actions";


import CardsList from "../components/CardsLists";

export default function Home() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfessions());
   
  }, [dispatch]);

  return <CardsList />;
}
