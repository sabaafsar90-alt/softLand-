import { useState, useEffect } from 'react';

const Gallery = () => {
  const images = Array.from({ length: 12 }, (_, i) => `/assets/img/app-gallery/app-gallery-${i + 1}.png`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const total = images.length;

  useEffect(() => {
    if (isHovered || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, lightboxIndex, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % total);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + total) % total);
  };

  // Determine visible items window (5 visible on desktop, 3 on tablet, 1 on mobile)
  const getVisibleImages = () => {
    const list = [];
    for (let i = -2; i <= 2; i++) {
      const idx = (currentIndex + i + total) % total;
      list.push({ index: idx, path: images[idx], isCenter: i === 0 });
    }
    return list;
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title">
        <h2>Gallery</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div
        className="container-fluid position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="d-flex justify-content-center align-items-center flex-nowrap overflow-hidden py-4 gap-3 gap-md-4">
          {getVisibleImages().map((item, i) => (
            <div
              key={`${item.index}-${i}`}
              onClick={() => openLightbox(item.index)}
              style={{
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: item.isCenter ? 'scale(1.08)' : 'scale(0.9)',
                opacity: item.isCenter ? 1 : 0.75,
                zIndex: item.isCenter ? 2 : 1,
                minWidth: '180px',
                maxWidth: '240px'
              }}
              className="text-center"
            >
              <img
                src={item.path}
                alt={`App Screen ${item.index + 1}`}
                className="img-fluid rounded-4 shadow-sm"
                style={{
                  border: item.isCenter ? '4px solid #559bcc' : '2px solid transparent',
                  borderRadius: '25px'
                }}
              />
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <button
            onClick={handlePrev}
            className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '42px', height: '42px', borderColor: '#559bcc', color: '#559bcc' }}
            aria-label="Previous gallery slide"
          >
            <i className="bi bi-chevron-left fs-5"></i>
          </button>

          <div className="d-flex gap-2">
            {images.slice(0, 6).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`carousel-dot ${currentIndex % 6 === idx ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '42px', height: '42px', borderColor: '#559bcc', color: '#559bcc' }}
            aria-label="Next gallery slide"
          >
            <i className="bi bi-chevron-right fs-5"></i>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
              <i className="bi bi-x-lg"></i>
            </button>
            <button className="lightbox-nav-btn prev" onClick={prevLightbox} aria-label="Previous Image">
              <i className="bi bi-chevron-left"></i>
            </button>
            <img
              src={images[lightboxIndex]}
              alt={`Full App Screen ${lightboxIndex + 1}`}
              className="img-fluid"
            />
            <button className="lightbox-nav-btn next" onClick={nextLightbox} aria-label="Next Image">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
