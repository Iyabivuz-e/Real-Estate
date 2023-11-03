import './styles/App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/home-components/navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/home-components/footer/Footer'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
