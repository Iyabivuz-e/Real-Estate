import './Featured.scss'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <div className='featured-houses'>
      <div className="title">
        <h1>Featured Houses</h1>
      </div>
      {/* Houses card */}
      
      <FeaturedCard/>
    </div>
  )
}

export default Featured
