import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AllInventory from './components/AllInventory/AllInventory';
import Blogs from './components/Blogs/Blogs';
import BikeDetails from './components/BikeDetails/BikeDetails';
import AddInventoryItem from './components/AddInventoryItem/AddInventoryItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route> */}
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<BikeDetails></BikeDetails>}></Route>
        <Route path='/allinventory' element={<AllInventory></AllInventory>}></Route>

        <Route path='/additem' element={<AddInventoryItem></AddInventoryItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
