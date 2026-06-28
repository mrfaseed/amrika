import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './products.css';

export const metadata = {
  title: 'Products & Pricing',
  description:
    "Explore Amirita Water's 500ml and 250ml RO + UV purified water bottles — FSSAI certified, pH balanced, delivered fresh.",
};

const FEATURES = [
  'RO + UV Purified',
  'FSSAI Certified',
  'pH Balanced',
  'No Added Chemicals',
];

const PRODUCTS = [
  {
    id: 'bottle-500ml',
    name: '500ml Water Bottle',
    tagline: 'Best Seller',
    description:
      'Perfect pocket-sized bottle for on-the-go hydration. Sealed, BPA-free, and purified to the highest standard. Ideal for gyms, events, offices, and travel.',
    image: '/images/water_bottle_500ml.png',
    imageW: 220,
    imageH: 320,
    price: '₹10',
    unit: 'per bottle',
    accent: 'blue',
    popular: true,
    href: '/contact?product=500ml',
  },
  {
    id: 'bottle-250ml',
    name: '250ml Water Bottle',
    tagline: 'Compact & Fresh',
    description:
      "Mini bottle with maximum freshness. Great for kids' lunch boxes, cafes, short commutes, and hospitality. Light, sealed, and eco-friendly.",
    image: '/images/water_bottle_500ml.png',
    imageW: 160,
    imageH: 240,
    price: '₹6',
    unit: 'per bottle',
    accent: 'aqua',
    popular: false,
    href: '/contact?product=250ml',
  },
  {
    id: 'custom',
    name: 'Custom Bottle Order',
    tagline: 'Mix & Match',
    description:
      'Need both sizes or a large custom quantity? Build your order with any combination of 500ml and 250ml cases — tailored to your event, business, or home.',
    accent: 'purple',
    popular: false,
    href: '/contact?product=custom',
    isCustom: true,
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
            Pure Water, <span className="gradient-text">Your Way.</span>
          </h1>
          <p className="lead products__hero-sub">
            Choose your bottle size or build a fully custom mixed order.
            Every drop is RO&nbsp;+&nbsp;UV purified and FSSAI certified.
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

      {/* Product grid — 3 cards */}
      <section className="section" aria-label="Our products">
        <div className="container">
          <div className="products__grid products__grid--three">
            {PRODUCTS.map((p, i) => (
              <article
                key={p.id}
                className={[
                  'product-card',
                  `product-card--${p.accent}`,
                  p.popular ? 'product-card--popular' : '',
                  p.isCustom ? 'product-card--custom' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-label={p.name}
                style={{ '--card-index': i }}
              >
                {p.popular && (
                  <div className="product-card__badge" aria-label="Best seller">
                    🔥 Best Seller
                  </div>
                )}

                {p.isCustom ? (
                  <div className="product-card__custom-visual" aria-hidden="true">
                    <div className="product-card__custom-glow" />
                    <div className="product-card__custom-icon-wrap">
                      <span className="product-card__custom-star">✦</span>
                    </div>
                  </div>
                ) : (
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
                )}

                <div className="product-card__body">
                  <p className="caption product-card__tagline">{p.tagline}</p>
                  <h2 className="h3 product-card__name">{p.name}</h2>
                  <p className="body product-card__desc">{p.description}</p>

                  {p.price && (
                    <div className="product-card__price">
                      <span className="product-card__amount">{p.price}</span>
                      <span className="caption product-card__unit">{p.unit}</span>
                    </div>
                  )}

                  <Link
                    href={p.href}
                    className={[
                      'btn product-card__cta',
                      p.popular
                        ? 'btn-primary'
                        : p.isCustom
                        ? 'btn-custom-order'
                        : 'btn-outline',
                    ].join(' ')}
                    id={`product-order-${p.id}`}
                  >
                    {p.isCustom ? 'Build Your Order' : 'Order Now'}
                    <ArrowRight size={15} aria-hidden="true" />
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
