
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/StockWatches/StockWatches';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Singup from './Components/Singup/Singup';








function App() {
  return (
    <div className="App">

     
      <Header></Header>
      <Routes>
       
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>


      </Routes>
    </div>
  );
}

export default App;
