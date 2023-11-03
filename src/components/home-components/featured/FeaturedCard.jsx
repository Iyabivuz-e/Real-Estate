import { featuredHouses } from '../../../Dummy Data/Houses'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useRef } from 'react';

const FeaturedCard = () => {

    const cardContainerRef = useRef(null)

    const scrollLeft = () => {
        if(cardContainerRef.current){
            cardContainerRef.current.scrollLeft -= 500
        }
    }
    const scrollRight = () => {
         if(cardContainerRef.current){
            cardContainerRef.current.scrollLeft += 500
        }
    }
  return (
    <div className="featured-card-container" ref={cardContainerRef}>
        {featuredHouses.map((house) => (
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
                    <p>{house.amenities.join(" , ")}</p>
                </div>
                <button className="view-more">View More</button>
            </div>
        ))}

        <div className="next-prev">
            <div className="prev arrow" onClick={scrollLeft}>
                <ArrowLeftIcon  className='move-icon'/>
            </div>
            <div className="next arrow">
                <ArrowRightIcon
                onClick={scrollRight}
                className='move-icon'/>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard
