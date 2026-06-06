import { type FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Pagotwe Lodge</h1>
        <p className="hero-subtitle">
          Discover the untouched beauty of Honde Valley, Zimbabwe
        </p>
        <div className="hero-buttons">
          <a href="#rooms" className="btn btn-primary">Explore Rooms</a>
          <a href="#amenities" className="btn btn-secondary">Explore Amenities</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;