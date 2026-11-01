const Pricing = () => {
  const plans = [
    {
      title: 'Free Plan',
      icon: 'bi bi-box',
      price: '0',
      period: '/ month',
      featured: false,
      features: [
        { text: 'Quam adipiscing vitae proin', available: true },
        { text: 'Nec feugiat nisl pretium', available: true },
        { text: 'Nulla at volutpat diam uteera', available: true },
        { text: 'Pharetra massa massa ultricies', available: false },
        { text: 'Massa ultricies mi quis hendrerit', available: false }
      ]
    },
    {
      title: 'Business Plan',
      icon: 'bi bi-rocket',
      price: '29',
      period: '/ month',
      featured: true,
      features: [
        { text: 'Quam adipiscing vitae proin', available: true },
        { text: 'Nec feugiat nisl pretium', available: true },
        { text: 'Nulla at volutpat diam uteera', available: true },
        { text: 'Pharetra massa massa ultricies', available: true },
        { text: 'Massa ultricies mi quis hendrerit', available: true }
      ]
    },
    {
      title: 'Developer Plan',
      icon: 'bi bi-send',
      price: '49',
      period: '/ month',
      featured: false,
      features: [
        { text: 'Quam adipiscing vitae proin', available: true },
        { text: 'Nec feugiat nisl pretium', available: true },
        { text: 'Nulla at volutpat diam uteera', available: true },
        { text: 'Pharetra massa massa ultricies', available: true },
        { text: 'Massa ultricies mi quis hendrerit', available: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row g-4 align-items-center">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-lg-4">
              <div className={`pricing-item ${plan.featured ? 'featured' : ''}`}>
                <h3>{plan.title}</h3>
                <div className="icon">
                  <i className={plan.icon}></i>
                </div>
                <h4>
                  <sup>$</sup>{plan.price}<span> {plan.period}</span>
                </h4>
                <ul>
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className={feat.available ? '' : 'na'}>
                      <i className={`bi ${feat.available ? 'bi-check' : 'bi-x'}`}></i>
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a href="#buy" onClick={(e) => e.preventDefault()} className="buy-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
