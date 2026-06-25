import Link from 'next/link';
import Image from 'next/image';
import { Star, CheckCircle2, MessageCircle } from 'lucide-react';
import './products.css';

export const metadata = {
  title: 'Products & Pricing',
  description:
    'Explore Amirita Water\'s range of RO + UV purified water products — 20L cans, 1L bottles, 500ml bottles, and bulk tanker supply.',
};

const FEATURES = ['RO + UV Purified', 'FSSAI Certified', 'pH Balanced', 'No Added Chemicals'];

const PRODUCTS = [
  {
    id: 1,
    name: '20L Water Can',
    tagline: 'Home & Office favourite',
    description: 'Dispenser compatible. The most economical choice for daily household and office hydration needs.',
    image: '/images/water_can_20l.png',
    imageW: 300,
    imageH: 360,
    price: '₹50',
    unit: 'per can',
    popular: true,
  },
  {
    id: 2,
    name: '1L Water Bottle',
    tagline: 'Perfect for on-the-go',
    description: 'Ideal for travel, meetings, schools, and restaurants. Slim, sealed, and BPA-free.',
    image: '/images/water_bottle_1l.png',
    imageW: 240,
    imageH: 340,
    price: '₹20',
    unit: 'per bottle',
    popular: false,
  },
  {
    id: 3,
    name: '500ml Bottle',
    tagline: 'Quick hydration',
    description: 'Handy pocket-sized bottle for quick hydration anytime, anywhere. Great for events and gyms.',
    image: '/images/water_bottle_500ml.png',
    imageW: 220,
    imageH: 320,
    price: '₹10',
    unit: 'per bottle',
    popular: false,
  },
  {
    id: 4,
    name: 'Bulk Tanker Supply',
    tagline: 'Events & large scale',
    description: 'Large-scale purified water supply for weddings, conferences, construction sites, and more.',
    image: '/images/water_truck_delivery.png',
    imageW: 400,
    imageH: 280,
    price: 'Get Quote',
    unit: 'contact us',
    popular: false,
    isBulk: true,
  },
];

export default function Products() {
  return (
    <div className="products-page">
      {/* Banner */}
      <header className="page-banner" aria-labelledby="products-heading">
        <div className="container">
          <p className="badge products__eyebrow">Products &amp; Pricing</p>
          <h1 className="h1 products__hero-title" id="products-heading">
            Premium Water, <span className="gradient-text">Fair Prices.</span>
          </h1>
          <p className="lead products__hero-sub">
            Choose the right product for your home, office, or event.
            Every drop is RO + UV purified and FSSAI certified.
          </p>
        </div>
      </header>

      {/* Features strip */}
      <div className="products__features-strip bg-panel">
        <div className="container products__features-inner">
          {FEATURES.map((f) => (
            <div key={f} className="products__feature">
              <CheckCircle2 size={16} aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <section className="section" aria-labelledby="products-heading">
        <div className="container">
          <div className="products__grid">
            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                className={`product-card${p.popular ? ' product-card--popular' : ''}`}
                aria-label={p.name}
              >
                {p.popular && (
                  <div className="product-card__badge" aria-label="Most popular">
                    <Star size={12} aria-hidden="true" fill="currentColor" />
                    Most Popular
                  </div>
                )}

                <div className="product-card__image">
                  <Image
                    src={p.image}
                    alt={`Amirita ${p.name}`}
                    width={p.imageW}
                    height={p.imageH}
                    style={{ objectFit: 'contain' }}
                    className="product-card__img"
                  />
                </div>

                <div className="product-card__body">
                  <p className="caption product-card__tagline">{p.tagline}</p>
                  <h2 className="h3 product-card__name">{p.name}</h2>
                  <p className="body product-card__desc">{p.description}</p>

                  <div className="product-card__price">
                    <span className="product-card__amount">{p.price}</span>
                    <span className="caption product-card__unit">{p.unit}</span>
                  </div>

                  <Link
                    href="/contact"
                    className={`btn product-card__cta${p.popular ? ' btn-primary' : ' btn-outline'}`}
                    id={`product-order-${p.id}`}
                  >
                    {p.isBulk ? (
                      <>
                        <MessageCircle size={15} aria-hidden="true" />
                        Contact for Quote
                      </>
                    ) : 'Order Now'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
