import "./App.css";
import {Home} from './pages/Home/Home.jsx'
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
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products'/>
      <Route path='/mockman' element={<MockAPI/>} />
    </Routes>
    </>
  );
}

export default App;
