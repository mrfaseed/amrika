import Link from 'next/link';
import Image from 'next/image';
import { Flame, ShieldCheck, Truck, CheckCircle2, MessageCircle } from 'lucide-react';
import TrustSection from '@/components/TrustSection';
import './Home.css';

/* TODO: Replace with your real WhatsApp number */
const WHATSAPP_URL =
  'https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20start%20my%20water%20delivery';

const HOW_STEPS = [
  {
    num: '1',
    title: 'Message us on WhatsApp',
    desc: 'Send "Hi" or your requirement directly to our verified business number.',
  },
  {
    num: '2',
    title: 'Confirm your order',
    desc: 'Share your location. We accept UPI, Cash on Delivery, or monthly subscriptions.',
  },
  {
    num: '3',
    title: 'Receive your water',
    desc: 'Our friendly delivery executive drops off sanitized 20L cans at your door.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        {/* ambient blobs */}
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />

        <div className="container hero__inner">
          {/* Left content */}
          <div className="hero__content">
            <div className="badge hero__badge">
              <Flame size={14} aria-hidden="true" />
              Premium 20L Water Delivery
            </div>

            <h1 className="h1 hero__title" id="hero-heading">
              Drinking Water<br />
              Delivered to <span className="gradient-text">You.</span>
            </h1>

            <p className="lead hero__sub">
              Experience the highest standard of hydration. Pure RO + UV
              treated water delivered same-day to your doorstep.
            </p>

            <div className="hero__actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                id="hero-order-btn"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Order via WhatsApp
              </a>
              <Link href="/products" className="btn btn-outline btn-lg">
                View Products &amp; Pricing
              </Link>
            </div>

            {/* Trust chips */}
            <div className="hero__chips">
              <span className="hero__chip">
                <ShieldCheck size={14} aria-hidden="true" />
                FSSAI Certified
              </span>
              <span className="hero__chip">
                <Truck size={14} aria-hidden="true" />
                Same-Day Delivery
              </span>
              <span className="hero__chip">
                <CheckCircle2 size={14} aria-hidden="true" />
                4.9 ★ Rating
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__img-wrap">
              <Image
                src="/images/water_delivery_hero.png"
                alt="Amirita 20L purified water can ready for delivery"
                width={520}
                height={580}
                priority
                className="hero__img animate-float"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ────────────────────────── */}
      <TrustSection />

      {/* ── HOW IT WORKS ─────────────────────────── */}
      <section className="hiw section bg-panel" aria-labelledby="hiw-heading">
        <div className="container hiw__inner">

          {/* Image side */}
          <div className="hiw__visual">
            <div className="hiw__img-wrap">
              <Image
                src="/images/water_truck_delivery.png"
                alt="Amirita water delivery truck en route to customers"
                width={640}
                height={440}
                className="hiw__img"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Floating badge */}
            <div className="glass-card-sm hiw__badge">
              <div className="hiw__badge-icon">
                <CheckCircle2 size={22} aria-hidden="true" />
              </div>
              <div>
                <div className="hiw__badge-title">Fast &amp; Reliable</div>
                <div className="hiw__badge-sub">Track your delivery instantly</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="hiw__content">
            <h2 className="h2 hiw__heading" id="hiw-heading">
              Hydration, just a text away.
            </h2>
            <p className="lead hiw__sub">
              No complicated apps, no long forms. Just WhatsApp us and
              we&apos;ll handle the rest — from order to doorstep.
            </p>

            <ol className="hiw__steps">
              {HOW_STEPS.map(({ num, title, desc }) => (
                <li key={num} className="hiw__step">
                  <div className="hiw__step-num" aria-hidden="true">{num}</div>
                  <div>
                    <h4 className="hiw__step-title">{title}</h4>
                    <p className="body hiw__step-desc">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="hiw-order-btn"
            >
              Start Delivery Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
