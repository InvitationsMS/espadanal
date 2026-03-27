import React, { useState, useEffect } from 'react';
import { Logo } from '../atoms/Logo';
import { NavItem } from '../molecules/NavItem';
import { Button } from '../atoms/Button';
import { Menu, X } from 'lucide-react';
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

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled glass' : ''}`}>
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
          <Button variant="primary" size="sm">
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
            <Button variant="primary" fullWidth>Cotizar Ahora</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
