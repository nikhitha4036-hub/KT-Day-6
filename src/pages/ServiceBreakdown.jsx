const services = [
  {
    title: 'Strategy and Growth',
    description:
      'Market sizing, corporate strategy, portfolio prioritization, and growth planning for executive teams making high-stakes investment decisions.',
    deliverables: ['Market opportunity maps', 'Board-ready strategic plans', 'Commercial due diligence'],
  },
  {
    title: 'Operational Excellence',
    description:
      'End-to-end process redesign that removes waste, improves accountability, and creates measurable productivity gains.',
    deliverables: ['Operating model design', 'Cost transformation', 'Performance management systems'],
  },
  {
    title: 'Digital Transformation',
    description:
      'Practical technology roadmaps that align platforms, data, and people around real business outcomes.',
    deliverables: ['Digital maturity assessment', 'Automation roadmap', 'Data and analytics strategy'],
  },
  {
    title: 'Change and Adoption',
    description:
      'Stakeholder engagement, leadership alignment, and adoption programs that help large organizations move with confidence.',
    deliverables: ['Change impact analysis', 'Leadership workshops', 'Adoption scorecards'],
  },
];

function ServiceBreakdown() {
  return (
    <main className="page service-breakdown-page">
      <section className="service-hero">
        <span className="eyebrow">Service Breakdown</span>
        <h1>Focused consulting services from diagnosis to delivery.</h1>
        <p>
          Each engagement is structured around executive priorities, clear deliverables, and
          operating metrics that show progress early.
        </p>
      </section>

      <section className="services-list" aria-label="Consulting services">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div>
              <span className="service-number">0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <ul>
              {service.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="process-section">
        <div>
          <span className="eyebrow">Engagement Model</span>
          <h2>Senior teams, visible milestones, and decisions your board can trust.</h2>
        </div>
        <div className="process-steps">
          <span>Assess</span>
          <span>Prioritize</span>
          <span>Implement</span>
          <span>Measure</span>
        </div>
      </section>
    </main>
  );
}

export default ServiceBreakdown;
