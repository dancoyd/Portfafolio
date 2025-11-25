import React from 'react';
import './portafolio.css';

const Portafolio: React.FC = () => {
  
  return (
    <main className="portafolio-container">
      <img src="/portfolio.jpg" alt="Foto de Dan" className="imagen-portfolio" />
      <section className="presentacion seccion">
        <div className="lado-izquierdo">
          <h1>Hola, soy Dan</h1>
          <p></p>
        </div>
        <div className="lado-derecho">
          <h2>Sobre mí</h2>
          <ul>
            <li>17 años</li>
            <li>Colegio secundario ORT</li>
            <li>Barbero</li>
            <li>Trilingüe</li>
            <li>Líder de niños</li>
          </ul>
        </div>
      </section>

      <section className="skills seccion">
        <div className="lado-derecho">
          {/* contenido futuro */}
        </div>
      </section>

      <section className="experiencias seccion">
        <div className="lado-izquierdo">
          <h2>Experiencias</h2>
          <div className="card">
            <h3>Experiencia de trabajo con AirBnb</h3>
            <p>En 2024 trabajé con una inmobiliaria de alquileres temporales. Tenía varias tareas como responder mensajes, recibir inquilinos y cobrar alquileres. Además tuve que saber resolver problemas del día a día de los inquilinos.</p>
          </div>
          <div className="card">
            <h3>Desarrollo de Mercado Lite</h3>
            <p>En mi secundario tuve la oportunidad de crear una app para ayudar a personas con neurodivergencias a usar billeteras virtuales.</p>
          </div>
          <div className="card">
            <h3>Pasantía de barbería</h3>
            <p>Tuve la oportunidad de trabajar en una barbería y tener la experiencia de lo que es un oficio. Esta pasantía me brindó varias enseñanzas, como la responsabilidad de cumplir con horario. También aprendí del trabajo en equipo además de la habilidad de cortar pelo.</p>
          </div>
        </div>
      </section>

      <section className="logros seccion">
        <div className="lado-derecho">
          <h2>Logros</h2>
          <ul>
            <li>Desarrollo de app, Mercado Lite</li>
            <li>Pasantía en empresa de alquileres</li>
            <li>Torneo fútbol LIDE</li>
          </ul>
        </div>
      </section>

      <section className="idiomas seccion">
        <div className="lado-izquierdo">
          <h2>Idiomas</h2>
          <ul>
            <li>Español — Nativo</li>
            <li>Inglés — Intermedio técnico</li>
            <li>Portugués — Nativo</li>
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