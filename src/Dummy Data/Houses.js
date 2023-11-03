import h1 from '../assets/house1.jpg'
import h2 from '../assets/house2.jpg'
import h3 from '../assets/house3.jpg'
import h4 from '../assets/house4.jpg'
import h5 from '../assets/house5.jpg'
import h6 from '../assets/house6.jpg'
import h7 from '../assets/house7.jpg'
import h8 from '../assets/house8.jpg'
import h9 from '../assets/house9.jpg'
import h10 from '../assets/modern5.jpg'


const houses = [
    {
      "id": 1,
      "category": "rent",
      "title": "Spacious Apartment in Downtown",
      "description": "A beautiful and spacious apartment located in the heart of downtown. Close to amenities and public transportation.",
      "price": 1500,
      "bedrooms": 2,
      "bathrooms": 1,
      "size": 1000,
      "location": "City Center",
      "image": h1
    },
    {
      "id": 2,
      "category": "rent",
      "title": "Cozy Studio in Suburbia",
      "description": "A cozy and well-maintained studio apartment in a peaceful suburban neighborhood. Perfect for a single person or a couple.",
      "price": 800,
      "bedrooms": 1,
      "bathrooms": 1,
      "size": 500,
      "location": "Suburbia",
      "image": h2
    },
    {
      "id": 3,
      "category": "sell",
      "title": "Modern House with a View",
      "description": "A modern and stylish house with a stunning view. Features an open floor plan, large windows, and a spacious backyard.",
      "price": 350000,
      "bedrooms": 3,
      "bathrooms": 2,
      "size": 2000,
      "location": "Hillside",
      "image": h3
    },
    {
      "id": 4,
      "category": "sell",
      "title": "Charming Cottage by the Lake",
      "description": "A charming cottage located by a serene lake. Perfect for nature lovers and those seeking a peaceful retreat.",
      "price": 250000,
      "bedrooms": 2,
      "bathrooms": 1,
      "size": 1200,
      "location": "Lakefront",
      "image": h4
    },
    {
      "id": 5,
      "category": "rent",
      "title": "Luxurious Penthouse with Panoramic Views",
      "description": "An exquisite penthouse offering luxurious living and breathtaking panoramic views of the city skyline.",
      "price": 5000,
      "bedrooms": 3,
      "bathrooms": 2,
      "size": 3000,
      "location": "City Center",
      "image": h5
    },
    {
      "id": 6,
      "category": "sell",
      "title": "Spacious Family Home with a Pool",
      "description": "A spacious and well-maintained family home with a private pool. Ideal for families looking for comfort and relaxation.",
      "price": 450000,
      "bedrooms": 4,
      "bathrooms": 3,
      "size": 2500,
      "location": "Suburbia",
      "image": h6
    },
    {
      "id": 7,
      "category": "rent",
      "title": "Modern Condo in a High-rise Building",
      "description": "A modern condo located in a high-rise building, offering stunning city views and access to various amenities.",
      "price": 2000,
      "bedrooms": 2,
      "bathrooms": 2,
      "size": 1200,
      "location": "City Center",
      "image": h7
    },
    {
      "id": 8,
      "category": "sell",
      "title": "Colonial Style House with a Garden",
      "description": "A charming colonial style house with a beautiful garden. Features classic architecture and spacious interior.",
      "price": 320000,
      "bedrooms": 3,
      "bathrooms": 2,
      "size": 1800,
      "location": "Suburbia",
      "image": h8
    },
    {
      "id": 9,
      "category": "sell",
      "title": "Riverside Retreat with Scenic Views",
      "description": "A serene riverside retreat offering stunning views and a tranquil environment. Perfect for relaxation and nature enthusiasts.",
      "price": 280000,
      "bedrooms": 2,
      "bathrooms": 1,
      "size": 1500,
      "location": "Riverside",
      "image": h9
    },
    {
      "id": 10,
      "category": "rent",
      "title": "Modern Townhouse with Private Garage",
      "description": "A modern townhouse featuring contemporary design and a private garage. Conveniently located near shopping centers and schools.",
      "price": 1800,
      "bedrooms": 3,
      "bathrooms": 2,
      "size": 1600,
      "location": "Town",
      "image": h10
    }
  ]
const featuredHouses = [
    {
      "id": 1,
      "category": "rent",
      "title": "Spacious Apartment in Downtown",
      "description": "A beautiful and spacious apartment located in the heart of downtown. Close to amenities and public transportation.",
      "price": 1500,
      "bedrooms": 2,
      "bathrooms": 1,
      "size": 1000,
      "location": "City Center",
      "amenities": ["parking", "yard", "washer"],
      "image": h1
    },
    {
      "id": 2,
      "category": "rent",
      "title": "Cozy Studio in Suburbia",
      "description": "A cozy and well-maintained studio apartment in a peaceful suburban neighborhood. Perfect for a single person or a couple.",
      "price": 800,
      "bedrooms": 1,
      "bathrooms": 1,
      "size": 500,
      "location": "Suburbia",
      "amenities": ["parking", "yard", "washer", "pool"],
      "image": h2
    },
    {
      "id": 3,
      "category": "sell",
      "title": "Modern House with a View",
      "description": "A modern and stylish house with a stunning view. Features an open floor plan, large windows, and a spacious backyard.",
      "price": 350000,
      "bedrooms": 3,
      "bathrooms": 2,
      "size": 2000,
      "location": "Hillside",
       "amenities": ["parking", "yard", "washer", "pool", "spa"],
      "image": h3
    },
    {
      "id": 4,
      "category": "sell",
      "title": "Charming Cottage by the Lake",
      "description": "A charming cottage located by a serene lake. Perfect for nature lovers and those seeking a peaceful retreat.",
      "price": 250000,
      "bedrooms": 2,
      "bathrooms": 1,
      "size": 1200,
      "location": "Lakefront",
    "amenities": ["parking", "yard", "washer"],
      "image": h4
    },
    {
      "id": 5,
      "category": "rent",
      "title": "Luxurious Penthouse with Panoramic Views",
      "description": "An exquisite penthouse offering luxurious living and breathtaking panoramic views of the city skyline.",
      "price": 5000,
      "bedrooms": 3,
      "bathrooms": 2,
      "size": 3000,
      "location": "City Center",
     "amenities": ["parking", "yard", "washer/dryer", "pool"],
      "image": h5
    },
    {
      "id": 6,
      "category": "rent",
      "title": "Luxurious Penthouse with Panoramic Views",
      "description": "An exquisite penthouse offering luxurious living and breathtaking panoramic views of the city skyline.",
      "price": 5000,
      "bedrooms": 3,
      "bathrooms": 2,
      "size": 3000,
      "location": "City Center",
     "amenities": ["parking", "yard", "washer/dryer", "pool"],
      "image": h5
    },
    {
      "id": 7,
      "category": "rent",
      "title": "Luxurious Penthouse with Panoramic Views",
      "description": "An exquisite penthouse offering luxurious living and breathtaking panoramic views of the city skyline.",
      "price": 5000,
      "bedrooms": 3,
      "bathrooms": 2,
      "size": 3000,
      "location": "City Center",
     "amenities": ["parking", "yard", "washer/dryer", "pool"],
      "image": h5
    },
    
  ]

  export {houses, featuredHouses}