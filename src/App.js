import { Route, Routes } from "react-router-dom";

import Landing from "./views/pages/Landing";
import Home from "./views/pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
