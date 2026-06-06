import { useState, type FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Gallery.css';

interface Image {
  id: number;
  src: string;
  alt: string;
}

const Gallery: FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600', alt: 'Lodge exterior with Honde Valley backdrop' },
    { id: 2, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600', alt: 'Infinity pool overlooking the valley' },
    { id: 3, src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600', alt: 'Luxury suite interior' },
    { id: 4, src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600', alt: 'Restaurant with panoramic views' },
    { id: 5, src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600', alt: 'Eastern Highlands mountain vista' },
    { id: 6, src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600', alt: 'Spa and wellness center' }
  ];

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleKeyDown = (e: React.KeyboardEvent, image: Image) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedImage(image);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleLightboxKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="section-subtitle">Explore the beauty of Pagotwe Lodge</p>
        
        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => handleImageClick(image)}
              onKeyDown={(e) => handleKeyDown(e, image)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div
            className="lightbox"
            onClick={handleCloseLightbox}
            onKeyDown={handleLightboxKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            tabIndex={-1}
          >
            <button
              className="close-btn"
              onClick={handleCloseLightbox}
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;