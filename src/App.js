import { Route, Routes} from "react-router-dom"

import Landing from "./views/pages/Landing"
import Home from "./views/pages/Home"
import Detail from "./views/components/Detail"
import HeaderNavBar from "./views/components/HeaderNavBar"
import DetailClient from "./views/components/DetailClient"

function App() {
  return (<div style={{height:'100vh'}}>
    <HeaderNavBar/>
    <Routes>
      
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/home/:prof" element={<Home />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/details/client/:id" element={<DetailClient />} />
    </Routes>
    </div>
  )
}

export default App
