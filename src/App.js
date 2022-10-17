
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import SearchBar from "./views/pages/components/SearchBar";
import CardsList from "./views/pages/components/CardsLists";
import HeaderNavBar from "./views/pages/components/HeaderNavBar";
import Home from "./views/pages/Home";


import { Route, Routes } from "react-router-dom" 

import Landing from "./views/pages/Landing"


function App() {
  return (

    <>
      <Routes>
          
          <Route path="/" element={<Landing />}/>

      </Routes>
    </>

  );
}

export default App;
