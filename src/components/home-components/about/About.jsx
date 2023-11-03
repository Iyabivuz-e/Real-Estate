import jephte from '../../../assets/jephte2.jpg'
import './About.scss'

const About = () => {
  return (
      <div className='about-me-section'>
        <div className="right">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Suscipit commodi quis ut, voluptatibus ipsa assumenda 
              blanditiis iusto voluptatum libero nostrum, perferendis 
              possimus modi rerum minus, ducimus praesentium laudantium! 
              Repellendus, nulla. Itaque officiis, eveniet, id, asperiores 
              minima voluptatibus ea ipsa quis alias sunt rem similique. 
              Delectus, qui nisi numquam enim error expedita nihil. 
              Voluptatum officia nam architecto.</p>

              <button className="learn-more">Learn more</button>
        </div>
        <div className="left">
          <div className="image">
              <img src={jephte} alt="Jephte" />
          </div>
        </div>
      </div>
  )
}

export default About
