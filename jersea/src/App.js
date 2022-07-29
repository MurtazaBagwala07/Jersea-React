import "./App.css";
import {Home,ProductPage, SignIn,SignUp,Wishlist,Cart,NotFound,Success} from './pages/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    <ToastContainer 
      position='bottom-right'
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      theme='colored'
      rtl={false}
      pauseOnFocusLoss
      draggable
    />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/mockman' element={<MockAPI/>} />
      <Route path='/wishlist' element={auth.isAuth?<Wishlist/>:<SignIn/>}/>
      <Route path='/cart' element={auth.isAuth?<Cart/>:<SignIn/>}/>
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
    </Routes>
    </>
  );
}

export default App;
