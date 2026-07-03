import { useState, useEffect } from 'react';
import './App.css';

/* ── Policy Sections Data ───────────────────────────────── */
const CONTACT_EMAIL = 'ahmedhassanmessi111@gmail.com';
const LAST_UPDATED = 'July 4, 2026';

const policySections = [
  {
    id: 'introduction',
    number: 'Section 01',
    icon: '📄',
    title: 'Introduction',
    content: (
      <>
        <p>
          Welcome to <strong>Tripzy</strong>. Your privacy is important to us. This Privacy Policy
          explains how Tripzy ("we," "us," or "our") collects, uses, stores, and protects your
          information when you use our mobile application.
        </p>
        <p>
          By using Tripzy, you agree to the practices described in this Privacy Policy. If you do not
          agree with this policy, please do not use our app.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    number: 'Section 02',
    icon: '📋',
    title: 'Information We Collect',
    content: (
      <>
        <p>
          We collect information to provide, maintain, and improve the Tripzy experience. The types
          of information we may collect include:
        </p>
        <ul>
          <li>Account and profile information (name, email address, profile picture)</li>
          <li>Location data (GPS coordinates during active trip tracking)</li>
          <li>Trip and route data (distance, duration, speed, and travel path)</li>
          <li>Device information (device model, operating system version, unique identifiers)</li>
          <li>Usage data (app interactions, feature usage patterns)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'location-data',
    number: 'Section 03',
    icon: '📍',
    title: 'Location Data',
    content: (
      <>
        <p>
          Tripzy may request <strong>location permission</strong> to track your trips and routes.
          Location data is collected only when you actively use the trip tracking features.
        </p>
        <p>
          Your location data is used <strong>solely for trip tracking features</strong>, including
          recording routes, calculating distance, and displaying your travel path on the map. We do
          not track your location in the background unless you have explicitly enabled background
          tracking for an active trip.
        </p>
        <p>
          You can <strong>disable location permissions</strong> at any time from your device settings.
          Disabling location access will limit certain trip tracking functionalities.
        </p>
      </>
    ),
  },
  {
    id: 'account-profile',
    number: 'Section 04',
    icon: '👤',
    title: 'Account & Profile Information',
    content: (
      <>
        <p>
          When you create a Tripzy account, we may collect your name, email address, and other
          profile details you choose to provide. This information helps personalize your experience
          and enables features such as leaderboards and social interactions within the app.
        </p>
        <p>
          You may update or modify your profile information at any time through the app settings. To
          request full account or data deletion, please contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-inline">{CONTACT_EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'camera-media',
    number: 'Section 05',
    icon: '📸',
    title: 'Camera & Media Library Access',
    content: (
      <>
        <p>
          Tripzy may request access to your <strong>camera and media library</strong>. These
          permissions are used <strong>only when you choose to upload or change your profile
          picture</strong>.
        </p>
        <p>
          We do not access your camera or media library for any other purpose. Photos selected for
          your profile are stored securely and are not shared with third parties without your consent.
        </p>
        <p>
          You can <strong>revoke camera and media permissions</strong> at any time through your device
          settings.
        </p>
      </>
    ),
  },
  {
    id: 'notifications',
    number: 'Section 06',
    icon: '🔔',
    title: 'Notifications',
    content: (
      <>
        <p>
          Tripzy may request <strong>notification permission</strong> to send you relevant updates.
          Notifications may include:
        </p>
        <ul>
          <li>Trip reminders and updates</li>
          <li>Daily statistics and activity summaries</li>
          <li>Leaderboard-related notifications</li>
          <li>Important app announcements</li>
        </ul>
        <p>
          You can <strong>disable notifications</strong> at any time from your device settings. We
          will never send unsolicited marketing notifications without your explicit opt-in consent.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    number: 'Section 07',
    icon: '⚙️',
    title: 'How We Use Information',
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain the Tripzy app</li>
          <li>Track and record trips, routes, and travel statistics</li>
          <li>Personalize your experience and display relevant content</li>
          <li>Send notifications, reminders, and activity updates</li>
          <li>Improve app performance, features, and user experience</li>
          <li>Ensure the security and integrity of the app</li>
          <li>Respond to your inquiries and support requests</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-storage',
    number: 'Section 08',
    icon: '🔒',
    title: 'How We Store & Protect Data',
    content: (
      <>
        <p>
          We implement industry-standard security measures to protect your personal information,
          including encryption, secure servers, and access controls.
        </p>
        <p>
          While we strive to protect your data, no method of electronic transmission or storage is
          100% secure. We cannot guarantee absolute security but are committed to taking all
          reasonable steps to safeguard your information.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    number: 'Section 09',
    icon: '🤝',
    title: 'Sharing of Information',
    content: (
      <>
        <p>
          We do <strong>not sell, rent, or trade</strong> your personal information to third parties.
          We may share information only in the following circumstances:
        </p>
        <ul>
          <li>With your explicit consent</li>
          <li>With trusted service providers who assist in operating the app (under strict confidentiality agreements)</li>
          <li>To comply with legal obligations, enforce our policies, or protect rights and safety</li>
          <li>In connection with a merger, acquisition, or sale of assets (with prior notice)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-retention',
    number: 'Section 10',
    icon: '🗄️',
    title: 'Data Retention',
    content: (
      <>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes outlined
          in this Privacy Policy, or as required by law.
        </p>
        <p>
          If you wish to delete your account or request removal of your data, please contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-inline">{CONTACT_EMAIL}</a>. We
          will process your request within a reasonable timeframe and in accordance with applicable
          laws.
        </p>
      </>
    ),
  },
  {
    id: 'user-rights',
    number: 'Section 11',
    icon: '✅',
    title: 'User Rights',
    content: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access and review the personal data we hold about you</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your personal data and account</li>
          <li>Withdraw consent for data processing at any time</li>
          <li>Disable app permissions (location, camera, notifications) from your device settings</li>
          <li>Opt out of non-essential notifications</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-inline">{CONTACT_EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    number: 'Section 12',
    icon: '🧒',
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Tripzy is not intended for children under the age of 13. We do not knowingly collect
          personal information from children under 13 years of age.
        </p>
        <p>
          If we become aware that we have inadvertently collected personal data from a child under 13,
          we will take steps to delete that information as promptly as possible. If you believe a
          child has provided us with personal information, please contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-inline">{CONTACT_EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    number: 'Section 13',
    icon: '🔗',
    title: 'Third-Party Services',
    content: (
      <>
        <p>
          Tripzy may integrate with third-party services such as mapping providers, analytics
          platforms, and authentication services. These third-party services have their own privacy
          policies, and we encourage you to review them.
        </p>
        <p>
          We are not responsible for the privacy practices of third-party services. We select our
          partners carefully and work only with services that maintain reasonable data protection
          standards.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    number: 'Section 14',
    icon: '📝',
    title: 'Changes to This Privacy Policy',
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, or legal requirements. When we make changes, we will update the "Last Updated"
          date at the top of this page.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically. Continued use of Tripzy after
          changes have been posted constitutes your acceptance of the updated policy.
        </p>
      </>
    ),
  },
];

/* ── Header Component ───────────────────────────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="header-inner">
        <div className="logo">
          <div className="logo-icon" aria-hidden="true">T</div>
          <span className="logo-text">Tripzy</span>
        </div>
        <span className="header-badge">Privacy Policy</span>
      </div>
    </header>
  );
}

/* ── Hero Component ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-pill">
          <span className="dot" aria-hidden="true"></span>
          Official Document
        </div>
        <h1>
          <span className="gradient-text">Tripzy</span> Privacy Policy
        </h1>
        <p className="hero-subtitle">
          Tripzy helps you track trips, routes, distance, and travel activity. We are committed to
          protecting your privacy and being transparent about how we handle your data.
        </p>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="icon" aria-hidden="true">📅</span>
            Last updated: {LAST_UPDATED}
          </div>
          <div className="hero-meta-item">
            <span className="icon" aria-hidden="true">📧</span>
            {CONTACT_EMAIL}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Policy Card Component ──────────────────────────────── */
function PolicyCard({ section, index }) {
  return (
    <article
      className="policy-card"
      id={section.id}
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="policy-card-header">
        <div className="policy-card-icon" aria-hidden="true">{section.icon}</div>
        <div>
          <span className="policy-card-number">{section.number}</span>
          <h2 className="policy-card-title">{section.title}</h2>
        </div>
      </div>
      {section.content}
    </article>
  );
}

/* ── Contact Card Component ─────────────────────────────── */
function ContactCard() {
  return (
    <section className="contact-card" id="contact">
      <h2>Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or your
        personal data, please don't hesitate to reach out.
      </p>
      <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link" id="contact-email-link">
        <span aria-hidden="true">✉️</span>
        {CONTACT_EMAIL}
      </a>
    </section>
  );
}

/* ── Footer Component ───────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <p className="footer-text">© 2026 Tripzy. All rights reserved.</p>
        <div className="footer-links">
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
}

/* ── App ────────────────────────────────────────────────── */
function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="main-container" id="policy-content">
        {policySections.map((section, i) => (
          <PolicyCard key={section.id} section={section} index={i} />
        ))}
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
