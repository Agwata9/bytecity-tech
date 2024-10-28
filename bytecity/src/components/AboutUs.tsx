import React from 'react';

const AboutUs: React.FC = () => {
  const cards = [
    {
      title: 'Web Design',
      text: (
        <ul className="list-unstyled text-center">
          <li>Web Design</li>
          <li>Graphic Design</li>
          <li>Technical Support</li>
        </ul>
      ),
      link: '#',
    },
    {
      title: 'Design & Branding',
      text: (
        <ul className="list-unstyled text-center">
          <li>Business Branding</li>
          <li>3D and 2D Signage</li>
          <li>Printing Services</li>
        </ul>
      ),
      link: '#',
    },
    {
      title: 'Social Media Management',
      text: (
        <ul className="list-unstyled text-center">
          <li>Social Media Management</li>
          <li>Web Content Management</li>
          <li>Virtual Assistance</li>
        </ul>
      ),
      link: '#',
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <article className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title text-center">{card.title}</h5>
                  <div className="card-text">{card.text}</div>
                  <a href={card.link} className="btn btn-primary mt-auto">Read More</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
