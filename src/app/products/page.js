import Link from 'next/link';
import './products.css';

export const metadata = {
  title: 'Our Products | Amirita Water Plant',
};

export default function Products() {
  const products = [
    {
      id: 1,
      name: '20L Water Can',
      description: 'Ideal for homes and offices. Dispenser compatible.',
      image: '/images/water_can_20l.png',
      price: '₹50 / can',
    },
    {
      id: 2,
      name: '1L Water Bottle',
      description: 'Perfect for travel, meetings, and personal use.',
      image: '/images/water_bottle_1l.png',
      price: '₹20 / bottle',
    },
    {
      id: 3,
      name: '500ml Water Bottle',
      description: 'Handy and refreshing for quick hydration.',
      image: '/images/water_bottle_500ml.png',
      price: '₹10 / bottle',
    },
    {
      id: 4,
      name: 'Bulk Supply (Tanker)',
      description: 'Large scale supply for events and corporate needs.',
      image: null,
      price: 'Contact for Quote',
    }
  ];

  return (
    <div className="products-page">
      <header className="page-header">
        <div className="container">
          <h1 className="h1 text-white">Our Products</h1>
          <p className="p text-white opacity-90">Explore our range of premium purified water products.</p>
        </div>
      </header>

      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="product-placeholder">Bulk Supply</div>
                  )}
                </div>
                <div className="product-info">
                  <h3 className="h3 mb-2">{product.name}</h3>
                  <p className="p mb-4">{product.description}</p>
                  <p className="price mb-4">{product.price}</p>
                  <Link href="/contact" className="btn btn-primary w-full">Order Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
