import Link from 'next/link';
import { Droplets, ShieldCheck, Truck, Users, Star, ArrowRight, Shield } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge mb-6">
              <Droplets size={14} className="text-blue" />
              <span>Premium Water Delivery</span>
            </div>
            <h1 className="h1 mb-4 hero-title">
              Pure Water,<br />
              <span className="text-gradient">Elevated Life.</span>
            </h1>
            <p className="p-large mb-8 hero-subtitle">
              Experience the highest standard of hydration. We deliver state-of-the-art RO Purified and UV Treated drinking water directly to your home and office.
            </p>
            <div className="hero-actions flex gap-4 mb-10">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Order Now <ArrowRight size={18} />
              </Link>
              <Link href="/products" className="btn btn-outline btn-lg">
                View Products
              </Link>
            </div>
            
            <div className="hero-features flex gap-6">
              <div className="feature-item flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue" />
                <div className="feature-text">
                  <strong>100% Pure</strong>
                  <span>Lab Tested</span>
                </div>
              </div>
              <div className="feature-item flex items-center gap-2">
                <Shield size={18} className="text-blue" />
                <div className="feature-text">
                  <strong>RO + UV</strong>
                  <span>Purification</span>
                </div>
              </div>
              <div className="feature-item flex items-center gap-2">
                <Truck size={18} className="text-blue" />
                <div className="feature-text">
                  <strong>Fast Delivery</strong>
                  <span>At Your Doorstep</span>
                </div>
              </div>
              <div className="feature-item flex items-center gap-2">
                <Users size={18} className="text-blue" />
                <div className="feature-text">
                  <strong>10,000+</strong>
                  <span>Happy Families</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/dark_hero.png" alt="Amirita Premium Water" className="hero-img" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="hero-stats-panel grid grid-cols-4 gap-4 text-center">
            <div className="stat-item flex flex-col items-center">
              <Star size={24} className="text-blue mb-2" />
              <h3 className="h3">20+</h3>
              <p className="text-sm text-secondary">Years of Trust</p>
            </div>
            <div className="stat-item flex flex-col items-center">
              <Users size={24} className="text-blue mb-2" />
              <h3 className="h3">5000+</h3>
              <p className="text-sm text-secondary">Happy Customers</p>
            </div>
            <div className="stat-item flex flex-col items-center">
              <Droplets size={24} className="text-blue mb-2" />
              <h3 className="h3">100%</h3>
              <p className="text-sm text-secondary">Purity Guaranteed</p>
            </div>
            <div className="stat-item flex flex-col items-center">
              <div className="headphones-icon mb-2 text-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
              </div>
              <h3 className="h3">24/7</h3>
              <p className="text-sm text-secondary">Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
