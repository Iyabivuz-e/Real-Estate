import './Goal.scss'
import Logo from '../../../assets/logo.jpg'
import Sections from './Sections/Sections'

const Title = () => {
  return (
    <div className='banner-title'>
      <div className="title">
        <img className='my-logo' src={Logo} alt="logo" />
        <h1>Our Goal Is To Find You a Place You Call Home</h1>
      </div>
      <div className="sections">
        <Sections/>
      </div>
    </div>
  )
}

export default Title
