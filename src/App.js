
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home/Home';
import Checkout from './Components/Pages/Checkout/Checkout'
import Blogs from './Components/Pages/Blogs/Blogs';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';



function App() {
  return (
    <div className="App">

     
      <Header></Header>
      <Routes>
       
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
    </div>
  );
}

export default App;
