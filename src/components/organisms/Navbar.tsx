import React, { useState, useEffect } from 'react';
import { Logo } from '../atoms/Logo';
import { NavItem } from '../molecules/NavItem';
import { Button } from '../atoms/Button';
import { Menu, X, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/company-info';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = COMPANY_INFO.links.main;
  const message = 'Hola, me gustaria cotizar un producto o servicio'

  const handleQuote = () => {
    const whatsappNumber = COMPANY_INFO.contact.whatsapp[0].replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled glass' : ''}`}>
      <div className="navbar-top desktop-only">
        <div className="container top-bar-inner">
          <div className="top-bar-contact">
            {COMPANY_INFO.contact.whatsapp.map((ws, index) => (
              <a key={`ws-${index}`} href={`https://wa.me/${ws.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="top-bar-link">
                <MessageCircle size={14} className="mr-1 text-whatsapp" />
                {ws}
              </a>
            ))}

            <a href={`mailto:${COMPANY_INFO.contact.email}`} className="top-bar-link">
              <Mail size={14} className="mr-1" />
              {COMPANY_INFO.contact.email}
            </a>
          </div>
          <div className="top-bar-hours">
            <span>{COMPANY_INFO.contact.workingHours}</span>
          </div>
        </div>
      </div>
      <div className="container navbar-inner">
        <Logo size="md" />

        {/* Desktop Navigation */}
        <ul className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavItem label={link.label} href={link.href} />
            </li>
          ))}
        </ul>

        <div className="navbar-cta desktop-only">
          <Button variant="primary" size="sm" onClick={handleQuote}>
            Cotizar Ahora
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-cta">
            <Button variant="primary" fullWidth onClick={handleQuote}>Cotizar Ahora</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
