import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import './Home.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  }
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="view-container home-view">
      
      <div className="home-hero">
        <img src="/logo.jpeg" alt="EntraIOT Logo" className="brand-logo" />
        <h1>Welcome to EntraIOT Solutions</h1>
        <p>Smart solutions for a smarter future.</p>
      </div>

      <div className="main-nav-wrapper">
        <motion.div 
          className="main-nav"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button variants={itemVariants} className="nav-card interactive-btn" onClick={() => navigate('/it-services')}>
            <img src="/it_icon.png" alt="IT Services" className="btn-icon-img" />
            <span>IT Services</span>
          </motion.button>
          <motion.button variants={itemVariants} className="nav-card interactive-btn" onClick={() => navigate('/iot-services')}>
            <img src="/iot_icon.png" alt="IoT Services" className="btn-icon-img" />
            <span>IoT Services</span>
          </motion.button>
          <motion.button variants={itemVariants} className="nav-card interactive-btn" onClick={() => navigate('/industries')}>
            <img src="/industries_icon.png" alt="Industries We Serve" className="btn-icon-img" />
            <span>Industries We Serve</span>
          </motion.button>
        </motion.div>
      </div>

      <div className="footer-contact glass-card" style={{ marginTop: 'auto' }}>
        <h3>Ready to Transform Your Business?</h3>
        <p>Let's build smart solutions together.</p>
      </div>
    </div>
  );
}
