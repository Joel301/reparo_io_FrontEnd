<<<<<<< HEAD
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import SearchBar from "./views/pages/components/SearchBar";
import CardsList from "./views/pages/components/CardsLists";
import HeaderNavBar from "./views/pages/components/HeaderNavBar";
import Home from "./views/pages/Home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
    {/* <HeaderNavBar/>
    <Routes>
      
      <Route exact path="/" element={<CardsList/>} />
    </Routes> */}
    </div>
  </BrowserRouter>
=======

import { Route, Routes } from "react-router-dom" 

import Landing from "./views/pages/Landing"


function App() {
  return (

    <>
      <Routes>
          
          <Route path="/" element={<Landing />}/>

      </Routes>
    </>
>>>>>>> c113411b9c69984c1c1c08b5e16f5cbb23fd1083
  );
}

export default App;
