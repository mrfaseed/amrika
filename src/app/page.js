import Link from 'next/link';
import { Droplets, ShieldCheck, Truck, ThumbsUp, Star } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container flex items-center justify-between hero-content">
          <div className="hero-text">
            <h1 className="h1 mb-4">Pure Water,<br />Healthy Life</h1>
            <p className="p mb-6">Amirita Water Plant provides premium RO Purified and UV Treated drinking water directly to your home and office.</p>
            <div className="flex gap-2">
              <Link href="/contact" className="btn btn-primary">Order Now</Link>
              <Link href="/products" className="btn btn-outline">Our Products</Link>
            </div>
          </div>
          <div className="hero-image-container animate-float">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero.png" alt="Amirita Water Bottle" className="hero-img" />
          </div>
        </div>
        <div className="wave-bottom"></div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="section-title">
            <h2 className="h2">Why Choose Amirita Water?</h2>
            <p className="p">We ensure every drop you drink is safe, clean, and refreshing.</p>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center features-grid">
            <div className="feature-card">
              <div className="icon-wrapper"><Droplets size={32} /></div>
              <h3 className="h3">RO Purified</h3>
              <p className="p">Advanced reverse osmosis technology removes all impurities.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper"><ShieldCheck size={32} /></div>
              <h3 className="h3">UV Treated</h3>
              <p className="p">Ultraviolet treatment ensures 100% bacteria-free water.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper"><ThumbsUp size={32} /></div>
              <h3 className="h3">Quality Tested</h3>
              <p className="p">Rigorous lab testing for pH balance and minerals.</p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper"><Truck size={32} /></div>
              <h3 className="h3">Fast Delivery</h3>
              <p className="p">Prompt and reliable delivery to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section bg-light">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="stat-item">
              <h3 className="h1 text-primary"><AnimatedCounter end={10000} suffix="+" /></h3>
              <p className="h3 text-gray">Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3 className="h1 text-primary"><AnimatedCounter end={50} suffix="k+" /></h3>
              <p className="h3 text-gray">Liters Delivered Daily</p>
            </div>
            <div className="stat-item">
              <h3 className="h1 text-primary"><AnimatedCounter end={5} suffix="+" /></h3>
              <p className="h3 text-gray">Years of Trust</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2 className="h2">What Our Customers Say</h2>
            <p className="p">Don't just take our word for it.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 testimonials-grid">
            <div className="testimonial-card">
              <div className="stars flex gap-1 mb-2"><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/></div>
              <p className="p mb-4">"The water quality is amazing and their delivery is always on time. Highly recommend Amirita Water!"</p>
              <h4 className="font-bold">- John D.</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars flex gap-1 mb-2"><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/></div>
              <p className="p mb-4">"We have been using their 20L cans for our office for 2 years. Very professional service."</p>
              <h4 className="font-bold">- Sarah M.</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars flex gap-1 mb-2"><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/><Star fill="#FFD700" color="#FFD700"/></div>
              <p className="p mb-4">"Clean, safe, and affordable. The best drinking water supplier in the city."</p>
              <h4 className="font-bold">- Rajesh K.</h4>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section cta-section text-center">
        <div className="container">
          <h2 className="h2 mb-4 text-white">Ready to experience pure water?</h2>
          <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--white)', color: 'var(--primary-blue)' }}>Contact Us Now</Link>
        </div>
      </section>
    </>
  );
}
