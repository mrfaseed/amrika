import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './contact.css';

export const metadata = {
  title: 'Contact Us | Amirita Water Plant',
};

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <h1 className="h1 text-white">Contact Us</h1>
          <p className="p text-white opacity-90">We are always here to help you stay hydrated.</p>
        </div>
      </header>

      <section className="section bg-light">
        <div className="container grid grid-cols-2 gap-8 contact-grid">
          
          <div className="contact-info-section">
            <h2 className="h2 mb-6 text-primary">Get in Touch</h2>
            <div className="info-item">
              <MapPin className="info-icon" size={24} />
              <div>
                <h4 className="font-bold">Address</h4>
                <p className="p">123 Water Plant Road, Pure City, ST 12345</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" size={24} />
              <div>
                <h4 className="font-bold">Phone / WhatsApp</h4>
                <p className="p">+1 234 567 890</p>
              </div>
            </div>
            <div className="info-item">
              <Mail className="info-icon" size={24} />
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="p">contact@amirita.com</p>
              </div>
            </div>
            <div className="info-item">
              <Clock className="info-icon" size={24} />
              <div>
                <h4 className="font-bold">Working Hours</h4>
                <p className="p">Mon - Sat: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form">
              <h3 className="h3 mb-4">Send us a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message / Order Details</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
          
        </div>
      </section>

      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </section>
    </div>
  );
}
