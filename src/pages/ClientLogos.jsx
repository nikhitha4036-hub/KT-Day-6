const clientLogos = [
  'Northstar Bank',
  'HelioGrid Energy',
  'Apex Mobility',
  'Summit Health',
  'Riverstone Capital',
  'Atlas Retail Group',
];

const successStories = [
  {
    client: 'Global financial services group',
    result: '18% lower operating cost',
    detail: 'Redesigned regional service operations and governance across five markets.',
  },
  {
    client: 'Enterprise software provider',
    result: '42% faster sales cycle',
    detail: 'Built an account segmentation model and executive-ready sales motion.',
  },
  {
    client: 'Healthcare network',
    result: '31% improvement in patient access',
    detail: 'Modernized scheduling, reporting, and cross-site capacity planning.',
  },
];

function ClientLogos() {
  return (
    <main className="page client-logos-page">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Trusted Partnerships</span>
          <h1>Consulting expertise built for complex corporate decisions.</h1>
          <p>
            We help leadership teams clarify strategy, improve performance, and turn transformation
            plans into measurable business results.
          </p>
        </div>
        <div className="hero-panel" aria-label="Firm performance metrics">
          <div>
            <strong>$4.8B</strong>
            <span>client value influenced</span>
          </div>
          <div>
            <strong>92%</strong>
            <span>engagement renewal rate</span>
          </div>
          <div>
            <strong>24</strong>
            <span>markets supported</span>
          </div>
        </div>
      </section>

      <section className="logo-section" aria-labelledby="client-logo-heading">
        <div className="section-heading">
          <span className="eyebrow">Client Logos</span>
          <h2 id="client-logo-heading">Chosen by leadership teams across regulated industries.</h2>
        </div>
        <div className="logo-grid">
          {clientLogos.map((client) => (
            <div className="client-logo-card" key={client}>
              {client}
            </div>
          ))}
        </div>
      </section>

      <section className="success-section" aria-labelledby="success-heading">
        <div className="section-heading">
          <span className="eyebrow">Client Success Stories</span>
          <h2 id="success-heading">Proof points that make the business case clear.</h2>
        </div>
        <div className="success-grid">
          {successStories.map((story) => (
            <article className="success-card" key={story.client}>
              <span>{story.client}</span>
              <h3>{story.result}</h3>
              <p>{story.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ClientLogos;
