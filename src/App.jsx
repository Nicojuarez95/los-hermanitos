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

function App() {
  const [{user}, dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if (authUser){
        dispatch({
          type:actionTypes.SET_USER,
          user: authUser
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
