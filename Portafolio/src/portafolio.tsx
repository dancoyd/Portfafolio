import React from 'react';
import './portafolio.css';

const Portafolio: React.FC = () => {
  return (
    <main className="portafolio-container">
      <section className="presentacion seccion">
        <div className="lado-izquierdo">
          <h1>Hola, soy Dan</h1>
          <p></p>
        </div>
        <div className="lado-derecho imagen-placeholder"></div>
      </section>

      <section className="skills seccion">
        <div className="lado-derecho">
          
        </div>
      </section>

      <section className="experiencias seccion">
        <div className="lado-izquierdo">
          <h2>Experiencias</h2>
          <div className="card">
            <h3>Experencia de trabajo con AirBnb</h3>
            <p></p>
          </div>
          <div className="card">
            <h3>Desarollo de Mercado Lite</h3>
            <p></p>
            
          </div>
                    <div className="card">
            <h3>Pasantia de barberia</h3>
            <p></p>
            
          </div>
        </div>
      </section>

      <section className="logros seccion">
        <div className="lado-derecho">
          <h2>Logros</h2>
          <ul>
            <li>Desarollo de app, Mercado Lite</li>
            <li>Pasantia en empresa de alquileres</li>
            <li>Torneo futbol LIDE</li>
            
          </ul>
        </div>
      </section>

      <section className="idiomas seccion">
        <div className="lado-izquierdo">
          <h2>Idiomas</h2>
          <ul>
            <li>Español — Nativo</li>
            <li>Inglés — Intermedio técnico</li>
            <li>Portugues Nativo</li>
          </ul>
        </div>
      </section>

      <section className="educacion seccion">
        <div className="lado-derecho">
          <h2>Educación</h2>
          <div className="card">
            <h3>Secundario Técnico</h3>
            <p>Orientación en programación y diseño web. Enfoque en proyectos prácticos.</p>
          </div>
        </div>
      </section>

      <section className="contacto seccion">
        <div className="lado-izquierdo">
          <h2>Contacto</h2>
          <p>Podés encontrarme en <a href="https://github.com/dancoyd" target="_blank" rel="noopener noreferrer">GitHub</a> o escribirme a <strong>dangertrudis@outlook.com</strong></p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Dan</p>
      </footer>
    </main>
  );
};

export default Portafolio;