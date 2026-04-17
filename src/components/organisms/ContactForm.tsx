import React from 'react';
import { Button } from '../atoms/Button';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/company-info';
import './ContactForm.css';

export const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="section contact-section theme-light bg-dark">
      <div className="container contact-container">
        <div className="contact-info-side">
          <div className="section-title text-left">
            <h2 className="text-white">¿Hablemos de su proyecto?</h2>
            <p className="text-gray">Estamos listos para brindarle la mejor asesoría técnica para sus necesidades hidráulicas.</p>
          </div>

          <div className="info-list">
            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-text">
                <span className="info-label">Teléfonos y WhatsApp</span>
                <div className="info-values">
                  {COMPANY_INFO.contact.whatsapp.map((ws, index) => (
                    <a key={`ws-${index}`} href={`https://wa.me/${ws.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="info-value">
                      {ws}
                      <span className="whatsapp-tag">
                        <MessageCircle size={12} />
                        WhatsApp
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div className="info-text">
                <span className="info-label">Correo Electrónico</span>
                <span className="info-value">{COMPANY_INFO.contact.email}</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-text">
                <span className="info-label">Ubicación</span>
                <span className="info-value">{COMPANY_INFO.contact.address}</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Clock size={24} /></div>
              <div className="info-text">
                <span className="info-label">Horario de Atención</span>
                <span className="info-value">{COMPANY_INFO.contact.workingHours}</span>
                <span className="info-value">{COMPANY_INFO.contact.workingHoursWeekend}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-side">
          <form className="contact-form glass">
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" placeholder="Ej. Juan Pérez" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="juan@ejemplo.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <select id="subject">
                <option value="">Seleccione una opción</option>
                <option value="cotizacion">Cotización de mangueras</option>
                <option value="servicio">Servicio técnico</option>
                <option value="catatlogo">Solicitud de catálogo</option>
                <option value="otros">Otros</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows={5} placeholder="Escriba aquí su consulta..."></textarea>
            </div>
            <Button variant="secondary" fullWidth size="lg">
              Enviar Mensaje
              <Send size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
