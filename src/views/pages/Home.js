import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchBar from "../components/SearchBar";
import { getAllProfessionals, getAllProfessions } from "../../state/ducks/professionals/actions";


import CardsList from "../components/CardsLists";

export default function Home() {
  const professiones = useSelector((state) => state.professions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfessions());
    dispatch(getAllProfessionals())
  }, [dispatch]);

  return <CardsList />;
}
