import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from '../atoms/Button';
import './CatalogSection.css';

export const CatalogSection: React.FC = () => {
  const catalogs = [
    {
      title: 'Mangueras Hidráulicas 2024',
      description: 'Especificaciones técnicas completas para toda nuestra línea de mangueras de alta presión.',
      size: '4.5 MB',
      type: 'PDF',
    },
    {
      title: 'Conexiones y Acoples',
      description: 'Catálogo detallado de terminales, adaptadores y sistemas de conexión rápida.',
      size: '3.2 MB',
      type: 'PDF',
    },
    {
      title: 'Equipamiento Taller',
      description: 'Maquinaria para prensado y corte de mangueras industriales y agrícolas.',
      size: '2.8 MB',
      type: 'PDF',
    },
  ];

  return (
    <section id="catalogos" className="section theme-light bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Catálogos</h2>
          <p>Descargue toda la información técnica que necesita para sus proyectos industriales.</p>
        </div>
        
        <div className="catalog-grid">
          {catalogs.map((catalog, index) => (
            <div key={index} className="catalog-card glass">
              <div className="catalog-icon">
                <FileText size={40} />
              </div>
              <div className="catalog-info">
                <h3>{catalog.title}</h3>
                <p>{catalog.description}</p>
                <div className="catalog-meta">
                  <span className="catalog-type">{catalog.type}</span>
                  <span className="catalog-size">{catalog.size}</span>
                </div>
              </div>
              <div className="catalog-actions">
                <Button variant="primary" size="sm" fullWidth>
                  <Download size={16} className="mr-2" />
                  Descargar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
