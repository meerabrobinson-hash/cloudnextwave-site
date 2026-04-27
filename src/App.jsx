import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    key: "salesforce",
    navLabel: "Salesforce",
    title: "Salesforce",
    summary:
      "Clean up CRM workflows, adoption, automation, reporting, and AI-supported next steps.",
    improvements: [
      "Workflow cleanup across sales and service processes.",
      "Reporting confidence and dashboard visibility.",
      "AI-supported summaries, follow-up, and next steps.",
    ],
    bestFit:
      "Best for teams with Salesforce in place but weak adoption, inconsistent reporting, or too much manual follow-up.",
    inquiry:
      "We need help improving Salesforce workflows, reporting confidence, adoption, and practical AI support.",
  },
  {
    key: "workday",
    navLabel: "Workday",
    title: "Workday",
    summary:
      "Reduce approval delays, ownership confusion, reporting gaps, and process friction.",
    improvements: [
      "Approval flow review and delay reduction.",
      "Ownership clarity across HR or finance operations.",
      "Reporting support and exception visibility.",
    ],
    bestFit:
      "Best for teams where approvals, handoffs, reporting, or service workflows slow employee or finance operations.",
    inquiry:
      "We need help improving Workday-related approvals, reporting, ownership, and operational flow.",
  },
  {
    key: "excel",
    navLabel: "Excel Automation",
    title: "Excel Automation",
    summary:
      "Move fragile spreadsheet work into cleaner, repeatable, connected processes.",
    improvements: [
      "Workbook structure and formula cleanup.",
      "Recurring report and handoff automation.",
      "Connected use cases across CRM, reporting, or operations.",
    ],
    bestFit:
      "Best for teams running important operational work through spreadsheets that are slow, fragile, or hard to trust.",
    inquiry:
      "We need help reducing spreadsheet dependency and turning manual Excel work into cleaner processes.",
  },
  {
    key: "reporting",
    navLabel: "Reporting & BI",
    title: "Reporting & BI",
    summary: "Build dashboards and reporting views leaders can actually trust.",
    improvements: [
      "Dashboard planning around real operating questions.",
      "KPI cleanup and reporting trust rebuild.",
      "Executive-ready views and decision support.",
    ],
    bestFit:
      "Best for teams with reports in place but no consistent source of truth for executive decisions.",
    inquiry:
      "We need better dashboards, cleaner KPI visibility, and reporting leaders can trust.",
  },
];

const fixCards = [
  {
    title: "Manual work",
    text: "Too much copying, chasing, and cleanup.",
  },
  {
    title: "Messy reporting",
    text: "Numbers exist, but trust is low.",
  },
  {
    title: "Slow handoffs",
    text: "Work moves without clear ownership.",
  },
  {
    title: "Underused systems",
    text: "Tools are live, but value lags.",
  },
  {
    title: "AI without direction",
    text: "Ideas exist, but use cases are unclear.",
  },
];

const pricingPackages = [
  {
    title: "Systems Audit",
    price: "$1,500",
    description:
      "90-minute review of workflows, reporting gaps, manual work, and system friction. Includes action roadmap.",
  },
  {
    title: "Workflow Fix Sprint",
    price: "Starting at $5,000",
    description: "Repair one broken operational process end-to-end.",
  },
  {
    title: "Reporting Clarity Package",
    price: "Starting at $3,500",
    description: "Dashboard, KPI, and reporting cleanup for clearer decisions.",
  },
  {
    title: "Ongoing Advisory",
    price: "Starting at $3,000/mo",
    description:
      "Monthly support for systems, operations, AI roadmap, and execution.",
  },
];

const trustItems = [
  "Salesforce Optimization",
  "Workday Workflow Support",
  "Excel Automation",
  "Reporting & BI",
  "Practical AI Execution",
];

const heroItems = [
  "Faster workflows",
  "Cleaner reporting",
  "Less manual work",
  "Better visibility",
  "Practical AI support",
];

const resultCards = [
  "Less spreadsheet dependence",
  "Faster approvals",
  "Better executive visibility",
  "Higher Salesforce adoption",
  "Stronger ownership across teams",
  "Cleaner operations",
  "Better decisions sooner",
  "AI used where it saves time",
];

const whyCards = [
  "Practical fixes, not slide decks",
  "Systems thinking across teams",
  "AI only where it creates value",
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgorbjlp";

const trackCtaClick = ({ label, location, destination }) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "cta_click", {
    event_category: "CTA",
    event_label: label,
    cta_label: label,
    cta_location: location,
    cta_destination: destination,
  });
};

function BrandLogo() {
  return (
    <svg
      className="brand-logo"
      viewBox="0 0 320 136"
      role="img"
      aria-labelledby="brand-logo-title"
    >
      <title id="brand-logo-title">Cloud Next Wave logo</title>
      <defs>
        <linearGradient id="brandGold" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f3c54a" />
          <stop offset="100%" stopColor="#e0a81b" />
        </linearGradient>
      </defs>

      <path
        d="M78 56c3-15 17-25 34-25 12 0 22 5 29 14 4-3 10-5 16-5 15 0 27 12 27 27 0 2 0 4-1 6"
        fill="none"
        stroke="url(#brandGold)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d="M72 62c-11 0-20 9-20 20s9 20 20 20h108c16 0 29-13 29-29"
        fill="none"
        stroke="url(#brandGold)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <text
        x="159"
        y="76"
        fill="#f8ddb0"
        fontFamily="Avenir Next, Segoe UI, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="0.18em"
        textAnchor="middle"
      >
        AI
      </text>
      <path
        d="M116 91c13 8 29 8 42 0 10-6 22-6 32 0 13 8 29 8 42 0"
        fill="none"
        stroke="url(#brandGold)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.5"
      />
      <text
        x="160"
        y="124"
        fill="#f5f7fb"
        fontFamily="Avenir Next, Segoe UI, sans-serif"
        fontSize="22"
        fontWeight="650"
        letterSpacing="0.02em"
        textAnchor="middle"
      >
        Cloud Next Wave
      </text>
    </svg>
  );
}

function CloseButton({ onClick }) {
  return (
    <button className="modal-close" type="button" onClick={onClick} aria-label="Close">
      x
    </button>
  );
}

export default function App() {
  const [activeSolution, setActiveSolution] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const solutionsRef = useRef(null);

  const closeModal = () => {
    setActiveModal(null);
  };

  const openSolution = (solution, trackingDetails) => {
    if (trackingDetails) {
      trackCtaClick(trackingDetails);
    }

    setActiveSolution(solution);
    setActiveModal("solution");
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const openPricing = (trackingDetails) => {
    if (trackingDetails) {
      trackCtaClick(trackingDetails);
    }

    setActiveModal("pricing");
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const openAbout = (trackingDetails) => {
    if (trackingDetails) {
      trackCtaClick(trackingDetails);
    }

    setActiveModal("about");
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const openContact = (trackingDetails) => {
    if (trackingDetails) {
      trackCtaClick(trackingDetails);
    }

    setActiveModal("contact");
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setIsSolutionsOpen(false);
        setIsMobileMenuOpen(false);
        return;
      }

      if (!dropdownRef.current?.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSolutionsOpen(false);
        setIsMobileMenuOpen(false);
        closeModal();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-open-modal", Boolean(activeModal));

    return () => {
      document.body.classList.remove("has-open-modal");
    };
  }, [activeModal]);

  const scrollToSolutions = (trackingDetails) => {
    if (trackingDetails) {
      trackCtaClick(trackingDetails);
    }

    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
    solutionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setFieldErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });

    setFormStatus((current) =>
      current.type ? { type: "", message: "" } : current,
    );
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    trackCtaClick({
      label: "Submit Consultation",
      location: "contact_modal",
      destination: "formspree_submission",
    });

    const trimmedData = {
      fullName: formData.fullName.trim(),
      companyName: formData.companyName.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    const trimmedEmail = formData.email.trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    const nextFieldErrors = {};

    if (!trimmedData.fullName) {
      nextFieldErrors.fullName = true;
    }

    if (!trimmedData.companyName) {
      nextFieldErrors.companyName = true;
    }

    if (!trimmedData.email || !emailIsValid) {
      nextFieldErrors.email = true;
    }

    if (!trimmedData.message) {
      nextFieldErrors.message = true;
    }

    if (Object.keys(nextFieldErrors).length) {
      setFieldErrors(nextFieldErrors);
      setFormStatus({
        type: "error",
        message: "Please complete all fields with a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });
    setFieldErrors({});

    const submission = {
      "Full Name": trimmedData.fullName,
      Company: trimmedData.companyName,
      Email: trimmedData.email,
      "Current Challenge": trimmedData.message,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(submission),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree request failed.");
      }

      setFormStatus({
        type: "success",
        message: "Thank you. We’ll respond within 1 business day.",
      });

      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please email info@cloudnextwaveai.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const discussSolution = () => {
    trackCtaClick({
      label: "Discuss This Focus",
      location: "solution_modal",
      destination: "contact_modal",
    });

    if (activeSolution) {
      setFormData((current) => ({
        ...current,
        message: current.message.trim() || activeSolution.inquiry,
      }));
      setFormStatus({ type: "", message: "" });
    }

    setActiveModal("contact");
  };

  const handleOverlayMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="section-wrap header-bar" ref={headerRef}>
          <a className="brand-lockup" href="#top" aria-label="Cloud Next Wave home">
            <BrandLogo />
          </a>

          <button
            className={`mobile-nav-toggle${isMobileMenuOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Toggle navigation</span>
          </button>

          <div className={`header-controls${isMobileMenuOpen ? " is-open" : ""}`}>
            <nav className="top-nav" aria-label="Primary" id="primary-navigation">
              <a
                href="#top"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSolutionsOpen(false);
                }}
              >
                Home
              </a>

              <div className="nav-dropdown" ref={dropdownRef}>
                <button
                  className={`nav-dropdown-trigger${isSolutionsOpen ? " is-open" : ""}`}
                  type="button"
                  aria-expanded={isSolutionsOpen}
                  aria-controls="solutions-menu"
                  onClick={() => setIsSolutionsOpen((open) => !open)}
                >
                  Solutions <span>▼</span>
                </button>

                {isSolutionsOpen ? (
                  <div className="dropdown-menu" id="solutions-menu" role="menu">
                    {solutions.map((solution) => (
                      <button
                        className="dropdown-item"
                        key={solution.key}
                        type="button"
                        onClick={() => openSolution(solution)}
                      >
                        {solution.navLabel}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <button
                className="nav-link-button"
                type="button"
                onClick={() =>
                  openPricing({
                    label: "Pricing",
                    location: "header_nav",
                    destination: "pricing_modal",
                  })
                }
              >
                Pricing
              </button>
              <button
                className="nav-link-button"
                type="button"
                onClick={() =>
                  openAbout({
                    label: "About",
                    location: "header_nav",
                    destination: "about_modal",
                  })
                }
              >
                About
              </button>
              <button
                className="nav-link-button"
                type="button"
                onClick={() =>
                  openContact({
                    label: "Contact",
                    location: "header_nav",
                    destination: "contact_modal",
                  })
                }
              >
                Contact
              </button>
            </nav>

            <button
              className="header-cta"
              type="button"
              onClick={() =>
                openContact({
                  label: "Book Free Strategy Call",
                  location: "header",
                  destination: "contact_modal",
                })
              }
            >
              Book Free Strategy Call
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section compact-hero">
          <div className="hero-backdrop" />
          <div className="section-wrap hero-layout">
            <div className="hero-copy">
              <p className="section-kicker">OPERATIONS • SYSTEMS • AI EXECUTION</p>
              <h1>Turn broken systems into growth engines.</h1>
              <p className="hero-description">
                Cloud Next Wave helps growing businesses streamline operations,
                improve Salesforce and Workday workflows, reduce spreadsheet
                dependency, strengthen reporting, and apply AI where it creates
                measurable business value.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  type="button"
                  onClick={() =>
                    openContact({
                      label: "Book Free Strategy Call",
                      location: "hero",
                      destination: "contact_modal",
                    })
                  }
                >
                  Book Free Strategy Call
                </button>
                <button
                  className="secondary-link hero-secondary"
                  type="button"
                  onClick={() =>
                    scrollToSolutions({
                      label: "Explore Solutions",
                      location: "hero",
                      destination: "solutions_section",
                    })
                  }
                >
                  <span>Explore Solutions</span>
                  <span className="hero-secondary-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Where value is created">
              <p className="panel-label">Where value is created</p>
              <div className="hero-value-list">
                {heroItems.map((item) => (
                  <div className="hero-value-row" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="trust-bar-section" aria-label="Consulting capabilities">
          <div className="section-wrap trust-bar">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="content-section quick-section">
          <div className="section-wrap">
            <div className="compact-heading">
              <p className="section-kicker">WHAT WE FIX</p>
              <h2>Where businesses get stuck.</h2>
            </div>

            <div className="quick-grid">
              {fixCards.map((card, index) => (
                <article className="quick-card" key={card.title}>
                  <span className="card-mark" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section solution-preview-section" id="solutions" ref={solutionsRef}>
          <div className="section-wrap">
            <div className="compact-heading">
              <p className="section-kicker">Solutions</p>
              <h2>Choose where you want clarity first.</h2>
            </div>

            <div className="solution-grid">
              {solutions.map((solution) => (
                <article className="solution-card" key={solution.key}>
                  <span className="solution-icon" aria-hidden="true" />
                  <h3>{solution.title}</h3>
                  <p>{solution.summary}</p>
                  <button
                    className="service-link"
                    type="button"
                    onClick={() =>
                      openSolution(solution, {
                        label: "View details",
                        location: "solutions_grid",
                        destination: "solution_modal",
                      })
                    }
                  >
                    View details
                  </button>
                </article>
              ))}
            </div>

            <button
              className="pricing-mini-link"
              type="button"
              onClick={() =>
                openPricing({
                  label: "View starting packages",
                  location: "solutions_section",
                  destination: "pricing_modal",
                })
              }
            >
              View starting packages
            </button>
          </div>
        </section>

        <section className="content-section results-section">
          <div className="section-wrap">
            <div className="compact-heading">
              <p className="section-kicker">WHAT CHANGES AFTER THE WORK</p>
              <h2>The business feels lighter, faster, clearer.</h2>
            </div>

            <div className="results-grid">
              {resultCards.map((result) => (
                <article className="result-card" key={result}>
                  <p>{result}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section why-section">
          <div className="section-wrap why-layout-premium">
            <div className="compact-heading">
              <p className="section-kicker">WHY CLOUD NEXT WAVE</p>
              <h2>Business judgment. Technical execution.</h2>
              <p>
                We identify friction, prioritize what matters, and help fix it
                inside real operating environments.
              </p>
            </div>

            <div className="why-grid">
              {whyCards.map((item) => (
                <article className="why-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section final-cta-section">
          <div className="section-wrap">
            <div className="final-cta-card">
              <p className="section-kicker">Start here</p>
              <h2>Ready to find the first issue worth fixing?</h2>
              <p>Start with one conversation.</p>
              <button
                className="primary-button"
                type="button"
                onClick={() =>
                  openContact({
                    label: "Book Free Strategy Call",
                    location: "final_cta",
                    destination: "contact_modal",
                  })
                }
              >
                Book Free Strategy Call
              </button>
            </div>
          </div>
        </section>
      </main>

      {activeModal ? (
        <div className="modal-backdrop" onMouseDown={handleOverlayMouseDown}>
          {activeModal === "solution" && activeSolution ? (
            <section className="modal-panel service-modal" aria-modal="true" role="dialog">
              <CloseButton onClick={closeModal} />
              <p className="section-kicker">Selected focus</p>
              <h2>{activeSolution.title}</h2>

              <div className="solution-detail-grid">
                <div className="modal-block">
                  <p className="detail-label">What we improve</p>
                  <ul className="detail-list">
                    {activeSolution.improvements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-block">
                  <p className="detail-label">Best fit</p>
                  <p>{activeSolution.bestFit}</p>
                </div>
              </div>

              <button className="primary-button modal-action" type="button" onClick={discussSolution}>
                Discuss This Focus
              </button>
            </section>
          ) : null}

          {activeModal === "pricing" ? (
            <section className="modal-panel pricing-modal" aria-modal="true" role="dialog">
              <CloseButton onClick={closeModal} />
              <p className="section-kicker">Starting packages</p>
              <h2>Low-risk ways to start.</h2>

              <div className="pricing-list">
                {pricingPackages.map((item) => (
                  <div className="pricing-row" key={item.title}>
                    <div>
                      <span>{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>

              <p className="pricing-note">
                Final scope depends on system complexity and business priorities.
              </p>

              <button
                className="primary-button modal-action"
                type="button"
                onClick={() =>
                  openContact({
                    label: "Book Free Strategy Call",
                    location: "pricing_modal",
                    destination: "contact_modal",
                  })
                }
              >
                Book Free Strategy Call
              </button>
            </section>
          ) : null}

          {activeModal === "about" ? (
            <section className="modal-panel about-modal" aria-modal="true" role="dialog">
              <CloseButton onClick={closeModal} />
              <p className="section-kicker">About</p>
              <h2>About Cloud Next Wave</h2>

              <div className="about-modal-content">
                <section className="about-modal-section">
                  <p className="detail-label">Why We Started</p>
                  <p>
                    Many businesses invest in systems like Salesforce, Workday,
                    spreadsheets, and reporting tools, yet still struggle with
                    delays, manual work, unclear ownership, and underused
                    technology.
                  </p>
                  <p>
                    Cloud Next Wave was created to help companies simplify
                    operations, improve visibility, and apply automation or AI
                    only where it creates measurable value.
                  </p>
                  <p>
                    We believe businesses do not need more software. They need
                    better execution.
                  </p>
                </section>

                <section className="about-modal-section">
                  <p className="detail-label">Our Approach</p>
                  <ul className="detail-list about-approach-list">
                    <li>Clarity First</li>
                    <li>Execution Over Theory</li>
                    <li>AI With Purpose</li>
                  </ul>
                </section>
              </div>

              <button
                className="primary-button modal-action"
                type="button"
                onClick={() =>
                  openContact({
                    label: "Book Free Strategy Call",
                    location: "about_modal",
                    destination: "contact_modal",
                  })
                }
              >
                Book Free Strategy Call
              </button>
            </section>
          ) : null}

          {activeModal === "contact" ? (
            <section className="modal-panel contact-modal" aria-modal="true" role="dialog">
              <CloseButton onClick={closeModal} />
              <p className="section-kicker">REQUEST CONSULTATION</p>
              <h2>Where is growth being slowed today?</h2>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label className="form-field">
                  <span>Full Name</span>
                  <input
                    className={fieldErrors.fullName ? "input-error" : ""}
                    type="text"
                    name="fullName"
                    placeholder="Jane Smith"
                    value={formData.fullName}
                    onChange={handleContactChange}
                    required
                    aria-invalid={Boolean(fieldErrors.fullName)}
                  />
                </label>

                <label className="form-field">
                  <span>Company</span>
                  <input
                    className={fieldErrors.companyName ? "input-error" : ""}
                    type="text"
                    name="companyName"
                    placeholder="Acme Operations Group"
                    value={formData.companyName}
                    onChange={handleContactChange}
                    required
                    aria-invalid={Boolean(fieldErrors.companyName)}
                  />
                </label>

                <label className="form-field">
                  <span>Email</span>
                  <input
                    className={fieldErrors.email ? "input-error" : ""}
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleContactChange}
                    required
                    aria-invalid={Boolean(fieldErrors.email)}
                  />
                </label>

                <label className="form-field">
                  <span>Current Challenge</span>
                  <textarea
                    className={fieldErrors.message ? "input-error" : ""}
                    name="message"
                    rows="4"
                    placeholder="Reporting is slow, approvals are messy, and we need a smarter path forward."
                    value={formData.message}
                    onChange={handleContactChange}
                    required
                    aria-invalid={Boolean(fieldErrors.message)}
                  />
                </label>

                {formStatus.message ? (
                  <p className={`form-message is-${formStatus.type}`}>
                    {formStatus.message}
                  </p>
                ) : null}

                <button className="primary-button contact-submit" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Consultation"}
                </button>
              </form>
            </section>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
