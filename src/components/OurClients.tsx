const OurClients = () => {
  return (
    <section
      className="py-5 text-center d-flex flex-column align-items-center w-100"
      style={{
        backgroundImage: 'url(/clients/clients.png)', // Background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 1rem',
        minHeight: '50vh',
      }}
    >
     <h2 className="text-warning mb-3">Valued Clients</h2>
     <hr style={{ width: '60px', margin: '0 auto', borderTop: '2px solid orange' }} />
    </section>
  );
};

export default OurClients;
