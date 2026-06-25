'use client';

import { ShieldCheck, Truck, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './TrustSection.css';

const CARDS = [
  {
    icon: ShieldCheck,
    title: 'Certified Purity',
    body: '7-stage RO + UV purification. ISO & FSSAI certified water testing at every batch.',
    accent: '#3B82F6',
  },
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    body: 'Order before 2 PM and receive your water the very same day — no waiting.',
    accent: '#06B6D4',
  },
  {
    icon: MapPin,
    title: 'Wide Coverage',
    body: 'Serving 50+ neighbourhoods and major corporate parks across the city.',
    accent: '#8B5CF6',
  },
  {
    icon: Users,
    title: '20+ Years of Trust',
    body: 'A legacy built on delivering safe, clean water to over 10,000 happy families.',
    accent: '#10B981',
  },
];

const STATS = [
  { value: '10K+', label: 'Happy Families' },
  { value: '50+',  label: 'Service Areas' },
  { value: '20+',  label: 'Years of Trust' },
  { value: '4.9',  label: 'Average Rating' },
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 14 },
  },
};

export default function TrustSection() {
  return (
    <section className="trust section bg-panel" aria-labelledby="trust-heading">
      {/* Aurora background */}
      <div className="trust__aurora trust__aurora--1" aria-hidden="true" />
      <div className="trust__aurora trust__aurora--2" aria-hidden="true" />

      <div className="container">
        {/* Heading */}
        <motion.div
          className="trust__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="h2" id="trust-heading">
            Why Choose <span className="gradient-text">Amirita</span> Water?
          </h2>
          <p className="lead trust__subheading">
            We don&apos;t just deliver water — we deliver health, trust, and
            peace of mind to thousands of homes every single day.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="trust__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {CARDS.map(({ icon: Icon, title, body, accent }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="premium-card trust__card group"
            >
              <div className="icon-circle trust__icon" style={{ '--card-accent': accent }}>
                <Icon size={26} aria-hidden="true" />
              </div>
              <h3 className="h3 trust__card-title">{title}</h3>
              <p className="body trust__card-body">{body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="trust__stats"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="trust__stat">
              <span className="trust__stat-value gradient-text">{value}</span>
              <span className="trust__stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
