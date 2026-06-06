import { type FC } from 'react';
import { FaCalendarAlt, FaClock, FaUserFriends } from 'react-icons/fa';
import './Events.css';

interface Event {
  id: number;
  title: string;
  date: string;
  duration: string;
  capacity: number;
  price: number;
  description: string;
  image: string;
}

const Events: FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: 'Mountain Yoga Retreat',
      date: 'June 15 - 18, 2026',
      duration: '4 days / 3 nights',
      capacity: 12,
      price: 599,
      description: 'Rejuvenate your mind and body with daily sunrise yoga sessions overlooking the Honde Valley. Includes meditation walks, farm-to-table meals, and a traditional Zimbabwean spa treatment.',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600'
    },
    {
      id: 2,
      title: 'Honde Valley Hiking Expedition',
      date: 'July 5 - 10, 2026',
      duration: '6 days / 5 nights',
      capacity: 8,
      price: 799,
      description: 'Explore the untouched wilderness of the Eastern Highlands. Guided hikes through tea plantations, visits to local villages, waterfall swimming, and camping under the stars.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600'
    },
    {
      id: 3,
      title: 'Photography & Nature Retreat',
      date: 'August 20 - 25, 2026',
      duration: '5 days / 4 nights',
      capacity: 10,
      price: 699,
      description: 'Capture the stunning landscapes of Honde Valley with professional photography guidance. Sunrise shoots, wildlife photography, and editing workshops included.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600'
    }
  ];

  return (
    <section id="events" className="events">
      <div className="container">
        <h2 className="section-title">Events & Retreats</h2>
        <p className="section-subtitle">Transformative experiences in the heart of Honde Valley</p>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} loading="lazy" />
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-info">
                  <span className="event-info-item">
                    <FaCalendarAlt /> {event.date}
                  </span>
                  <span className="event-info-item">
                    <FaClock /> {event.duration}
                  </span>
                  <span className="event-info-item">
                    <FaUserFriends /> {event.capacity} guests max
                  </span>
                </div>
                
                <div className="event-footer">
                  <span className="event-price">
                    ${event.price}<span className="per-person">/person</span>
                  </span>
                  <a href="#" className="btn btn-primary">Reserve Your Spot</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;