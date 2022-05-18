import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Header from './Pages/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAuth from './Pages/Login/RewuireAuth/RequireAuth';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/home" element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
