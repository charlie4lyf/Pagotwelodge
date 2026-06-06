import { useState, type FC } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Pagotwe Lodge</h1>
        </div>
        
        <button
          className="menu-icon"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#amenities" className="nav-link">Amenities</a>
          </li>
          <li className="nav-item">
            <a href="#rooms" className="nav-link">Rooms</a>
          </li>
          <li className="nav-item">
            <a href="#events" className="nav-link">Events</a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-link">Gallery</a>
          </li>
          <li className="nav-item">
            <a href="#reviews" className="nav-link">Reviews</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;