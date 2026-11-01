const Steps = () => {
  const stepItems = [
    {
      num: '01',
      title: 'Sign Up',
      desc: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'
    },
    {
      num: '02',
      title: 'Repellat Nihil',
      desc: 'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest'
    },
    {
      num: '03',
      title: 'Ad ad velit qui',
      desc: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis'
    }
  ];

  return (
    <section id="cards" className="cards section">
      <div className="container">
        <div className="text-center mb-4 steps-img">
          <img src="/assets/img/steps.svg" alt="How it works steps" className="img-fluid" />
        </div>

        <div className="row gy-4">
          {stepItems.map((item, idx) => (
            <div key={idx} className="col-lg-4">
              <div className="card-item">
                <span>{item.num}</span>
                <h4>
                  <a href="#step" onClick={(e) => e.preventDefault()} className="stretched-link text-decoration-none">
                    {item.title}
                  </a>
                </h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
