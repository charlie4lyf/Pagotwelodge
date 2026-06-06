import { type FC, type ReactNode } from 'react';
import { FaWifi, FaSwimmingPool, FaSpa, FaHiking, FaUtensils, FaParking } from 'react-icons/fa';
import './Amenities.css';

interface Amenity {
  icon: ReactNode;
  title: string;
  description: string;
}

const Amenities: FC = () => {
  const amenitiesList: Amenity[] = [
    {
      icon: <FaWifi />,
      title: 'Free WiFi',
      description: 'High-speed internet throughout the property'
    },
    {
      icon: <FaSwimmingPool />,
      title: 'Infinity Pool',
      description: 'Heated pool with mountain views'
    },
    {
      icon: <FaSpa />,
      title: 'Spa & Wellness',
      description: 'Full-service spa and massage treatments'
    },
    {
      icon: <FaHiking />,
      title: 'Guided Hikes',
      description: 'Daily guided mountain excursions'
    },
    {
      icon: <FaUtensils />,
      title: 'Fine Dining',
      description: 'Farm-to-table restaurant on site'
    },
    {
      icon: <FaParking />,
      title: 'Free Parking',
      description: 'Secure parking for all guests'
    }
  ];

  return (
    <section id="amenities" className="amenities">
      <div className="container">
        <h2 className="section-title">Our Amenities</h2>
        <p className="section-subtitle">Everything you need for a perfect getaway</p>
        
        <div className="amenities-grid">
          {amenitiesList.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-icon">{amenity.icon}</div>
              <h3>{amenity.title}</h3>
              <p>{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;