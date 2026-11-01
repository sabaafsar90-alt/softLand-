const Featured = () => {
  const cards = [
    {
      img: '/assets/img/cards-4.png',
      icon: 'bi bi-hdd-stack',
      title: 'Explore Your Team',
      desc: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      img: '/assets/img/cards-2.png',
      icon: 'bi bi-brightness-high',
      title: 'Digital Whiteboard',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      img: '/assets/img/cards-6.png',
      icon: 'bi bi-calendar4-week',
      title: 'Design To Development',
      desc: 'Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
    }
  ];

  return (
    <section id="featured" className="featured section">
      <div className="container section-title">
        <h2>Save your time to using SoftLand</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {cards.map((card, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card">
                <div className="img">
                  <img src={card.img} alt={card.title} className="img-fluid" />
                  <div className="icon">
                    <i className={card.icon}></i>
                  </div>
                </div>
                <h2 className="title">{card.title}</h2>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
