const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3 className="sitename text-white">SoftLand</h3>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
        <div className="social-links d-flex justify-content-center">
          <a href="#twitter" onClick={(e) => e.preventDefault()} aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#facebook" onClick={(e) => e.preventDefault()} aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#instagram" onClick={(e) => e.preventDefault()} aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#skype" onClick={(e) => e.preventDefault()} aria-label="Skype">
            <i className="bi bi-skype"></i>
          </a>
          <a href="#linkedin" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <strong className="px-1 sitename">SoftLand</strong> <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noreferrer">BootstrapMade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
