import './Navbar.scss'
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.jpg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';

const Navbar = () => {

  const [ navShow, setNavShow ] = useState(false)

  const handleShow = () => {
    setNavShow(!navShow)
  }
  const handleRemove = () => {
    setNavShow(false)
  }

  return (
    <div className='navbar-container'>
      <div className="logo">
        <Link to='/'>
            <img src={logo} alt="logo" className='my-logo' width={50}/>
        </Link>
      </div>
      <div className="search">
        <SearchOutlinedIcon className='search-icon'/>
        <input 
            placeholder='Search a home'
            type="text" 
            name="" 
            className="search-input" 
            />
      </div>

      <div className={navShow ? "show-links" : "links"}>
        <button onClick ={handleRemove} className="close-btn">
        <i className="fa-solid fa-x close-icon"></i>
      </button>
        <ul>
            <li>
                <Link onClick={handleRemove} className="my-link" to="/" >Home</Link>
                <Link onClick={handleRemove} className="my-link" to="/explore" >Explore</Link>
                <Link onClick={handleRemove} className="my-link" to="/contact-us" >Contact</Link>
                <Link onClick={handleRemove} className="my-link" to="/login" >Login</Link>
            </li>
        </ul>
      </div>
      <button onClick={handleShow} className="humberger-menu">
        <i className="fa-solid fa-bars-staggered show-icon"></i>
      </button>
    </div>
  )
}

export default Navbar
