import './houses.scss'
import { houses } from '../../../Dummy Data/Houses'


const Houses = () => {
  return (
    <div className='houses'>
        {houses.map(house => (
            <div className='featured-card' key={house.id}>
                <div className="img">
                    <img src={house.image} alt="house1" />
                </div>
                <div className="featured-description">
                    <h2>{house.title}</h2>
                    <p>{house.description}</p>
                    <p><b>Price:</b> ${house.price}</p>
                    <p><b>Location:</b> {house.location}</p>
                    <p><b>Category:</b> {house.category}</p>
                    {/* <p>{house.amenities.join(" , ")}</p> */}
                </div>
                <button className="view-more">View More</button>
            </div>
        ))}
    </div>
  )
}

export default Houses
