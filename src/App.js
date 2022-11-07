
//React Routes
import { Route, Routes } from "react-router-dom"

//Pages
import Landing from "./views/pages/Landing"
import Home from "./views/pages/Home"
import Cart from "./views/pages/Cart"

//Components
import Detail from "./views/components/Detail"
import HeaderNavBar from "./views/components/HeaderNavBar"
import DetailClient from "./views/components/DetailClient"
import LogIn from "./views/components/LogIn"
import Admin from "./views/components/Admin/Admin"
//un segundo 
function App() {
  return (
    <div style={{ height: '100vh' }}>

      <HeaderNavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/:prof" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/details/client/:id" element={<DetailClient />} />
        <Route exact path="/details/me" element={<DetailClient />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
