
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Blog from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import ProductInfo from './Components/ProductInfo/ProductInfo';
import Singup from './Components/Singup/Singup';
import RequireAuth from './Components/RequireAuth/RequireAuth';
// import ManageInventory from './Components/ManageInventory/ManageInventory';
import Inventory from './Components/Inventory/Inventory';
import Contact from './Components/Contact/Contact';
import UpdateProducts from './Components/UpdateProducts/UpdateProducts';




function App() {
  return (
    <div className="App">

      <Navbar></Navbar>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='user/:userid' element={
          <RequireAuth>
            <ProductInfo></ProductInfo>
          </RequireAuth>
        }></Route>

        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='update/:id' element={<UpdateProducts></UpdateProducts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
