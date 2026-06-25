'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Minus, Plus, ArrowRight, CheckCircle2 } from 'lucide-react';
import './contact.css';

/* TODO: Replace with your real WhatsApp number */
const WHATSAPP_URL = 'https://wa.me/9487779711?text=Hi%2C%20I%27d%20like%20to%20place%20a%20water%20order';

/* TODO: Replace with real contact info */
const CONTACT_INFO = [
  { icon: Phone,  label: 'Phone',   value: '+91 9487779711',          href: 'tel:+919487779711' },
  { icon: Mail,   label: 'Email',   value: 'order@amiritawater.com',   href: 'mailto:order@amiritawater.com' },
  { icon: MapPin, label: 'Address', value: 'No. 10/1, Panaikulam Village, T. Veppankulam Panchayat, Kariapatti Taluk, Virudhunagar Dist – 626106', href: null },
];

const INIT = { name: '', phone: '', quantity: 2, deliveryDate: '' };

export default function Contact() {
  const [form,         setForm]         = useState(INIT);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess,    setIsSuccess]    = useState(false);

  const update = (field, val) => setForm((p) => ({ ...p, [field]: val }));

  const handleChange = (e) => update(e.target.name, e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    /* Simulate network request */
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const reset = () => {
    setForm(INIT);
    setIsSuccess(false);
  };

  return (
    <div className="contact-page">
      {/* Page banner */}
      <header className="page-banner contact-page__banner" aria-labelledby="contact-heading">
        <div className="container">
          <p className="badge contact__eyebrow">Place an Order</p>
          <h1 className="h1 contact__hero-title" id="contact-heading">
            Fresh Water, <span className="gradient-text">Your Doorstep.</span>
          </h1>
          <p className="lead contact__hero-sub">
            Order in seconds — no apps, no hassle. Just fill out the form or
            chat with us directly on WhatsApp.
          </p>
        </div>
      </header>

      {/* Main two-col layout */}
      <section className="section" aria-label="Order form and contact information">
        <div className="container contact__inner">

          {/* ── LEFT: Contact info ───────────────── */}
          <aside className="contact__info-panel glass-card" aria-label="Contact information">
            <h2 className="h3 contact__info-title">Contact Information</h2>
            <p className="body contact__info-sub">
              Prefer to call, email, or visit us? Here&apos;s how to reach our team.
            </p>

            <ul className="contact__info-list">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="contact__info-item">
                  <div className="icon-circle contact__info-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="caption contact__info-label">{label}</div>
                    {href ? (
                      <a href={href} className="contact__info-value">{value}</a>
                    ) : (
                      <span className="contact__info-value">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact__wa-block">
              <p className="caption contact__wa-caption">
                Fastest way to order — just message us:
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp contact__wa-btn"
                id="contact-whatsapp-btn"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Open WhatsApp Chat
              </a>
            </div>
          </aside>

          {/* ── RIGHT: Order form ────────────────── */}
          <div className="contact__form-panel glass-card" role="main">
            {!isSuccess ? (
              <>
                <div className="contact__form-header">
                  <h2 className="h3 contact__form-title">Quick Order Form</h2>
                  <p className="body contact__form-sub">
                    Fill in your details and we&apos;ll confirm your delivery within minutes.
                  </p>
                </div>

                <form
                  className="contact__form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Water delivery order form"
                >
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-input"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Mohamed Faseed"
                      required
                      autoComplete="name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Mobile Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="form-input"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      required
                      autoComplete="tel"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="quantity">Number of 20L Cans</label>
                    <div className="qty-control" id="quantity" role="group" aria-label="Quantity selector">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => update('quantity', Math.max(1, form.quantity - 1))}
                        aria-label="Decrease quantity"
                        id="qty-decrease"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="qty-value" aria-live="polite" aria-atomic="true">
                        {form.quantity}
                      </span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => update('quantity', form.quantity + 1)}
                        aria-label="Increase quantity"
                        id="qty-increase"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="deliveryDate">Preferred Delivery Date *</label>
                    <input
                      id="deliveryDate"
                      type="date"
                      name="deliveryDate"
                      className="form-input"
                      value={form.deliveryDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary contact__submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="spinner" role="status" aria-label="Processing order" />
                    ) : (
                      <>
                        Place Order <ArrowRight size={18} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success state */
              <div className="contact__success" role="status" aria-live="polite">
                <div className="contact__success-icon">
                  <CheckCircle2 size={40} aria-hidden="true" />
                </div>
                <h2 className="h3 contact__success-title">Order Confirmed!</h2>
                <p className="body contact__success-msg">
                  Thank you, <strong>{form.name}</strong>. We&apos;ll deliver your water on{' '}
                  <strong>
                    {new Date(form.deliveryDate).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </strong>{' '}
                  and will call you at <strong>{form.phone}</strong> to confirm.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={reset}
                  id="contact-order-again-btn"
                >
                  Place Another Order
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
