import Link from 'next/link';
import { Home, Building2, CalendarDays, Truck } from 'lucide-react';
import './services.css';

export const metadata = {
  title: 'Services | Amirita Water Plant',
};

export default function Services() {
  return (
    <div className="services-page">
      <header className="page-header">
        <div className="container">
          <h1 className="h1 text-white">Our Services</h1>
          <p className="p text-white opacity-90">Tailored water supply solutions for every need.</p>
        </div>
      </header>

      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 services-grid">
            <div className="service-card">
              <div className="icon-wrapper"><Home size={40} /></div>
              <h2 className="h2 mb-2">Residential Delivery</h2>
              <p className="p mb-4">We deliver 20L cans directly to your doorstep. Schedule regular deliveries so you never run out of pure drinking water.</p>
              <Link href="/contact" className="btn btn-outline">Schedule Delivery</Link>
            </div>
            
            <div className="service-card">
              <div className="icon-wrapper"><Building2 size={40} /></div>
              <h2 className="h2 mb-2">Corporate Supply</h2>
              <p className="p mb-4">Keep your employees hydrated with our reliable office supply. We provide dispensers and regular maintenance.</p>
              <Link href="/contact" className="btn btn-outline">Get Corporate Quote</Link>
            </div>
            
            <div className="service-card">
              <div className="icon-wrapper"><CalendarDays size={40} /></div>
              <h2 className="h2 mb-2">Event Water Supply</h2>
              <p className="p mb-4">Hosting a wedding, conference, or party? We supply water cans, 500ml bottles, and 1L bottles in bulk for your guests.</p>
              <Link href="/contact" className="btn btn-outline">Book for Event</Link>
            </div>
            
            <div className="service-card">
              <div className="icon-wrapper"><Truck size={40} /></div>
              <h2 className="h2 mb-2">Bulk Orders & Tankers</h2>
              <p className="p mb-4">For large-scale requirements, we offer tanker services equipped with RO treated water.</p>
              <Link href="/contact" className="btn btn-outline">Contact for Bulk</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
