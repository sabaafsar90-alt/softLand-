const About = () => {
  const iconBoxes = [
    {
      icon: 'bi bi-buildings',
      title: 'Eius provident',
      desc: 'Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem'
    },
    {
      icon: 'bi bi-clipboard-pulse',
      title: 'Rerum aperiam',
      desc: 'Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia'
    },
    {
      icon: 'bi bi-command',
      title: 'Veniam omnis',
      desc: 'Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Delares sapiente',
      desc: 'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row align-items-xl-center gy-5">
          <div className="col-xl-5 content">
            <h3>About Us</h3>
            <h2>Ducimus rerum libero reprehenderit cumque</h2>
            <p>
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime.
              Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure.
              Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.
            </p>
            <a href="#about-more" onClick={(e) => e.preventDefault()} className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
              {iconBoxes.map((box, index) => (
                <div key={index} className="col-md-6">
                  <div className="icon-box">
                    <i className={box.icon}></i>
                    <h3>{box.title}</h3>
                    <p>{box.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
