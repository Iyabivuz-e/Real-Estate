import './Partnership.scss'
import withUs from '../../../assets/withUs1.jpg'

const Partnership = () => {
  return (
    <div className="partnership">
      <img src={withUs} alt="with us"  className='partnership-img'/>

      <div className="overlay-texts">
        <h1>Work with us</h1>
        <p>We strive to provide personalized solutions that 
          bring our clients closer to their dream properties 
          and create their long-term generational wealth through Real Estate.</p>
      </div>
    </div>
  )
}

export default Partnership
