import { Routes , Route } from "react-router-dom"
import Store from "./Pages/Store"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <>
      <div className="overflow-hidden" style={{paddingTop : '90px'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
