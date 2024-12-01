import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import './App.css';
import Registre from './Auth/Register';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './Common/Navbar';
import Profile from './Auth/Profile';
import Footer from './Common/Footer';
import About from './pages/About';
import Card from './pages/Card';
import Contact from './pages/Contact';
import Map from './pages/Map';
import MapView from './pages/MapView';
import HomeList from './pages/HomeList';
import HomeDetail from './pages/HomeDetail';
import ForestPage from './pages/ForestPage';
import DesertPage from './pages/DesertPage';
import SeaPage from './pages/SeaPage';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element= { <Login/> }/>
      <Route path='/register' element= { <Registre/> }/>
      <Route path='/navbar' element={<Navbare/>}/>
      <Route path='/profile'element={<Profile/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/mapview' element={<MapView/>}/>
      <Route path='/listhome' element={<HomeList/>}/>
      <Route path='/listhome/:id' element={<HomeDetail/>}/>
      <Route path='/forest' element={<ForestPage/>}/>
      <Route path='/desert' element={<DesertPage/>}/>
      <Route path='/sea' element={<SeaPage/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
