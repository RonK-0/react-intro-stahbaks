import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/Home"
import Menu from "./components/pages/Menu/Menu"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<h2>About</h2>}/>
          <Route path="/services" element={<h2>Services</h2>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App