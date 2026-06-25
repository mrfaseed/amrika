import Image from 'next/image';
import { Target, Eye, Award, Users, ShieldCheck, Leaf } from 'lucide-react';
import './about.css';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Amirita Water Plant — our story, mission, vision, and 20+ years of delivering certified pure drinking water.',
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Purity',
    body: 'Every batch undergoes 7-stage RO + UV purification and third-party lab testing before dispatch.',
  },
  {
    icon: Users,
    title: 'Customer First',
    body: 'From same-day delivery to flexible subscriptions — everything we do is designed around your convenience.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    body: 'Our returnable 20L can system reduces single-use plastic waste and supports a greener tomorrow.',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    body: 'FSSAI licensed, ISO compliant, and regularly audited. Our certifications are not just paperwork.',
  },
];

const STATS = [
  { value: '2003', label: 'Founded' },
  { value: '10K+', label: 'Families Served' },
  { value: '50+',  label: 'Service Areas' },
  { value: '7',    label: 'Purification Stages' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Page Banner */}
      <header className="page-banner" aria-labelledby="about-heading">
        <div className="container">
          <p className="badge about__eyebrow">Our Story</p>
          <h1 className="h1 about__hero-title" id="about-heading">
            Purity. Trust. <span className="gradient-text">Delivered.</span>
          </h1>
          <p className="lead about__hero-sub">
            Over two decades of bringing certified pure drinking water to homes
            and businesses — one can at a time.
          </p>
        </div>
      </header>

      {/* Story Section */}
      <section className="section about__story-section" aria-labelledby="story-heading">
        <div className="container about__story-inner">
          <div className="about__story-content">
            <h2 className="h2 about__story-title" id="story-heading">Our Story</h2>
            <p className="body about__story-p">
              Founded in 2003 with a simple but powerful vision — every family
              deserves access to genuinely pure drinking water — Amirita Water
              Plant has grown from a small neighbourhood service into the
              region&apos;s most trusted water supplier.
            </p>
            <p className="body about__story-p">
              We utilise state-of-the-art Reverse Osmosis and Ultraviolet
              purification technologies ensuring every drop meets the highest
              quality standards. Our rigorous testing procedures guarantee
              optimal pH levels and essential minerals for your health.
            </p>
            <p className="body about__story-p">
              Today we proudly serve over 10,000 families, hundreds of corporate
              offices, and large-scale events — all with the same promise:
              <strong style={{ color: 'var(--text-primary)' }}> pure water, on time, every time.</strong>
            </p>
          </div>

          <div className="about__story-visual">
            <Image
              src="/images/water_delivery_hero.png"
              alt="Amirita Water — pure 20L water can"
              width={500}
              height={520}
              className="about__story-img"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="about__stats-strip bg-panel">
        <div className="container about__stats-grid">
          {STATS.map(({ value, label }) => (
            <div key={label} className="about__stat">
              <span className="about__stat-value gradient-text">{value}</span>
              <span className="about__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section" aria-labelledby="mv-heading">
        <div className="container">
          <h2 className="h2 about__section-title" id="mv-heading">
            Mission &amp; Vision
          </h2>
          <div className="about__mv-grid">
            <div className="glass-card about__mv-card">
              <div className="icon-circle about__mv-icon">
                <Target size={26} aria-hidden="true" />
              </div>
              <h3 className="h3 about__mv-title">Our Mission</h3>
              <p className="body">
                To deliver the highest quality, purified drinking water to every
                household and business, ensuring health, safety, and customer
                satisfaction at every interaction.
              </p>
            </div>
            <div className="glass-card about__mv-card">
              <div className="icon-circle about__mv-icon" style={{ '--card-accent': '#06B6D4' }}>
                <Eye size={26} aria-hidden="true" />
              </div>
              <h3 className="h3 about__mv-title">Our Vision</h3>
              <p className="body">
                To be the benchmark for water purity and environmental
                responsibility in the water supply industry — serving communities
                across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-panel" aria-labelledby="values-heading">
        <div className="container">
          <h2 className="h2 about__section-title" id="values-heading">
            What We Stand For
          </h2>
          <div className="about__values-grid">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="premium-card about__value-card">
                <div className="icon-circle about__value-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="h3 about__value-title">{title}</h3>
                <p className="body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
