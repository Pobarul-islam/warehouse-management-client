
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inventory from './Inventory';
import Home from './Components/Home/Home';
import Blog from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import ProductInfo from './Components/ProductInfo/ProductInfo';
import NotFound from './Components/NotFound/NotFound';




function App() {
  return (
    <div className="App">

      <Navbar></Navbar>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='user/:userid' element={<p>hello world</p>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
