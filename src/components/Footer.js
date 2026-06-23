import Link from 'next/link';
import { Droplets, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-4 footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo flex items-center gap-1 mb-4">
              <Droplets className="logo-icon" size={32} />
              <span className="logo-text">Amirita Water</span>
            </Link>
            <p className="p">Pure Water, Healthy Life. We deliver RO Purified and UV Treated drinking water directly to your doorstep.</p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li>Residential Delivery</li>
              <li>Corporate Supply</li>
              <li>Event Water Supply</li>
              <li>Bulk Orders</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li className="flex items-center gap-1"><Phone size={18}/> +1 234 567 890</li>
              <li className="flex items-center gap-1"><Mail size={18}/> contact@amirita.com</li>
              <li className="flex gap-1"><MapPin size={24}/> 123 Water Plant Road, Pure City</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Amirita Water Plant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
