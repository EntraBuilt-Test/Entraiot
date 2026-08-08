import React from 'react';
import { 
  Smartphone, Hand, RefreshCw, Zap, CheckCircle2,
  FileText, Settings, Bot, ShoppingCart, Factory,
  Building2, Stethoscope, Home as HomeIcon, MapPin, 
  Battery, Leaf, Activity, Users, Truck, Briefcase, 
  Utensils, BookOpen, UserCircle, QrCode, Phone
} from 'lucide-react';
import './Home.css';

export default function Home() {
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

        <div className="hero-center">
          <img 
            src="/footer_illustration.png" 
            alt="Hero Illustration" 
            style={{ width: '100%', maxWidth: '350px', objectFit: 'contain', mixBlendMode: 'multiply' }} 
          />
        </div>

        <div className="hero-right">
          <img 
            src="/laptop_image.png" 
            alt="Laptop and Mobile Dashboard" 
            style={{ width: '100%', maxWidth: '450px', objectFit: 'contain' }} 
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

      {/* IT SERVICES SECTION */}
      <section className="section-container bg-white">
        <div className="section-pill dark-pill">IT SERVICES</div>
        
        <div className="it-services-grid top-row">
          <div className="service-card">
            <div className="card-icon"><FileText size={32} color={orange}/></div>
            <h3>1. Billing Software</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> GST Billing</li>
              <li><CheckCircle2 size={12} color={navy}/> Invoice Management</li>
              <li><CheckCircle2 size={12} color={navy}/> Inventory Billing</li>
              <li><CheckCircle2 size={12} color={navy}/> Sales & Purchase</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="card-icon"><Users size={32} color={orange}/></div>
            <h3>2. Business Management System</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> CRM, ERP Solutions</li>
              <li><CheckCircle2 size={12} color={navy}/> HR & Payroll</li>
              <li><CheckCircle2 size={12} color={navy}/> Inventory Management</li>
              <li><CheckCircle2 size={12} color={navy}/> Employee Management</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="card-icon"><Bot size={32} color={orange}/></div>
            <h3>3. Business Automation</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> WhatsApp Automation</li>
              <li><CheckCircle2 size={12} color={navy}/> AI Chatbot</li>
              <li><CheckCircle2 size={12} color={navy}/> Autopilot Chatbot</li>
              <li><CheckCircle2 size={12} color={navy}/> AI Call Bot & More</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="card-icon"><ShoppingCart size={32} color={orange}/></div>
            <h3>4. E-Commerce Website</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> Online Store</li>
              <li><CheckCircle2 size={12} color={navy}/> Payment Gateway</li>
              <li><CheckCircle2 size={12} color={navy}/> Order Management</li>
              <li><CheckCircle2 size={12} color={navy}/> Autopilot Chatbot</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="card-icon"><Factory size={32} color={orange}/></div>
            <h3>5. Industrial Website with Automation</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> Smart Websites</li>
              <li><CheckCircle2 size={12} color={navy}/> Lead Management</li>
              <li><CheckCircle2 size={12} color={navy}/> AI Chatbot</li>
              <li><CheckCircle2 size={12} color={navy}/> Business Automation</li>
            </ul>
          </div>
        </div>

        <div className="it-services-grid bottom-row">
          <div className="service-card wide-card">
            <div className="card-icon"><Building2 size={32} color={orange}/></div>
            <div className="wide-content">
              <h3>5A. Construction Industry Website</h3>
              <ul>
                <li><CheckCircle2 size={12} color={navy}/> Company Profile</li>
                <li><CheckCircle2 size={12} color={navy}/> Project Showcase</li>
                <li><CheckCircle2 size={12} color={navy}/> Enquiry & Quote System</li>
                <li><CheckCircle2 size={12} color={navy}/> Automation & Chatbot</li>
              </ul>
            </div>
          </div>
          <div className="service-card wide-card">
            <div className="card-icon"><Stethoscope size={32} color={orange}/></div>
            <div className="wide-content">
              <h3>5B. Medical Industry Website<br/><span>(Small Scale to Large Scale)</span></h3>
              <ul>
                <li><CheckCircle2 size={12} color={navy}/> Clinic / Hospital Websites</li>
                <li><CheckCircle2 size={12} color={navy}/> Appointment Booking</li>
                <li><CheckCircle2 size={12} color={navy}/> Patient Management</li>
                <li><CheckCircle2 size={12} color={navy}/> Automation & Chatbot</li>
              </ul>
            </div>
          </div>
        </div>

        <button className="btn-dark center-btn">View All IT Services</button>
      </section>

      {/* IOT SOLUTIONS SECTION */}
      <section className="section-container bg-white" style={{paddingTop: 0}}>
        <div className="iot-services-grid">
          <div className="iot-card">
            <div className="iot-icon"><HomeIcon size={40} color={orange}/></div>
            <h3>Smart Automation</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> Home Automation</li>
              <li><CheckCircle2 size={12} color={navy}/> Industrial Automation</li>
              <li><CheckCircle2 size={12} color={navy}/> Building Automation</li>
            </ul>
          </div>
          <div className="iot-card">
            <div className="iot-icon"><MapPin size={40} color={orange}/></div>
            <h3>Asset Tracking</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> GPS Tracking</li>
              <li><CheckCircle2 size={12} color={navy}/> RFID / NFC Solutions</li>
              <li><CheckCircle2 size={12} color={navy}/> Asset Management</li>
            </ul>
          </div>
          <div className="iot-card">
            <div className="iot-icon"><Factory size={40} color={orange}/></div>
            <h3>Industrial IoT</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> Machine Monitoring</li>
              <li><CheckCircle2 size={12} color={navy}/> Predictive Maintenance</li>
              <li><CheckCircle2 size={12} color={navy}/> Production Analytics</li>
            </ul>
          </div>
          <div className="iot-card">
            <div className="iot-icon"><Battery size={40} color={orange}/></div>
            <h3>Energy Management</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> Energy Monitoring</li>
              <li><CheckCircle2 size={12} color={navy}/> Solar Monitoring</li>
              <li><CheckCircle2 size={12} color={navy}/> Smart Metering</li>
            </ul>
          </div>
          <div className="iot-card">
            <div className="iot-icon"><Leaf size={40} color={orange}/></div>
            <h3>Smart Agriculture</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> Soil Monitoring</li>
              <li><CheckCircle2 size={12} color={navy}/> Irrigation Automation</li>
              <li><CheckCircle2 size={12} color={navy}/> Weather Monitoring</li>
            </ul>
          </div>
          <div className="iot-card">
            <div className="iot-icon"><Activity size={40} color={orange}/></div>
            <h3>Healthcare IoT</h3>
            <ul>
              <li><CheckCircle2 size={12} color={navy}/> Patient Monitoring</li>
              <li><CheckCircle2 size={12} color={navy}/> Medical Devices</li>
              <li><CheckCircle2 size={12} color={navy}/> Health Dashboards</li>
            </ul>
          </div>
        </div>

        <button className="btn-dark center-btn">View All IoT Solutions</button>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section-container bg-white">
        <h2 className="section-title">INDUSTRIES WE SERVE</h2>
        
        <div className="industries-grid">
          <div className="industry-pill"><ShoppingCart size={20} color={navy}/> Traders & Distributors</div>
          <div className="industry-pill"><UserCircle size={20} color={navy}/> Agencies</div>
          <div className="industry-pill"><Building2 size={20} color={navy}/> Companies (Small to Large)</div>
          <div className="industry-pill"><Stethoscope size={20} color={navy}/> Clinics & Medical (Mid Scale to Large)</div>
          <div className="industry-pill"><Users size={20} color={navy}/> Event Management</div>
          <div className="industry-pill"><ShoppingCart size={20} color={navy}/> Retail & Supermarkets</div>
          <div className="industry-pill"><Factory size={20} color={navy}/> Manufacturing Industries</div>
          <div className="industry-pill"><Building2 size={20} color={navy}/> Construction & Infrastructure</div>
          <div className="industry-pill"><BookOpen size={20} color={navy}/> Education & Institutes</div>
          <div className="industry-pill"><Truck size={20} color={navy}/> Logistics & Transport</div>
          <div className="industry-pill"><Utensils size={20} color={navy}/> Hospitality (Hotels & Restaurants)</div>
          <div className="industry-pill"><HomeIcon size={20} color={navy}/> Real Estate</div>
          <div className="industry-pill"><Activity size={20} color={navy}/> Pharma & Healthcare</div>
          <div className="industry-pill"><Settings size={20} color={navy}/> And Many More...</div>
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

    </div>
  );
}
