import About from '../../components/home-components/about/About'
import Hero from '../../components/home-components/hero/Hero'
import Title from '../../components/home-components/Goals/Title'
import Featured from '../../components/home-components/featured/Featured'
import Partnership from '../../components/home-components/partnership/Partnership'
// import Testimonial from '../../components/testimonial/Testimonial'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <About/>
      <Title/>
      <Featured/>
      <Partnership/>
    </div>
  )
}

export default Home
