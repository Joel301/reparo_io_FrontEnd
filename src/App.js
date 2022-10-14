import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import FormProfession from './views/components/FormProfession';

function App() {
  return (

    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={<FormProfession/>}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
