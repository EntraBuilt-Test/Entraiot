import React from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import { Home, MapPin, Factory, Zap, Sprout, HeartPulse } from 'lucide-react';

export default function IoTServices() {
  return (
    <div className="view-container">
      <Header title="IoT Solutions" />
      <div style={{ padding: '0.5rem 0' }}>
        <ServiceCard 
          icon={Home}
          title="Smart Automation" 
          items={["Home Automation", "Industrial Automation", "Building Automation"]} 
        />
        <ServiceCard 
          icon={MapPin}
          title="Asset Tracking" 
          items={["GPS Tracking", "RFID / NFC Solutions", "Asset Management"]} 
        />
        <ServiceCard 
          icon={Factory}
          title="Industrial IoT" 
          items={["Machine Monitoring", "Predictive Maintenance", "Production Analytics"]} 
        />
        <ServiceCard 
          icon={Zap}
          title="Energy Management" 
          items={["Energy Monitoring", "Solar Monitoring", "Smart Metering"]} 
        />
        <ServiceCard 
          icon={Sprout}
          title="Smart Agriculture" 
          items={["Soil Monitoring", "Irrigation Automation", "Weather Monitoring"]} 
        />
        <ServiceCard 
          icon={HeartPulse}
          title="Healthcare IoT" 
          items={["Patient Monitoring", "Medical Devices", "Health Dashboards"]} 
        />
      </div>
    </div>
  );
}
