import React, { useState } from 'react';

const AboutUs: React.FC = () => {
  const plans = [
    {
      title: 'Web Design',
      features: [
        'Web Design',
        'Graphic Design',
        'Technical Support',
      ],
    },
    {
      title: 'Design & Branding',
      features: [
        'Business Branding',
        '3D and 2D Signage',
        'Printing Services',
      ],
    },
    {
      title: 'Media Management',
      features: [
        'Social Media Management',
        'Web Content Management',
        'Virtual Assistance',
      ],
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <div className="row justify-content-center">
          {plans.map((plan, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <article
                className="col-md-4 col-sm-6 mb-4"
                key={index}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="card h-100 card-hover">
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title text-center plan-title">{plan.title}</h5>
                    {isHovered && (
                      <ul className="list-unstyled text-center features-list">
                        {plan.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
