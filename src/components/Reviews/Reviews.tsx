import { type FC } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Reviews.css';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const Reviews: FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Tendai Mukanya',
      location: 'Harare, Zimbabwe',
      rating: 5,
      comment: 'An absolutely magical experience! The views of Honde Valley were breathtaking and the staff made us feel like family. We\'ll definitely be back next year.',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 2,
      name: 'Sarah & Michael Chen',
      location: 'Johannesburg, South Africa',
      rating: 5,
      comment: 'Perfect family getaway. The kids loved the guided nature walks and the pool. The cabin was spacious and the local cuisine was outstanding.',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 3,
      name: 'Emma Williams',
      location: 'London, UK',
      rating: 4,
      comment: 'Stunning location deep in the Eastern Highlands. The tea plantation tour was unforgettable. Only giving 4 stars because we wish we could have stayed longer!',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={index < rating ? 'star filled' : 'star'} />
    ));
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">Guest Reviews</h2>
        <p className="section-subtitle">What our guests say about us</p>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="review-comment">{review.comment}</p>
              
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
              
              <div className="reviewer-info">
                <img src={review.avatar} alt={review.name} className="reviewer-avatar" loading="lazy" />
                <div>
                  <h4 className="reviewer-name">{review.name}</h4>
                  <p className="reviewer-location">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;