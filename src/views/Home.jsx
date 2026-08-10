import React, { useState } from 'react';
import { 
  Smartphone, Hand, RefreshCw, Zap, CheckCircle2,
  FileText, Settings, Bot, ShoppingCart, Factory,
  Building2, Stethoscope, Home as HomeIcon, MapPin, 
  Battery, Leaf, Activity, Users, Truck, Briefcase, 
  Utensils, BookOpen, UserCircle, QrCode, Phone
} from 'lucide-react';
import './Home.css';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);
  const navy = "#2b4168";
  const orange = "#e07a5f";

  return (
    <div className="landing-page">
      {/* HEADER */}
      <header className="landing-header">
        <img src="/logo.jpeg" alt="Logo" className="header-logo-img" />
        <h1 className="header-brand-name" style={{color: navy}}>Entraiot Solutions</h1>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <p className="hero-subtitle">SCAN. EXPLORE. INNOVATE.</p>
          <h1 className="hero-title">Interactive<br/>Service</h1>
          <p className="hero-desc">All IT & IoT Solutions for<br/>Your Business Growth</p>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon"><Hand size={20} color={navy}/></div>
              <span>Easy to Use</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Smartphone size={20} color={navy}/></div>
              <span>Mobile Friendly</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><RefreshCw size={20} color={navy}/></div>
              <span>Interactive</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Zap size={20} color={navy}/></div>
              <span>Get Instant Solutions</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div style={{ position: 'relative', maxWidth: '350px', margin: '0 auto' }}>
            <img 
              src="/footer_illustration.png" 
              alt="Hero Illustration" 
              style={{ width: '100%', maxWidth: '350px', objectFit: 'contain', mixBlendMode: 'multiply', position: 'relative', zIndex: 1 }} 
            />
            <button className="btn-dark hero-interactive-btn btn-top" onClick={() => setActiveVideo('/IT service (2).mp4')}>IT Service</button>
            <button className="btn-dark hero-interactive-btn btn-right" onClick={() => setActiveVideo('/IOT service.mp4')}>IoT Service</button>
            <button className="btn-dark hero-interactive-btn btn-left" onClick={() => setActiveVideo('/industry we serve.mp4')}>Industries We Serve</button>
          </div>
        </div>

        <div className="hero-center" style={{ position: 'relative', maxWidth: '450px', margin: '0 auto' }}>
          <img 
            src="/laptop_image.png" 
            alt="Laptop and Mobile Dashboard" 
            style={{ width: '100%', maxWidth: '450px', objectFit: 'contain', transform: 'translateX(30px)' }} 
          />

          <div className="hero-benefits" style={{ position: 'absolute', bottom: '8%', left: '12%' }}>
            <ul>
              <li><CheckCircle2 size={16} color={navy}/> Smart Solutions</li>
              <li><CheckCircle2 size={16} color={navy}/> Custom Automation</li>
              <li><CheckCircle2 size={16} color={navy}/> 24/7 Support</li>
              <li><CheckCircle2 size={16} color={navy}/> Better Business Outcomes</li>
            </ul>
          </div>
        </div>
      </section>


      {/* FOOTER SECTION */}
      <footer className="footer-section">
        <div className="footer-main">
          <div className="footer-left">
            <h3>WHY CHOOSE ENTRAIOT SOLUTIONS?</h3>
            <div className="benefits-grid">
              <div><CheckCircle2 size={16} color={navy}/> Experienced Team</div>
              <div><CheckCircle2 size={16} color={navy}/> 24/7 Support</div>
              <div><CheckCircle2 size={16} color={navy}/> Custom Solutions</div>
              <div><CheckCircle2 size={16} color={navy}/> Affordable Pricing</div>
              <div><CheckCircle2 size={16} color={navy}/> On-Time Delivery</div>
              <div><CheckCircle2 size={16} color={navy}/> Scalable Solutions</div>
              <div><CheckCircle2 size={16} color={navy}/> Quality Assurance</div>
              <div><CheckCircle2 size={16} color={navy}/> Customer Satisfaction</div>
            </div>
          </div>
          
          <div className="footer-center">
            <img 
              src="/footer_illustration.png" 
              alt="Footer Illustration" 
              style={{ width: '100%', maxWidth: '350px', objectFit: 'contain', mixBlendMode: 'multiply' }} 
            />
          </div>

          <div className="footer-right">
            <h3>READY TO TRANSFORM YOUR BUSINESS?</h3>
            <p>Let's build smart solutions together.</p>
            <div className="cta-buttons">
              <button className="btn-dark">Get a Free Consultation</button>
              <button className="btn-outline">Contact Us Now</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="contact-item"><Phone size={16} color={navy}/> +91 98765 43210</div>
          <div className="contact-item"><Phone size={16} color={navy}/> +91 98765 43210</div>
          <div className="contact-item">info@entraiot.com</div>
          <div className="contact-item">www.entraiot.com</div>
          <div className="contact-item"><MapPin size={16} color={navy}/> Chennai, India</div>
        </div>
      </footer>

      {activeVideo && (
        <div className="video-modal-overlay">
          <button 
            className="video-modal-close"
            onClick={() => setActiveVideo(null)}
          >
            ← Back
          </button>
          <video src={activeVideo} loop autoPlay muted playsInline disablePictureInPicture className="video-modal-player" />
        </div>
      )}
    </div>
  );
}
