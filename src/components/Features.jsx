const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container section-title">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        {/* Item 1 */}
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <img src="/assets/img/features-1.svg" className="img-fluid" alt="Feature 1" />
          </div>
          <div className="col-md-7">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check"></i> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
            </ul>
          </div>
        </div>

        {/* Item 2 */}
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 order-1 order-md-2 d-flex align-items-center justify-content-center">
            <img src="/assets/img/features-2.svg" className="img-fluid" alt="Feature 2" />
          </div>
          <div className="col-md-7 order-2 order-md-1">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <img src="/assets/img/features-3.svg" className="img-fluid" alt="Feature 3" />
          </div>
          <div className="col-md-7">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</span></li>
            </ul>
          </div>
        </div>

        {/* Item 4 */}
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-5 order-1 order-md-2 d-flex align-items-center justify-content-center">
            <img src="/assets/img/features-4.svg" className="img-fluid" alt="Feature 4" />
          </div>
          <div className="col-md-7 order-2 order-md-1">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
