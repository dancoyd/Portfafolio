import React from 'react';
import './portafolio.css';

const Portafolio: React.FC = () => {
  return (
    <main className="portafolio-container">
      <section className="presentacion">
        <h1>Hola, soy Dan</h1>
        <p>Desarrollador frontend enfocado en jerarquía visual, scroll adaptable y modularidad.</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React + TypeScript</li>
          <li>CSS modular y accesible</li>
          <li>Scroll adaptable y jerarquía visual</li>
        </ul>
      </section>

      <section className="experiencias">
        <h2>Experiencias</h2>
        <div className="card">
          <h3>Landing institucional</h3>
          <p>Diseño modular, scroll vertical y defensa oral de cada componente.</p>
        </div>
        <div className="card">
          <h3>Portfolio personal</h3>
          <p>Integración de íconos, animaciones y estructura semántica clara.</p>
        </div>
      </section>

      <section className="logros">
        <h2>Logros</h2>
        <ul>
          <li>TP destacado por claridad visual y defensa técnica</li>
          <li>Resolución de errores complejos en scroll y layout</li>
          <li>Modularización completa de componentes visuales</li>
        </ul>
      </section>

      <section className="idiomas">
        <h2>Idiomas</h2>
        <ul>
          <li>Español — Nativo</li>
          <li>Inglés — Intermedio técnico</li>
        </ul>
      </section>

      <section className="educacion">
        <h2>Educación</h2>
        <div className="card">
          <h3>Secundario Técnico</h3>
          <p>Orientación en programación y diseño web. Enfoque en proyectos prácticos.</p>
        </div>
      </section>

      <section className="contacto">
        <h2>Contacto</h2>
        <p>Podés encontrarme en <a href="https://github.com/tucuenta" target="_blank" rel="noopener noreferrer">GitHub</a> o escribirme a <strong>dan@email.com</strong></p>
      </section>

      <footer className="footer">
        <p>© 2025 Dan</p>
      </footer>
    </main>
  );
};

export default Portafolio;