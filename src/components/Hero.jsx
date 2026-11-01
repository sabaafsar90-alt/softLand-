const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-4 order-lg-last hero-img">
            <img src="/assets/img/phone_1.png" alt="SoftLand App Phone 1" className="phone-1" />
            <img src="/assets/img/phone_2.png" alt="SoftLand App Phone 2" className="phone-2" />
          </div>
          <div className="col-lg-8 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>Promote Your App with SoftLand</h2>
            <p>We are a team of talented designers making websites with Bootstrap and React</p>
            <div className="d-flex mt-4 justify-content-center justify-content-lg-start flex-wrap gap-3">
              <a href="#download" onClick={(e) => e.preventDefault()} className="download-btn">
                <i className="bi bi-google-play"></i>
                <span>Google Play</span>
              </a>
              <a href="#download" onClick={(e) => e.preventDefault()} className="download-btn">
                <i className="bi bi-apple"></i>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
