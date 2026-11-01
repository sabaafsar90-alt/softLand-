import { useState } from 'react';

const Faq = () => {
  const faqs = [
    {
      q: 'Non consectetur a erat nam at lectus urna duis?',
      a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
      q: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
      a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },
    {
      q: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
      a: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'
    },
    {
      q: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
      a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },
    {
      q: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
      a: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in'
    },
    {
      q: 'Perspiciatis quod quo quos nulla quo illum ullam?',
      a: 'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.'
    }
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              {faqs.map((item, idx) => {
                const isActive = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-item ${isActive ? 'faq-active' : ''}`}
                    onClick={() => toggleFaq(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3>{item.q}</h3>
                    <div
                      className="faq-content"
                      style={{
                        display: isActive ? 'block' : 'none',
                        visibility: isActive ? 'visible' : 'hidden',
                        opacity: isActive ? 1 : 0,
                        paddingTop: isActive ? '12px' : 0,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <p>{item.a}</p>
                    </div>
                    <i
                      className="faq-toggle bi bi-chevron-right"
                      style={{
                        transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    ></i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
