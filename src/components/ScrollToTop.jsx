import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      href="#top"
      onClick={scrollToTop}
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${visible ? 'active' : ''}`}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollToTop;
