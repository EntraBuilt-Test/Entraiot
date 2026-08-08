import React from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import { FileText, Users, Cpu, ShoppingCart, Globe, Construction, Stethoscope } from 'lucide-react';

export default function ITServices() {
  return (
    <div className="view-container">
      <Header title="IT Services" />
      <div style={{ padding: '0.5rem 0' }}>
        <ServiceCard 
          icon={FileText}
          title="1. Billing Software" 
          items={["GST Billing", "Invoice Management", "Inventory Billing", "Sales & Purchase"]} 
        />
        <ServiceCard 
          icon={Users}
          title="2. Business Management System" 
          items={["CRM, ERP Solutions", "HR & Payroll", "Inventory Management", "Employee Management"]} 
        />
        <ServiceCard 
          icon={Cpu}
          title="3. Business Automation" 
          items={["WhatsApp Automation", "AI Chatbot", "Autopilot Chatbot", "AI Call Bot & More"]} 
        />
        <ServiceCard 
          icon={ShoppingCart}
          title="4. E-Commerce Website" 
          items={["Online Store", "Payment Gateway", "Order Management", "Autopilot Chatbot"]} 
        />
        <ServiceCard 
          icon={Globe}
          title="5. Industrial Website with Automation" 
          items={["Smart Websites", "Lead Management", "AI Chatbot", "Business Automation"]} 
        />
        <ServiceCard 
          icon={Construction}
          title="5A. Construction Industry Website" 
          items={["Company Profile", "Project Showcase", "Enquiry & Quote System", "Automation & Chatbot"]} 
        />
        <ServiceCard 
          icon={Stethoscope}
          title="5B. Medical Industry Website" 
          items={["Clinic / Hospital Websites", "Appointment Booking", "Patient Management", "Automation & Chatbot"]} 
        />
      </div>
    </div>
  );
}
