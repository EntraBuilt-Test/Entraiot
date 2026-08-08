import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ title, items, icon: Icon }) {
  return (
    <div className="service-card glass-card">
      <div className="service-card-header">
        {Icon && <div className="service-icon"><Icon size={28} color="#ffffff" /></div>}
        <h3 className="service-title">{title}</h3>
      </div>
      <ul className="service-list">
        {items.map((item, index) => (
          <li key={index}>
            <span className="bullet-point"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
