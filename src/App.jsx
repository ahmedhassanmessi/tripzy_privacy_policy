import { useState, useEffect } from 'react';
import './App.css';

/* ── Policy Sections Data ───────────────────────────────── */
const CONTACT_EMAIL = 'ahmedhassanmessi111@gmail.com';
const LAST_UPDATED = 'September 15, 2026';

const policySections = [
  {
    id: 'introduction',
    number: 'Section 01',
    icon: '📄',
    title: 'Introduction',
    content: (
      <>
        <p>
          This Privacy Policy applies to <strong>Tripzo</strong>, the mobile app developed and
          operated by <strong>AH APP STUDIOS</strong> ("we," "us," or "our").
          The Android package identifier is <strong>com.ahmedhassan.tripzy</strong>.
          Tripzo was previously named Tripzy; this policy covers the same app under both names.
          It explains how we collect, use, store, and share information when you use Tripzo.
        </p>
        <p>
          We ask for consent and device permissions before recording a trip. You can decline
          location access and continue using features that do not need location. For privacy
          questions or requests, contact AH APP STUDIOS at the email below.
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
          We collect information to provide, maintain, and improve the Tripzo experience. The types
          of information we may collect include:
        </p>
        <ul>
          <li>Account and profile information (name, email address, profile picture)</li>
          <li>Location data (GPS coordinates during active trip tracking)</li>
          <li>Trip and route data (distance, duration, speed, and travel path)</li>
          <li>Device information (device model, operating system version, unique identifiers)</li>
          <li>Vehicle details, trip scores, achievements, and leaderboard statistics</li>
          <li>Purchase and subscription information, including transaction identifiers and entitlement status</li>
          <li>Push notification tokens and notification preferences</li>
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
          Tripzo collects <strong>precise location</strong> to record your route, distance, speed,
          and trip statistics during a trip you start, even when the app is in the background
          or your screen is locked. Tracking stops when you stop the trip.
        </p>
        <p>
          Location samples are stored on your device and uploaded to your account through our
          Supabase service for trip history and route display. Derived trip statistics are used
          for scores and leaderboards. We do not use location for advertising.
          On Android, a foreground service with an ongoing trip-tracking notification keeps
          a user-started trip recording when you switch apps or lock your screen. The updated
          Android app requests location while using the app; it does not request all-the-time
          location access. We do not automatically detect or start trips.
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
          When you create a Tripzo account, we may collect your name, email address, and other
          profile details you choose to provide. This information helps personalize your experience
          and enables features such as leaderboards and social interactions within the app.
        </p>
        <p>
          You may update or modify your profile information at any time through the app settings. To
          delete your account and associated data, use Settings → Delete Account in Tripzo, or contact us at{' '}
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
          Tripzo requests <strong>camera access</strong> only when you choose to take a profile
          picture. You can also select a photo with the system photo picker; Tripzo receives
          the photo you select rather than access to your entire photo library.
        </p>
        <p>
          Selected profile photos are uploaded to our storage provider, Supabase. Your profile
          photo and display name can be visible to other users in profiles and leaderboards.
          You can choose to skip adding a profile photo.
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
          Tripzo may request <strong>notification permission</strong> to send you relevant updates.
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
          <li>Provide, operate, and maintain the Tripzo app</li>
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
          Account, profile, and trip data are hosted using Supabase. Active and offline trips
          are also stored on your device until they can be synchronized. Network requests
          use HTTPS and backend access controls restrict access to account data.
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
          <li>With service providers needed to operate the app, as described below</li>
          <li>With other users: your display name, profile photo, country, and ranked trip statistics may appear in profiles and leaderboards</li>
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
          To delete your account and associated profile, vehicle, trip, and route data, use Settings → Delete Account, or email an account deletion request to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-inline">{CONTACT_EMAIL}</a>. Include the email address associated with your Tripzo account so we can verify the request.
          Records required for legal, fraud prevention, or payment obligations may be retained
          for those purposes. Account deletion does not cancel an active store subscription;
          manage subscriptions in Google Play or the App Store.
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
          Tripzo is not intended for children under the age of 13. We do not knowingly collect
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
          Tripzo uses Supabase for authentication, database, and photo storage; Google Sign-In
          and Sign in with Apple for optional account login; Google Maps or Apple Maps for maps;
          Firebase Cloud Messaging for push notifications; and RevenueCat with Google Play
          or the App Store for purchases and subscription validation. These services process
          information needed to provide their functions, such as account identifiers, map
          requests, device or notification identifiers, and purchase records. We do not receive
          your full payment-card details.
        </p>
        <p>
          Their privacy policies are available from Supabase, Google, Apple, and RevenueCat.
          Service providers may process data in countries other than your country of residence.
          Contact AH APP STUDIOS with questions about how these services are used in Tripzo.
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
          We encourage you to review this Privacy Policy periodically. If a change requires additional consent, we will ask before using your data for the new purpose.
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
          <span className="logo-text">Tripzo</span>
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
          <span className="gradient-text">Tripzo</span> Privacy Policy
        </h1>
        <p className="hero-subtitle">
          Tripzo is developed and operated by AH APP STUDIOS.
          Android app: com.ahmedhassan.tripzy. This policy explains how Tripzo handles your data.
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
        <p className="footer-text">© 2026 AH APP STUDIOS. Tripzo. All rights reserved.</p>
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
