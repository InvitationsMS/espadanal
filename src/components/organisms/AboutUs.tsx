import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/company-info';
import './AboutUs.css';

export const AboutUs: React.FC = () => {
  const points = [
    `Más de ${COMPANY_INFO.experienceYears.replace('+', '')} años en el mercado nacional.`,
    'Stock permanente de las mejores marcas.',
    'Personal altamente calificado y certificado.',
    'Equipamiento de última generación.',
    'Compromiso con la seguridad y el medio ambiente.',
  ];

  return (
    <section id="sobre-nosotros" className="section about-us">
      <div className="container about-container">
        <div className="about-image-side">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" 
              alt="Sobre nosotros" 
              className="about-image"
            />
            <div className="about-experience-badge">
              <span className="years">{COMPANY_INFO.experienceYears}</span>
              <span className="text">Años de Experticia</span>
            </div>
          </div>
        </div>
        
        <div className="about-text-side">
          <span className="section-label">Nuestra Trayectoria</span>
          <h2 className="about-title">Líderes en Tecnología Hidráulica en la Región</h2>
          <p className="about-description">
            En {COMPANY_INFO.shortName}, nos dedicamos a proporcionar componentes y servicios hidráulicos excepcionales. Nuestra misión es mantener su maquinaria en movimiento con la máxima eficiencia y seguridad.
          </p>
          
          <ul className="about-points">
            {points.map((point, index) => (
              <li key={index} className="about-point">
                <CheckCircle2 size={24} className="point-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
