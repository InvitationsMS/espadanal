import React from 'react';
import './NavItem.css';

interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ label, href, active = false }) => {
  return (
    <a href={href} className={`nav-item ${active ? 'active' : ''}`}>
      {label}
      <span className="nav-item-underline"></span>
    </a>
  );
};
