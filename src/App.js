
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Singup from './Components/Singup/Singup';
import Services from './Components/Pages/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import ProtectedInventor from './Components/ProtectedInventor/ProtectedInventor';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import About from './Components/About/About';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import AddItems from './Components/AddItems/AddItems';



function App() {
  return (
    <div className="App">


      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/services' element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>

        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/protectedInventor' element={<ProtectedInventor></ProtectedInventor>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>


      </Routes>
    </div>
  );
}

export default App;
