import { type FC } from 'react';
import { FaUser, FaBed, FaRulerCombined } from 'react-icons/fa';
import './Rooms.css';

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  beds: string;
  size: string;
  image: string;
}

const Rooms: FC = () => {
  const rooms: Room[] = [
    {
      id: 1,
      name: 'Honde View Suite',
      description: 'Spacious suite with panoramic Honde Valley views, private balcony overlooking the tea plantations, and luxury en-suite bathroom.',
      price: 299,
      capacity: 2,
      beds: '1 King',
      size: '45 m²',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600'
    },
    {
      id: 2,
      name: 'Family Mountain Cabin',
      description: 'Perfect for families with separate living area, kitchenette, two bedrooms, and a veranda with mountain views.',
      price: 449,
      capacity: 4,
      beds: '2 Queen',
      size: '75 m²',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600'
    },
    {
      id: 3,
      name: 'Deluxe King Room',
      description: 'Elegant room with king-sized bed, cozy fireplace, and forest views overlooking the Eastern Highlands.',
      price: 249,
      capacity: 2,
      beds: '1 King',
      size: '35 m²',
      image: 'https://images.unsplash.com/photo-1598928506311-c55e93644921?w=600'
    }
  ];

  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <h2 className="section-title">Our Rooms</h2>
        <p className="section-subtitle">Choose your perfect accommodation</p>
        
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image">
                <img src={room.image} alt={room.name} loading="lazy" />
              </div>
              <div className="room-details">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-description">{room.description}</p>
                
                <div className="room-features">
                  <span className="feature">
                    <FaUser /> {room.capacity} Guests
                  </span>
                  <span className="feature">
                    <FaBed /> {room.beds}
                  </span>
                  <span className="feature">
                    <FaRulerCombined /> {room.size}
                  </span>
                </div>
                
                <div className="room-footer">
                  <span className="room-price">
                    ${room.price}<span className="per-night">/night</span>
                  </span>
                  <a href="#events" className="btn btn-primary">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;