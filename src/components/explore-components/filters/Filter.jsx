import './filter.scss'

const Filter = () => {
  return (
    <div className='filter'>
      <h2>Filter Here</h2>
      <div className="filter-container">
        <div className="category-container">
            <h4>Category</h4>
            <div className="category">
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>For Rent</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>For Sell</p>
                </div>
                {/* <input type="checkbox" name="for-sell" id="" />For Sell */}
            </div>
        </div>
        <div className="category-container">
            <h4>Location</h4>
            <div className="category">
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>Kigali</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>South</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>North</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>East</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>West</p>
                </div>
            </div>
        </div>
        <div className="category-container">
            <h4>Type</h4>
            <div className="category">
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>Residential</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>Appartment</p>
                </div>
            </div>
        </div>
        <div className="category-container">
            <h4>Status</h4>
            <div className="category">
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>Available</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>Not Available</p>
                </div>
            </div>
        </div>
        <div className="category-container">
            <h4>Amenities</h4>
            <div className="category">
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>Furnished</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>Semi-Furnished</p>
                </div>
                <div className="cat1">
                    <input type="checkbox" name="for-rent" id=""/>
                    <p>Non-Furnished</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
