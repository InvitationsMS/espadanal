import React from 'react';
import { Card } from '../molecules/Card';
import './ProductsSection.css';

export const ProductsSection: React.FC = () => {
  const products = [
    {
      title: 'Mangueras R17',
      description: 'Manguera hidráulica trenzada de alta presión reforzada con alambre de acero de alta resistencia.',
      image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=600&auto=format&fit=crop',
      tag: 'Más Vendido',
    },
    {
      title: 'Acoples Rápidos',
      description: 'Sistemas de conexión rápida para fluidos hidráulicos, neumáticos y de proceso.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
      tag: 'Nuevo',
    },
    {
      title: 'Válvulas Direccionales',
      description: 'Control preciso del flujo de fluidos con sistemas de accionamiento manual o eléctrico.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Bombas Hidráulicas',
      description: 'Unidades de potencia de alto rendimiento para maquinaria pesada e industrial.',
      image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="productos" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Productos Destacados</h2>
          <p>Solo trabajamos con las mejores marcas y materiales para asegurar el rendimiento de su operación.</p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <Card
              key={index}
              variant="product"
              title={product.title}
              description={product.description}
              image={product.image}
              tag={product.tag}
              actionText="Ver Detalles"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
