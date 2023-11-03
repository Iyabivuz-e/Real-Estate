import './Sections.scss'
import buy from '../../../../assets/tobuy-real.jpg'
import rent from '../../../../assets/torent-real.jpg'
import sell from '../../../../assets/tosell-real.jpg'
import { Link } from 'react-router-dom'

const Sections = () => {
  return (
    <>
      <div className="buy">
        <img src={buy} alt="" />
        <div className="details">
          <h1>buy a home?</h1>
          <small>(Gura inzu)</small>
          <p>Browse our exclusive properties in the area</p>
          <button className='section-btn'>
            <Link to="/search-home">Buy a Home</Link>
          </button>
        </div>
      </div>
      <div className="buy">
        <img src={sell} alt="" />
        <div className="details">
          <h1>Sell a home?</h1>
          <small>(Gurisha inzu)</small>
          <p>Find out what your home is really worth.</p>
          <button className='section-btn'>
            <Link to="/sell-home">Sell a Home</Link>
            </button>
        </div>
      </div>
      <div className="buy">
        <img src={rent} alt="" />
        <div className="details">
          <h1>Rent a home?</h1>
          <small>(Kodesha inzu)</small>
          <p>Browse our exclusive properties in the area.</p>
          <button className='section-btn'>
            <Link to="/search-home">Rent a Home</Link>
            </button>
        </div>
      </div>
    </>
  )
}

export default Sections
