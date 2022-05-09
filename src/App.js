
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Inventory from './Inventory';
import Home from './Components/Home/Home';
import Blog from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';




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
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
