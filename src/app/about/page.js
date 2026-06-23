import './about.css';
import { Target, Eye } from 'lucide-react';

export const metadata = {
  title: 'About Us | Amirita Water Plant',
};

export default function About() {
  return (
    <div className="about-page">
      <header className="page-header">
        <div className="container">
          <h1 className="h1 text-white">About Us</h1>
          <p className="p text-white opacity-90">Learn more about our journey and commitment to purity.</p>
        </div>
      </header>

      <section className="section">
        <div className="container grid grid-cols-2 gap-8 items-center about-grid">
          <div className="about-content">
            <h2 className="h2 mb-4 text-primary">Our Story</h2>
            <p className="p mb-4">Founded with the vision to provide access to pure and safe drinking water, Amirita Water Plant has grown to become the most trusted water supplier in the region.</p>
            <p className="p mb-4">We utilize state-of-the-art Reverse Osmosis and Ultraviolet purification technologies to ensure that every drop of water meets the highest quality standards. Our rigorous testing procedures guarantee optimal pH levels and essential minerals for your health.</p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
               <div className="water-animation"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container grid grid-cols-2 gap-4 mv-grid">
          <div className="mv-card">
            <div className="icon-wrapper"><Target size={32} /></div>
            <h3 className="h3 mb-2">Our Mission</h3>
            <p className="p">To deliver the highest quality, purified drinking water to every household and business, ensuring health, safety, and customer satisfaction.</p>
          </div>
          <div className="mv-card">
            <div className="icon-wrapper"><Eye size={32} /></div>
            <h3 className="h3 mb-2">Our Vision</h3>
            <p className="p">To be recognized globally as the standard for water purity and environmental responsibility in the water supply industry.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
