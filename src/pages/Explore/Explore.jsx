import './Explore.scss'
import Filter from '../../components/explore-components/filters/Filter'
import Houses from '../../components/explore-components/houses/Houses'
import kigali from '../../assets/tobuy-real.jpg'

const Explore = () => {
  return (
    <div className='explore'>
        <img className="bg-img" src={kigali} alt="background" />
        <h1 className='title'>Find The Best Settlement With Jephte Houses Group Ltd.</h1>
        <div className="explore-container">
            <Houses/>
            <Filter/>
        </div>
    </div>
  )
}

export default Explore
