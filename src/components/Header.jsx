import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import './Header.css';

export default function Header({ title }) {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ChevronLeft size={24} color="#fff" />
      </button>
      <h2 className="header-title">{title}</h2>
    </div>
  );
}
