import Link from 'next/link';
import { Droplets, Phone, Mail, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import './Footer.css';

/* TODO: Replace all placeholder data below with real business info */
const CONTACT = {
  phone:    '+91 98765 43210',         /* TODO: real phone */
  email:    'order@amiritawater.com',  /* TODO: real email */
  address:  '123 Water Plant Road, Pure City, State — 600001', /* TODO: real address */
  whatsapp: 'https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20order%20Amirita%20Water',
};

const SERVICE_AREAS = [
  'Downtown Core',
  'Suburban Districts',
  'Corporate Parks',
  'IT Corridors',
  'Same-day Delivery Zones',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Top gradient accent */}
      <div className="footer__accent" aria-hidden="true" />

      <div className="container">
        <div className="footer__grid">

          {/* Brand col */}
          <div className="footer__col footer__col--brand">
            <Link href="/" className="footer__logo" aria-label="Amirita Water home">
              <Droplets size={30} aria-hidden="true" />
              <span>Amirita <strong>Water</strong></span>
            </Link>
            <p className="body footer__tagline">
              Premium RO + UV purified drinking water delivered directly to your
              home and office. Quality and purity you can trust every day.
            </p>
            <div className="footer__cert">
              <CheckCircle2 size={15} aria-hidden="true" />
              FSSAI Certified Facility
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products &amp; Pricing</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Order Now</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="footer__col">
            <h3 className="footer__heading">Service Areas</h3>
            <ul className="footer__list">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__heading">Contact Us</h3>
            <ul className="footer__contact">
              <li>
                <Phone size={16} aria-hidden="true" />
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              </li>
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm footer__wa-btn"
              id="footer-whatsapp-cta"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>&copy; {year} Amirita Water Plant. All rights reserved.</p>
          <div className="footer__legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
