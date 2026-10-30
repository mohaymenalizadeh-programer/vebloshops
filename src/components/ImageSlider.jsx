import React, { useRef } from 'react';
import '../styles/ImageSlider.css';

const DEFAULT_ITEMS = [
  { id: 1, type: 'image', src: './images/go1.webp', title: 'LANA 1' },
  { id: 2, type: 'video', videoSrc: './images/yamyamyam.mp4', title: 'LANA 2' },
  { id: 3, type: 'image', src: './images/go2.webp', title: 'LANA 3' },
  { id: 5, type: 'image', src: './images/go3.webp', title: 'LANA 5' },

];

const ImageSlider = ({ items = DEFAULT_ITEMS }) => {
  const trackRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    trackRef.current.classList.add('custom-hero-slider-active');
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
    if (trackRef.current) {
      trackRef.current.classList.remove('custom-hero-slider-active');
    }
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollNext = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector('.custom-hero-slider-card').offsetWidth;
      trackRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector('.custom-hero-slider-card').offsetWidth;
      trackRef.current.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
    }
  };

  return (
    <section className="custom-hero-slider-wrapper" aria-label="گالری محصولات">
      <button 
        type="button" 
        className="custom-hero-slider-btn custom-hero-slider-prev" 
        onClick={scrollPrev}
        aria-label="تصویر قبلی"
      >
        &#10094;
      </button>

      <div 
        className="custom-hero-slider-track" 
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {items.map((item, idx) => (
          <article className="custom-hero-slider-card" key={item.id || idx}>
            {item.type === 'video' ? (
              <video 
                src={item.videoSrc} 
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="auto"
                draggable="false"
              />
            ) : (
              <img 
                src={item.src} 
                alt={item.title || 'تصویر اسلایدر'} 
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                width="1000"
                height="600"
                draggable="false"
              />
            )}
            <div className="custom-hero-slider-overlay">
              <h2>{item.title}</h2>
            </div>
          </article>
        ))}
      </div>

      <button 
        type="button" 
        className="custom-hero-slider-btn custom-hero-slider-next" 
        onClick={scrollNext}
        aria-label="تصویر بعدی"
      >
        &#10095;
      </button>
    </section>
  );
};

export default ImageSlider;