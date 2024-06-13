import './App.css';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';
function App() {
  return (
    <>
    <CartProvider>

    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/createuser' element={<Signup/>}/>
        <Route exact path='/myOrder' element={<MyOrder/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  );
}

export default App;
