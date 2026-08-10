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
  const [showButtons, setShowButtons] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
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

        <div className="hero-center" style={{ position: 'relative', maxWidth: '350px', margin: '0 auto' }}>
          <img 
            src="/footer_illustration.png" 
            alt="Hero Illustration" 
            style={{ width: '100%', maxWidth: '350px', objectFit: 'contain', mixBlendMode: 'multiply', cursor: 'pointer' }} 
            onClick={() => setShowButtons(!showButtons)}
          />
          {showButtons && (
            <>
              <button className="btn-dark hero-interactive-btn btn-top">IT Service</button>
              <button className="btn-dark hero-interactive-btn btn-right" onClick={() => setShowVideo(true)}>IoT Service</button>
              <button className="btn-dark hero-interactive-btn btn-left">Industries We Serve</button>
            </>
          )}
        </div>

        <div className="hero-right">
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

      {showVideo && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 9999,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <button 
            style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '30px', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(4px)' }}
            onClick={() => setShowVideo(false)}
          >
            ← Back
          </button>
          <video src="/IOT service.mp4" loop autoPlay muted playsInline disablePictureInPicture style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', outline: 'none', border: '1px solid rgba(255,255,255,0.2)', pointerEvents: 'none' }} />
        </div>
      )}
    </div>
  );
}
