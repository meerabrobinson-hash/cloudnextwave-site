const frictionPoints = [
  {
    title: "Too many tools, not enough certainty",
    description:
      "Teams are asked to buy, renew, and add AI without a clear view of what the business actually needs.",
  },
  {
    title: "Critical work lives in disconnected places",
    description:
      "Salesforce, spreadsheets, reports, and team processes often evolve separately, creating manual handoffs and inconsistent decisions.",
  },
  {
    title: "AI sounds urgent, but the fit is unclear",
    description:
      "Most companies do not need more experimentation. They need clear use cases that save time, improve visibility, and support daily operations.",
  },
];

const deliverySteps = [
  {
    label: "01",
    title: "Clarify what should stay, change, or connect",
    description:
      "We start with how the business runs today, what is breaking down, and which systems are worth keeping before anything new is added.",
  },
  {
    label: "02",
    title: "Identify the right practical use cases",
    description:
      "We define where automation, reporting, or AI will improve speed, accuracy, and decision-making without adding more noise.",
  },
  {
    label: "03",
    title: "Implement for real business use",
    description:
      "We put the chosen systems in place, connect them cleanly, and make sure they support daily work, not just a future roadmap.",
  },
];

const systemAreas = [
  {
    name: "Salesforce",
    detail:
      "Sales Cloud, Service Cloud, and Marketing Cloud aligned to the way your teams actually sell, support, and communicate.",
  },
  {
    name: "Excel",
    detail:
      "Dynamic spreadsheets, workflow automation, reporting improvements, and connected operational use cases that do more than pass files around.",
  },
  {
    name: "BI / Reporting",
    detail:
      "Dashboards, business reporting, and connected data models that create clearer decision visibility across the business.",
  },
  {
    name: "Applied AI",
    detail:
      "Practical AI layered into Salesforce, Excel, and reporting workflows where it reduces manual work and improves decisions.",
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <main>
        <section className="hero-section">
          <div className="hero-backdrop" />
          <div className="section-wrap hero-layout">
            <div className="hero-copy">
              <p className="section-kicker">Practical systems strategy for growing businesses</p>
              <h1>Cloud Next Wave</h1>
              <p className="hero-subtitle">Turn Your Systems Into Intelligent Decisions</p>
              <p className="hero-description">
                Most businesses have the tools — but not the clarity. We help you
                choose the right systems, connect them, and apply{" "}
                <span className="ai-emphasis">AI</span> where it creates real
                value.
              </p>
              <p className="hero-trust">
                Built for teams working across Salesforce, Excel, and reporting
                systems.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="mailto:info@cloudnextwaveai.com">
                  Book a Consultation
                </a>
                <a className="secondary-link" href="#how-we-help">
                  See How We Help
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Business outcomes">
              <p className="panel-label">What clients need most</p>
              <ul className="panel-list">
                <li>Clear decisions on what to buy, keep, or replace</li>
                <li>Systems that work together instead of side by side</li>
                <li>Less manual work and stronger reporting visibility</li>
                <li>AI use cases grounded in actual business value</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section muted-section" id="why-businesses-get-stuck">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="section-kicker">Why businesses get stuck</p>
              <h2>The problem usually is not a lack of software. It is a lack of fit.</h2>
              <p>
                Companies already have tools, incoming proposals, and growing pressure to
                use AI. What they often do not have is a practical view of what fits, what
                should connect, and what should not be added at all.
              </p>
            </div>

            <div className="friction-grid">
              {frictionPoints.map((item) => (
                <article className="friction-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="how-we-help">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="section-kicker">How we help</p>
              <h2>We start with practical business use cases, then implement what fits.</h2>
              <p>
                Cloud Next Wave helps businesses make better system decisions before time
                and money are lost on the wrong setup. The work stays focused on clarity,
                connection, and implementation that supports real operations.
              </p>
            </div>

            <div className="steps-grid">
              {deliverySteps.map((step) => (
                <article className="step-card" key={step.label}>
                  <p className="step-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section systems-section" id="systems">
          <div className="section-wrap systems-layout">
            <div className="section-heading systems-heading">
              <p className="section-kicker">Systems we work with</p>
              <h2>These are the environments where real decisions and operational friction happen.</h2>
              <p>
                We work where businesses often feel the most friction: CRM, spreadsheets,
                dashboards, reporting, and the operational layer where AI needs to prove
                its value.
              </p>
            </div>

            <div className="systems-grid">
              {systemAreas.map((area) => (
                <article className="system-card" key={area.name}>
                  <h3>{area.name}</h3>
                  <p>{area.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section cta-section">
          <div className="section-wrap cta-panel">
            <p className="section-kicker">Next step</p>
            <h2>If you have the tools but not enough clarity, that is where we start.</h2>
            <p>
              We help you decide what fits, connect what matters, and apply AI where it
              improves speed, visibility, and decision quality.
            </p>
            <a className="primary-button" href="mailto:info@cloudnextwaveai.com">
              Talk Through Your Systems
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-layout">
          <p>Cloud Next Wave</p>
          <a href="mailto:info@cloudnextwaveai.com">info@cloudnextwaveai.com</a>
        </div>
      </footer>
    </div>
  );
}
