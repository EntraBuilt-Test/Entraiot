import React from 'react';
import Header from '../components/Header';
import { Store, Briefcase, Building, PlusSquare, Calendar, ShoppingBag, Wrench, HardHat, GraduationCap, Truck, Utensils, Home as HomeIcon, Pill, MoreHorizontal } from 'lucide-react';
import './Industries.css';

const industriesData = [
  { name: "Traders & Distributors", icon: Store },
  { name: "Agencies", icon: Briefcase },
  { name: "Companies (Small to Large)", icon: Building },
  { name: "Clinics & Medical", icon: PlusSquare },
  { name: "Event Management", icon: Calendar },
  { name: "Retail & Supermarkets", icon: ShoppingBag },
  { name: "Manufacturing Industries", icon: Wrench },
  { name: "Construction & Infrastructure", icon: HardHat },
  { name: "Education & Institutes", icon: GraduationCap },
  { name: "Logistics & Transport", icon: Truck },
  { name: "Hospitality", icon: Utensils },
  { name: "Real Estate", icon: HomeIcon },
  { name: "Pharma & Healthcare", icon: Pill },
  { name: "And Many More...", icon: MoreHorizontal }
];

export default function Industries() {
  return (
    <div className="view-container">
      <Header title="Industries We Serve" />
      <div className="industries-grid">
        {industriesData.map((ind, idx) => (
          <div key={idx} className="industry-card glass-card">
            <ind.icon size={28} color="#ffffff" className="industry-icon" />
            <span className="industry-name">{ind.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
