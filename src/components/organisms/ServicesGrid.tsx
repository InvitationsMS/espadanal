import React from 'react';
import { Card } from '../molecules/Card';
import { Wrench, Settings, Truck, Microscope } from 'lucide-react';
import './ServicesGrid.css';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Fabricación a Medida',
      description: 'Diseñamos y fabricamos mangueras hidráulicas de acuerdo a sus especificaciones técnicas exactas.',
      icon: <Settings size={28} />,
    },
    {
      title: 'Reparación Express',
      description: 'Servicio de reparación inmediata para minimizar el tiempo de inactividad de su maquinaria.',
      icon: <Wrench size={28} />,
    },
    {
      title: 'Control de Calidad',
      description: 'Pruebas de presión y certificación de cada componente para garantizar máxima seguridad.',
      icon: <Microscope size={28} />,
    },
    {
      title: 'Servicio en Terreno',
      description: 'Contamos con unidades móviles equipadas para brindar asistencia técnica en su ubicación.',
      icon: <Truck size={28} />,
    },
  ];

  return (
    <section id="servicios" className="section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>Ofrecemos soluciones integrales respaldadas por años de experiencia técnica en el sector hidráulico.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="service"
              title={service.title}
              description={service.description}
              icon={service.icon}
              actionText="Consultar"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
