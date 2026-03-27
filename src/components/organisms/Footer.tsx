import React from 'react';
import { Logo } from '../atoms/Logo';
import { MessageCircle, Camera, Globe, Send, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/company-info';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo size="lg" />
          <p className="footer-mission">
            {COMPANY_INFO.mission}
          </p>
          <div className="social-links">
            <a href={COMPANY_INFO.social.facebook} className="social-link"><MessageCircle size={20} /></a>
            <a href={COMPANY_INFO.social.instagram} className="social-link"><Camera size={20} /></a>
            <a href={COMPANY_INFO.social.linkedin} className="social-link"><Globe size={20} /></a>
            <a href={COMPANY_INFO.social.twitter} className="social-link"><Send size={20} /></a>
          </div>
        </div>
        
        <div className="footer-nav">
          <h4 className="footer-title">Navegación</h4>
          <ul className="footer-links">
            {COMPANY_INFO.links.main.slice(0, 5).map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="footer-nav">
          <h4 className="footer-title">Recursos</h4>
          <ul className="footer-links">
            {COMPANY_INFO.links.resources.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="footer-newsletter">
          <h4 className="footer-title">Suscríbete</h4>
          <p>Reciba nuestras últimas novedades y ofertas especiales.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Su correo electrónico" />
            <button className="newsletter-btn">Unirse</button>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
        <button className="scroll-top" onClick={scrollToTop}>
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};
