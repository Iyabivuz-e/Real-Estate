import './Hero.scss'
import Background from '../../../assets/walpaper3.jpg'

const Hero = () => {
  return (
    <div className='hero-section'>
        <img src={Background} 
            alt="background" 
            className='background-image' 
        />
      
      {/* Hero text */}
      <div className="hero-text-container">
        <div className="my-texts">
            <span className='hero-text'>We are here to Serve You and Your Family!</span>
            <h1 className='hero-type-heading'>Jephte Houses Group Ltd.</h1>
            <span className='hero-text'>Serving Rwanda and the rest of the world!</span>
            <button className="properties">Browse Properties</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
