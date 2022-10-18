import { Route, Routes } from "react-router-dom"

import Landing from "./views/pages/Landing"
import Home from "./views/pages/Home"
import Detail from "./views/components/Detail"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/detail/:id" element={<Detail />} />
    </Routes>
  )
}

export default App
