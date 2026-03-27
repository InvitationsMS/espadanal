import React from 'react';
import { Button } from '../atoms/Button';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  tag?: string;
  onAction?: () => void;
  actionText?: string;
  variant?: 'product' | 'service';
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  tag,
  onAction,
  actionText = 'Ver más',
  variant = 'product',
}) => {
  return (
    <div className={`card card-${variant}`}>
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
          {tag && <span className="card-tag">{tag}</span>}
        </div>
      )}
      <div className="card-content">
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-action">
          <Button variant="outline" size="sm" onClick={onAction}>
            {actionText}
          </Button>
        </div>
      </div>
    </div>
  );
};
