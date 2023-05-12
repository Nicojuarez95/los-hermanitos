import './App.css';
import CheckoutPage from './Components/CheckoutPage';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/carrito" element={<CheckoutPage />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
