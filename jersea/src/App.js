import "./App.css";
import {Home,ProductPage, SignIn,SignUp,Wishlist,Cart,NotFound} from './pages/index'
import {useAuth} from './hooks'
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

  const {auth} = useAuth()

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/mockman' element={<MockAPI/>} />
      <Route path='/wishlist' element={auth.isAuth?<Wishlist/>:<SignIn/>}/>
      <Route path='/cart' element={auth.isAuth?<Cart/>:<SignIn/>}/>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
