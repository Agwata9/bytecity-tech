import React from 'react';

  const AboutUs: React.FC = () => {
    const plans = [
      {
        title: 'Web Design',
        features: [
          'Web Design',
          'Graphic Design',
          'Technical Support'
        ]
      },
      {
        title: 'Design & Branding',
        features: [
          'Business Branding',
          '3D and 2D Signage',
          'Printing Services'
        ]
      },
      {
        title: 'Social Media Management',
        features: [
         ' Social Media Management',
          'Web Content Management',
           'Virtual Assistance'
 
        ]
      },
    ];
  
    return (
      <section className="my-5">
        <div className="container">
          <div className="row justify-content-center">
            {plans.map((plan, index) => (
              <article className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title text-center">{plan.title}</h5>
                    <p className="text-center">{plan.price}</p>
                    <p className="text-muted text-center">{plan.renewPrice}</p>
                    <ul className="list-unstyled text-center">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <button className="btn btn-primary mt-auto">Choose Plan</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
