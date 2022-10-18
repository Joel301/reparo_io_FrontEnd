
import { Route, Routes } from "react-router-dom"


import Landing from "./views/pages/Landing"


function App() {
  return (
      <Routes>  
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/home" element={<Home/>} />
      </Routes>
  );
}

export default App;
