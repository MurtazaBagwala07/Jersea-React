import "./App.css";
import {Home,ProductPage, SignIn,SignUp,Wishlist} from './pages/index'
import { Header } from "./components/index";
import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js'


function MockAPI() {
  return (
    <div className='MockAPI'>
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/mockman' element={<MockAPI/>} />
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
    </>
  );
}

export default App;
