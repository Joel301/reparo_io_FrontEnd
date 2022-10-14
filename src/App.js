import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import FormProfession from './views/components/FormProfession';
import SearchBar from "./views/pages/components/SearchBar";

function App() {
  return (

    <div >
      <SearchBar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<FormProfession/>}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
