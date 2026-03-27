import React from 'react';
import { Navbar } from '../organisms/Navbar';
import { Hero } from '../organisms/Hero';
import { ServicesGrid } from '../organisms/ServicesGrid';
import { ProductsSection } from '../organisms/ProductsSection';
import { CatalogSection } from '../organisms/CatalogSection';
import { AboutUs } from '../organisms/AboutUs';
import { ContactForm } from '../organisms/ContactForm';
import { Footer } from '../organisms/Footer';

export const LandingTemplate: React.FC = () => {
  return (
    <div className="landing-layout">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <ProductsSection />
        <CatalogSection />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
