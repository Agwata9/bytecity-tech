import React from "react";

const WebDesignPage: React.FC = () => {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1 className="display-5 fw-bold text-orange">Web Design & Development</h1>
        <p className="lead text-muted">
          Professional web solutions tailored to your business needs.
        </p>
      </header>

      {/* Services Section */}
      <section className="mb-5">
        <h2 className="text-center text-orange mb-4">Our Services</h2>
        <div className="row">
          {/* Service Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title text-center text-orange">Basic Websites</h5>
                <p className="card-text text-muted">
                  Simple, elegant websites ideal for small businesses and startups. Affordable and fast delivery.
                </p>
              </div>
            </div>
          </div>
          {/* Service Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title text-center text-orange">E-commerce Solutions</h5>
                <p className="card-text text-muted">
                  Fully functional online stores with secure payment systems and inventory management.
                </p>
              </div>
            </div>
          </div>
          {/* Service Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title text-center text-orange">Custom Websites</h5>
                <p className="card-text text-muted">
                  Tailored web solutions for corporate clients. Advanced features and unique branding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-5">
        <h2 className="text-center text-orange mb-4">Pricing</h2>
        <table className="table table-bordered">
          <thead className="bg-orange text-white">
            <tr>
              <th>Service</th>
              <th>Price Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Websites</td>
              <td>Ksh 25,000 - Ksh 50,000</td>
            </tr>
            <tr>
              <td>Informative Websites</td>
              <td>Ksh 25,000 - Ksh 75,000</td>
            </tr>
            <tr>
              <td>E-commerce Websites</td>
              <td>Ksh 100,000 and above</td>
            </tr>
            <tr>
              <td>Corporate Websites</td>
              <td>Ksh 300,000 and above</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Contact Section */}
      <section className="text-center">
    
        <p className="text-muted">
          Ready to start your project? Get in touch with us for a consultation.
        </p>
      </section>
    </div>
  );
};

export default WebDesignPage;
