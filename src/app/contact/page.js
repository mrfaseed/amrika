'use client';

import { useState, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  ArrowRight,
  CheckCircle2,
  Check,
  ShoppingCart,
  Package2,
} from 'lucide-react';
import './contact.css';

/* ── Config ──────────────────────────────────────────────────── */
const WHATSAPP_BASE = 'https://wa.me/9487779711';

const CONTACT_INFO = [
  { icon: Phone,  label: 'Phone',   value: '+91 9487779711',        href: 'tel:+919487779711' },
  { icon: Mail,   label: 'Email',   value: 'order@amiritawater.com', href: 'mailto:order@amiritawater.com' },
  {
    icon: MapPin,
    label: 'Address',
    value: 'No. 10/1, Panaikulam Village, T. Veppankulam Panchayat, Kariapatti Taluk, Virudhunagar Dist – 626106',
    href: null,
  },
];

const BOTTLE_PRODUCTS = [
  {
    id: '500ml',
    name: '500ml Bottle',
    pricePerBottle: 10,
    bottlesPerCase: 24,
    pricePerCase: 240,   // 10 × 24
    image: '/images/water_bottle_500ml.png',
    accent: 'blue',
    param: '500ml',
  },
  {
    id: '250ml',
    name: '250ml Bottle',
    pricePerBottle: 6,
    bottlesPerCase: 48,
    pricePerCase: 288,   // 6 × 48
    image: '/images/water_bottle_500ml.png',
    accent: 'aqua',
    param: '250ml',
  },
];

/* ── Inner form (needs useSearchParams → must be in Suspense) ── */
function OrderForm() {
  const params       = useSearchParams();
  const productParam = params.get('product'); // '500ml' | '250ml' | 'custom' | null

  const preSelect500 = productParam === '500ml' || productParam === 'custom';
  const preSelect250 = productParam === '250ml' || productParam === 'custom';

  const [selected500,     setSelected500]     = useState(preSelect500);
  const [selected250,     setSelected250]     = useState(preSelect250);
  const [cases500,        setCases500]        = useState(1);
  const [cases250,        setCases250]        = useState(1);
  const [form,            setForm]            = useState({ name: '', phone: '', deliveryDate: '' });
  const [isSubmitting,    setIsSubmitting]    = useState(false);
  const [isSuccess,       setIsSuccess]       = useState(false);
  const [errors,          setErrors]          = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitError,     setSubmitError]     = useState('');

  /* Ref on the form panel top — used to scroll-into-view on success */
  const formTopRef = useRef(null);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    /* Clear the specific field error as the user types */
    if (errors[e.target.name]) {
      setErrors((p) => ({ ...p, [e.target.name]: '' }));
    }
  };

  const nothingSelected = !selected500 && !selected250;

  /* Computed totals */
  const total500   = selected500 ? cases500 * 240 : 0;
  const total250   = selected250 ? cases250 * 288 : 0;
  const grandTotal = total500 + total250;

  /* WhatsApp message */
  const buildWAText = () => {
    const lines = ["Hi! I'd like to place a water bottle order."];
    if (form.name)         lines.push(`Name: ${form.name}`);
    if (form.phone)        lines.push(`Phone: ${form.phone}`);
    if (selected500)       lines.push(`500ml: ${cases500} case(s) = ${cases500 * 24} bottles`);
    if (selected250)       lines.push(`250ml: ${cases250} case(s) = ${cases250 * 48} bottles`);
    if (form.deliveryDate) lines.push(`Delivery Date: ${form.deliveryDate}`);
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    /* ── Validate ───────────────────────────────────────────── */
    const errs = {};
    if (!form.name.trim())  errs.name         = 'Full name is required.';
    if (!form.phone.trim()) errs.phone        = 'Mobile number is required.';
    if (!form.deliveryDate) errs.deliveryDate = 'Please choose a delivery date.';
    if (nothingSelected)    errs.product      = 'Please select at least one product.';

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    /* ── Build a readable order summary for the email body ─── */
    const orderLines = [];
    if (selected500) orderLines.push(`500ml Bottles: ${cases500} case(s) × 24 = ${cases500 * 24} bottles (₹${cases500 * 240})`);
    if (selected250) orderLines.push(`250ml Bottles: ${cases250} case(s) × 48 = ${cases250 * 48} bottles (₹${cases250 * 288})`);

    /* ── FormSubmit AJAX request ────────────────────────────── */
    try {
      const res = await fetch('https://formsubmit.co/ajax/faseedmohamed6@gmail.com', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          /* Customer details */
          Customer_Name:       form.name,
          Mobile_Number:       form.phone,
          Delivery_Date:       form.deliveryDate,

          /* Order details */
          Order_500ml:         selected500
            ? `${cases500} case(s) = ${cases500 * 24} bottles`
            : '—',
          Order_250ml:         selected250
            ? `${cases250} case(s) = ${cases250 * 48} bottles`
            : '—',
          Estimated_Total:     `₹${grandTotal}`,

          /* FormSubmit config fields */
          _subject:  `🛒 New Order from ${form.name} — Amirita Water`,
          _template: 'table',
          _captcha:  'false',
          _replyto:  `faseedmohamed6@gmail.com`,
        }),
      });

      const data = await res.json();
      console.log('[FormSubmit response]', data); // visible in browser DevTools

      if (data.success === 'true' || data.success === true) {
        setIsSuccess(true);
        /* Scroll to the success card */
        setTimeout(() => {
          formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      } else {
        /* Show FormSubmit's own message so the reason is clear */
        const reason = data.message
          ? `FormSubmit: "${data.message}"`
          : 'Unknown error from FormSubmit.';
        setSubmitError(`Order not sent — ${reason}. Use WhatsApp below as a backup.`);
      }
    } catch (err) {
      console.error('[FormSubmit fetch error]', err);
      setSubmitError('Network error — please check your connection or use WhatsApp below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setForm({ name: '', phone: '', deliveryDate: '' });
    setSelected500(false);
    setSelected250(false);
    setCases500(1);
    setCases250(1);
    setIsSuccess(false);
    setErrors({});
    setSubmitAttempted(false);
    setSubmitError('');
  };

  /* ── Success state ─────────────────────────────────────────── */
  if (isSuccess) {
    return (
      <div ref={formTopRef} className="contact__success" role="status" aria-live="polite">
        <div className="contact__success-icon">
          <CheckCircle2 size={44} aria-hidden="true" />
        </div>
        <h2 className="h3 contact__success-title">Order Received! 🎉</h2>
        <p className="body contact__success-msg">
          Thank you, <strong>{form.name}</strong>. Your order of{' '}
          {selected500 && (
            <strong>{cases500} case(s) of 500ml ({cases500 * 24} bottles)</strong>
          )}
          {selected500 && selected250 && ' and '}
          {selected250 && (
            <strong>{cases250} case(s) of 250ml ({cases250 * 48} bottles)</strong>
          )}{' '}
          has been received. We&apos;ll call{' '}
          <strong>{form.phone}</strong> to confirm delivery.
        </p>

        <div className="contact__success-actions">
          <a
            href={`${WHATSAPP_BASE}?text=${buildWAText()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            id="contact-success-whatsapp"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Confirm on WhatsApp
          </a>
          <button
            className="btn btn-outline"
            onClick={reset}
            id="contact-order-again-btn"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  /* ── Order form ────────────────────────────────────────────── */
  return (
    <>
      {/* Invisible anchor at the very top of the form panel — scrolled to on success */}
      <div ref={formTopRef} aria-hidden="true" style={{ position: 'absolute', top: 0 }} />

      <div className="contact__form-header">
        <h2 className="h3 contact__form-title">Quick Order Form</h2>
        <p className="body contact__form-sub">
          Select your products, set quantities, and place your order in seconds.
        </p>
      </div>

      <form
        className="contact__form"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Water bottle order form"
      >
        {/* ── Step 1: Select Products ───────────────────────── */}
        <div className="order-step">
          <p className="order-step__label">
            <span className="order-step__num" aria-hidden="true">1</span>
            Select Products
          </p>

          <div className="product-selector" role="group" aria-label="Select bottle sizes">
            {BOTTLE_PRODUCTS.map((prod) => {
              const isSelected = prod.id === '500ml' ? selected500 : selected250;
              const toggle     = prod.id === '500ml'
                ? () => setSelected500((s) => !s)
                : () => setSelected250((s) => !s);

              return (
                <button
                  key={prod.id}
                  type="button"
                  className={[
                    'prod-toggle',
                    `prod-toggle--${prod.accent}`,
                    isSelected ? 'prod-toggle--active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={toggle}
                  aria-pressed={isSelected}
                  id={`select-${prod.id}`}
                >
                  {/* Animated check */}
                  <span className="prod-toggle__check" aria-hidden="true">
                    {isSelected && <Check size={13} strokeWidth={3} />}
                  </span>

                  {/* Bottle thumbnail */}
                  <span className="prod-toggle__img-wrap" aria-hidden="true">
                    <Image
                      src={prod.image}
                      alt=""
                      width={50}
                      height={68}
                      style={{ objectFit: 'contain' }}
                    />
                  </span>

                  {/* Info */}
                  <span className="prod-toggle__info">
                    <span className="prod-toggle__name">{prod.name}</span>
                    <span className="prod-toggle__sub">
                      ₹{prod.pricePerBottle}/bottle &nbsp;·&nbsp; {prod.bottlesPerCase} bottles/case
                    </span>
                  </span>

                  {/* Price-per-case badge */}
                  <span className="prod-toggle__case-price" aria-hidden="true">
                    ₹{prod.pricePerCase}
                    <span>/case</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Only show product error after a submit attempt */}
          {submitAttempted && errors.product && (
            <p className="order-step__hint" role="alert" aria-live="polite">
              {errors.product}
            </p>
          )}
        </div>

        {/* ── Step 2: Number of Cases (visible only when a product is selected) ── */}
        {!nothingSelected && (
          <div className="order-step order-step--cases">
            <p className="order-step__label">
              <span className="order-step__num" aria-hidden="true">2</span>
              Number of Cases
            </p>

            <div className="cases-grid">
              {selected500 && (
                <div className="cases-row cases-row--blue">
                  <Package2 size={18} className="cases-row__icon" aria-hidden="true" />
                  <span className="cases-row__label">500ml Cases</span>

                  <div
                    className="qty-control"
                    role="group"
                    aria-label="500ml cases quantity"
                  >
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => setCases500((n) => Math.max(1, n - 1))}
                      aria-label="Decrease 500ml cases"
                      id="qty-500-decrease"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-value" aria-live="polite" aria-atomic="true">
                      {cases500}
                    </span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => setCases500((n) => n + 1)}
                      aria-label="Increase 500ml cases"
                      id="qty-500-increase"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <span className="cases-row__sub">
                    = {cases500 * 24} bottles
                  </span>
                </div>
              )}

              {selected250 && (
                <div className="cases-row cases-row--aqua">
                  <Package2 size={18} className="cases-row__icon" aria-hidden="true" />
                  <span className="cases-row__label">250ml Cases</span>

                  <div
                    className="qty-control"
                    role="group"
                    aria-label="250ml cases quantity"
                  >
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => setCases250((n) => Math.max(1, n - 1))}
                      aria-label="Decrease 250ml cases"
                      id="qty-250-decrease"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-value" aria-live="polite" aria-atomic="true">
                      {cases250}
                    </span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => setCases250((n) => n + 1)}
                      aria-label="Increase 250ml cases"
                      id="qty-250-increase"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <span className="cases-row__sub">
                    = {cases250 * 48} bottles
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Step 3: Your Details ──────────────────────────── */}
        <div className="order-step">
          <p className="order-step__label">
            <span className="order-step__num" aria-hidden="true">3</span>
            Your Details
          </p>

          <div className="form-fields">
            {/* Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                className={`form-input${errors.name ? ' form-input--error' : ''}`}
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Mohamed Faseed"
                aria-describedby={errors.name ? 'name-error' : undefined}
                autoComplete="name"
              />
              {errors.name && (
                <p className="form-error" id="name-error" role="alert">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Mobile Number *</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className={`form-input${errors.phone ? ' form-input--error' : ''}`}
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 99999 99999"
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                autoComplete="tel"
              />
              {errors.phone && (
                <p className="form-error" id="phone-error" role="alert">{errors.phone}</p>
              )}
            </div>

            {/* Delivery Date */}
            <div className="form-group">
              <label className="form-label" htmlFor="deliveryDate">
                Preferred Delivery Date *
              </label>
              <input
                id="deliveryDate"
                type="date"
                name="deliveryDate"
                className={`form-input${errors.deliveryDate ? ' form-input--error' : ''}`}
                value={form.deliveryDate}
                onChange={handleChange}
                aria-describedby={errors.deliveryDate ? 'date-error' : undefined}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.deliveryDate && (
                <p className="form-error" id="date-error" role="alert">{errors.deliveryDate}</p>
              )}
            </div>
          </div>
        </div>

        {/* ── Live Order Summary ────────────────────────────── */}
        {!nothingSelected && (
          <div className="order-summary" aria-label="Live order summary" aria-live="polite">
            <p className="order-summary__title">
              <ShoppingCart size={15} aria-hidden="true" />
              Order Summary
            </p>

            <div className="order-summary__items">
              {selected500 && (
                <div className="order-summary__item order-summary__item--blue">
                  <span>
                    500ml &times; {cases500} case{cases500 !== 1 ? 's' : ''}{' '}
                    <em>({cases500 * 24} bottles)</em>
                  </span>
                  <span className="order-summary__price">₹{cases500 * 240}</span>
                </div>
              )}
              {selected250 && (
                <div className="order-summary__item order-summary__item--aqua">
                  <span>
                    250ml &times; {cases250} case{cases250 !== 1 ? 's' : ''}{' '}
                    <em>({cases250 * 48} bottles)</em>
                  </span>
                  <span className="order-summary__price">₹{cases250 * 288}</span>
                </div>
              )}
            </div>

            <div className="order-summary__total">
              <span>Estimated Total</span>
              <span className="order-summary__total-amount">₹{grandTotal}</span>
            </div>

            <p className="order-summary__note">
              * Final price confirmed at delivery. Bulk discounts may apply.
            </p>
          </div>
        )}

        {/* ── Network / server error banner ─────────────────── */}
        {submitError && (
          <div className="submit-error" role="alert">
            <span>{submitError}</span>
            <a
              href={`${WHATSAPP_BASE}?text=${buildWAText()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="submit-error__wa"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Order via WhatsApp
            </a>
          </div>
        )}

        {/* ── Submit ───────────────────────────────────────── */}
        <button
          type="submit"
          className="btn btn-primary contact__submit"
          disabled={isSubmitting}
          id="contact-submit-btn"
        >
          {isSubmitting ? (
            <span className="spinner" role="status" aria-label="Sending your order…" />
          ) : (
            <>
              Place Order <ArrowRight size={18} aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </>
  );
}

/* ── Page shell ──────────────────────────────────────────────── */
export default function Contact() {
  return (
    <div className="contact-page">
      {/* Page banner */}
      <header
        className="page-banner contact-page__banner"
        aria-labelledby="contact-heading"
      >
        <div className="container">
          <p className="badge contact__eyebrow">Place an Order</p>
          <h1 className="h1 contact__hero-title" id="contact-heading">
            Fresh Water, <span className="gradient-text">Your Doorstep.</span>
          </h1>
          <p className="lead contact__hero-sub">
            Select your bottles, set your quantity, and we&apos;ll deliver.
            No apps, no hassle — just fresh water at your door.
          </p>
        </div>
      </header>

      {/* Main two-column layout */}
      <section className="section" aria-label="Order form and contact information">
        <div className="container contact__inner">

          {/* ── LEFT: Contact info ─────────────────────────── */}
          <aside
            className="contact__info-panel glass-card"
            aria-label="Contact information"
          >
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
                href={WHATSAPP_BASE}
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

          {/* ── RIGHT: Order form (Suspense required for useSearchParams) ── */}
          <div className="contact__form-panel glass-card" role="main" style={{ position: 'relative' }}>
            <Suspense
              fallback={
                <div className="contact__loading" aria-live="polite">
                  <span className="spinner" aria-label="Loading order form" />
                  <span>Loading order form…</span>
                </div>
              }
            >
              <OrderForm />
            </Suspense>
          </div>

        </div>
      </section>
    </div>
  );
}
