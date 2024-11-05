import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Nav from "./components/Nav";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Investors from "./components/Investors";

function App() {

  return (
    <div className="bg-image">
      <Router>
      <Nav />
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route  path="/about" element={<About />}/>
          <Route  path="/products" element={<Products />}/>
          <Route path="/product/:productName" element={<ProductDetail />} />
          <Route path="/investors" element={<Investors />} />

        </Routes>
      </Router>
   
    </div>
  )
}

export default App
