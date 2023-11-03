import About from '../../components/home-components/about/About'
import Hero from '../../components/home-components/hero/Hero'
import Title from '../../components/home-components/Goals/Title'
import Featured from '../../components/home-components/featured/Featured'
import Partnership from '../../components/home-components/partnership/Partnership'
// import Testimonial from '../../components/testimonial/Testimonial'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <div className="other-components">
        <About/>
        <Title/>
        <Featured/>
        <Partnership/>
      </div>
    </div>
  )
}

export default Home
