import { useEffect } from 'react';
import './App.css';
import CheckoutPage from './Components/CheckoutPage';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SignIn from './Components/Signin';
import SignUp from "./Components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './stateProvider.js';
import { actionTypes } from './reducer.js';
import Checkout from './Components/CheckoutForm/Checkout';

function App() {
  const [{user}, dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        dispatch({
          type:actionTypes.SET_USER,
          user: authUser
        })
      } else {
          dispatch({
            type: actionTypes.SET_USER,
            user: null,
          })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/carrito" element={<CheckoutPage />} />
          <Route path="/iniciarsesion" element={<SignIn />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/pago" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
