import './Footer.scss'
import logo from '../../../assets/logo.jpg'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react'


const Footer = () => {

    const [ inputValue, setInputValue ] = useState("")
    const [ inputError, setinputError ] = useState("")

    // Handle input changes
    const handleChange = (e) => {
        setInputValue(e.target.value)
        // console.log(inputValue)
    }

    // Handle Submit the subscription
    const handleSubscription = (e) => {
        e.preventDefault()
        console.log('Submited')
        handleChange()
        console.log(inputValue)
    }
  return (
    <>
    <footer className="footer">
        <div className="my-footer">
            <div className="logo-medias">
                <div className="img">
                    <img src={logo} alt="logo-img" />
                </div>
                <div className="medias">
                    <Link to=""><FacebookIcon/></Link>
                    <Link to=""><InstagramIcon/></Link>
                    <Link to=""><LinkedInIcon/></Link>
                    <Link to=""><TwitterIcon/></Link>
                </div>
            </div>
            <div className="quick-links">
                <h3>Important Links</h3>
                <ul>
                    <li><Link to="">Explore</Link></li>
                    <li><Link to="">Buy a Home</Link></li>
                    <li><Link to="">Rent a Home</Link></li>
                    <li><Link to="">Sell a Home</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
            </div>
            <div className="subscribe">
                <h4>Subscribe to get updates</h4>
                <form action="" onSubmit={handleSubscription}>
                    <input 
                        placeholder='Enter your email'
                        type="email" 
                        name="email" 
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button className='subscribe-btn'>Subscribe</button>
                </form>
                <small>{inputError}</small>
            </div>
        </div>
        <div className="copyright">
            <p> Alrights reserved  &copy; Copyright Jephte Houses 2023 </p>
        </div>
    </footer>
    </>
  )
}

export default Footer
