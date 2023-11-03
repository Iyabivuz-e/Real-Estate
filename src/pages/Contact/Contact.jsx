// import Left from "../../components/contact-components/left-side/Left"
import Right from "../../components/contact-components/right-side/Right"
// import walpaper from '../../assets/Walpaper1.jpg'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact-page'>
        {/* <img src={walpaper}  className="image-wrapper" alt="walpaper" /> */}
        <div className="contact-wrapper">

            {/* <Left/> */}
            <Right/>
        </div>
    </div>
  )
}

export default Contact
