
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import PageNotFound from './Components/PageNotFound';
import Store from './Components/Store';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element= {<LandingPage/>}/>
          <Route path='/store' element= {<Store/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
          <Route path = '/cart' element={<Cart/>}/>
          <Route path = '/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
