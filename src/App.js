
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Blog from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Singup from './Components/Singup/Singup';
import RequireAuth from './Components/RequireAuth/RequireAuth';
// import ManageInventory from './Components/ManageInventory/ManageInventory';
import Inventory from './Components/Inventory/Inventory';
import Contact from './Components/Contact/Contact';
import UpdateProducts from './Components/UpdateProducts/UpdateProducts';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddItems from './Components/AddItems/AddItems';
import MyItems from './Components/MyItems/MyItems';
import ManageItem from './ManageItem/ManageItem';




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

        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>

        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='update/:id' element={
          <RequireAuth>
            <UpdateProducts></UpdateProducts>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        } ></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/myitem' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
