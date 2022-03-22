import "./App.css";
import {Home,ProductPage} from './pages/index'
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
      <Route path='/mockman' element={<MockAPI/>} />
    </Routes>
    </>
  );
}

export default App;
