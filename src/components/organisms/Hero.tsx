import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { COMPANY_INFO } from '../../constants/company-info';
import { ChevronRight, Shield, Clock, Award } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <img
          src={`${import.meta.env.BASE_URL}images/bg-hero.png`}
          alt="Hydraulic hoses"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">{COMPANY_INFO.tagline}</span>
            <h1 className="hero-title">
              Mangueras <span className="text-highlight">Hidráulicas</span> de Alta Presión
            </h1>
            <p className="hero-description">
              Nos especializamos en la distribución de mangueras hidráulicas y componentes para sistemas de conducción de fluidos. Ofrecemos asesoría técnica, selección de productos y soporte para asegurar un funcionamiento seguro y eficiente en cada aplicación.
            </p>
            <div className="hero-actions">
              <Button size="lg" variant="secondary" onClick={() => window.location.href = '#catalogos'}>
                Ver Catálogos
                <ChevronRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="hero-secondary-btn" onClick={() => window.location.href = '#contacto'}>
                Contáctanos
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="hero-feature">
              <div className="hero-feature-icon"><Shield size={20} /></div>
              <span>Calidad Certificada</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon"><Clock size={20} /></div>
              <span>Servicio 24/7</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon"><Award size={20} /></div>
              <span>Garantía de Fábrica</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
