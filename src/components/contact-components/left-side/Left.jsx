import './Left.scss'
import jephte from '../../../assets/testimony1.jpg'

const Left = () => {
  return (
    <div className='left-side'>
      <h2>Let's get in touch</h2>

      <div className="contact-details">
        <div className="image">
            <img src={jephte} alt="owner" width={100} height={100} />
        </div>
        <div className="address">
            <p className="text">We are open for any suggestion or just to have a chat.</p>

            <div className="real-addess">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>: Kigali Rwanda</p>
                </div>
                <div className="location">
                    <i className="fa-solid fa-phone"></i>
                    <p>: +250780845014</p>
                </div>
                <div className="location">
                    <i className="fa-solid fa-envelope"></i>
                    <p>: jeph@gmail.com</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Left
