import './App.css';
import CheckoutPage from './Components/CheckoutPage';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SignIn from './Components/Signin';
import SignUp from "./Components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/carrito" element={<CheckoutPage />} />
          <Route path="/iniciarsesion" element={<SignIn />} />
          <Route path="/registro" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
