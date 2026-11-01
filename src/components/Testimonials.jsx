import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      img: '/assets/img/testimonials/testimonials-1.jpg',
      name: 'Saul Goodman',
      role: 'Ceo & Founder',
      quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
      img: '/assets/img/testimonials/testimonials-2.jpg',
      name: 'Sara Wilsson',
      role: 'Designer',
      quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
      img: '/assets/img/testimonials/testimonials-3.jpg',
      name: 'Jena Karlis',
      role: 'Store Owner',
      quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
    {
      img: '/assets/img/testimonials/testimonials-4.jpg',
      name: 'Matt Brandon',
      role: 'Freelancer',
      quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
    {
      img: '/assets/img/testimonials/testimonials-5.jpg',
      name: 'John Larson',
      role: 'Entrepreneur',
      quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="testimonial-carousel-container">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: 'transform 0.6s ease-in-out'
            }}
          >
            {testimonials.map((item, idx) => (
              <div key={idx} className="testimonial-slide">
                <div className="testimonial-item">
                  <img src={item.img} className="testimonial-img" alt={item.name} />
                  <h3>{item.name}</h3>
                  <h4>{item.role}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, s) => (
                      <i key={s} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{item.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
