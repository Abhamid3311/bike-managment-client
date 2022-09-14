
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/SharedPage/Header/Header';
import Footer from './components/SharedPage/Footer/Footer';
import NotFound from './components/SharedPage/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Register/Login/Login';
import SignUp from './components/Register/SignUp/SignUp';
import AllInventory from './components/Pages/AllInventory/AllInventory';

import Blogs from './components/Blogs/Blogs';
import BikeDetails from './components/BikeDetails/BikeDetails';
import AddInventoryItem from './components/Pages/AddInventoryItem/AddInventoryItem';
import RequireAuth from './components/SharedPage/RequireAuth/RequireAuth';
import MyItems from './components/MyItems/MyItems';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route> */}
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <BikeDetails></BikeDetails>
          </RequireAuth>
        }></Route>

        <Route path='/allinventory' element={
          <RequireAuth>
            <AllInventory></AllInventory>
          </RequireAuth>
        }></Route>

        <Route path='/myitem' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/additem' element={
          <RequireAuth>
            <AddInventoryItem></AddInventoryItem>
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
