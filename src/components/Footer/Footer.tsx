import { type FC, type FormEvent } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer: FC = () => {
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Pagotwe Lodge</h3>
            <p>Experience the magic of Honde Valley. Nestled in Zimbabwe's Eastern Highlands, we offer luxury accommodation surrounded by breathtaking mountain landscapes.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="#" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="#" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#booking">Book Now</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><FaMapMarkerAlt /> Honde Valley, Mutare District, Eastern Highlands, Zimbabwe</p>
              <p><FaPhone /> +263 77 123 4567</p>
              <p><FaEnvelope /> info@pagotwelodge.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for special offers and updates.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="Your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pagotwe Lodge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;