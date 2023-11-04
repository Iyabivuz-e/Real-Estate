import './styles/App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/home-components/navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/home-components/footer/Footer'
import Contact from './pages/Contact/Contact'
import Auth from './pages/Login/Auth'
import Explore from './pages/Explore/Explore'
import Totop from './Helpers/Totop'

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      <Footer/>
      <Totop/>
    </div>
    </BrowserRouter>
  );
}

export default App;
