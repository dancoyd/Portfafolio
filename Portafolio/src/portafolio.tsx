import React, { useState } from 'react';
import './portafolio.css';

const Card: React.FC<{ title: string; text: string; defaultOpen?: boolean }> = ({ title, text, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`card ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const Portafolio: React.FC = () => {
  return (
    <main className="portafolio-container">
      <section className="presentacion seccion">
        <div className="lado-izquierdo intro">
          <div className="texto">
            <h1>Hola, soy Dan</h1>
            <p></p>
          </div>
          <div className="profile-pic">
            {/* Aquí va tu foto personal */}
            <img src="/danpertfolio.jpeg" alt="Foto de Dan" />
          </div>
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
          <Card
            title="Experiencia de trabajo con AirBnb"
            text="En 2024 trabajé con una inmobiliaria de alquileres temporales. Tenía varias tareas como responder mensajes, recibir inquilinos y cobrar alquileres. Además tuve que saber resolver problemas del día a día de los inquilinos."
            defaultOpen={true}   // 👈 esta queda abierta siempre
          />
          <Card
            title="Desarrollo de Mercado Lite"
            text="En mi secundario tuve la oportunidad de crear una app para ayudar a personas con neurodivergencias a usar billeteras virtuales."
          />
          <Card
            title="Pasantía de barbería"
            text="Tuve la oportunidad de trabajar en una barbería y tener la experiencia de lo que es un oficio. Esta pasantía me brindó varias enseñanzas, como la responsabilidad de cumplir con horario. También aprendí del trabajo en equipo además de la habilidad de cortar pelo."
          />
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
    <Card
      title="Secundario Técnico"
      text="El secundario lo hice en la ORT. En mis anos de secundario tuve que elgir una orientación y elegi la de Tecnologia de la informacion y comunicacion(TIC)."
    />
  </div>
</section>



      <section className="contacto seccion">
        <div className="lado-izquierdo">
          <h2>Contacto</h2>
          <p>
            Podés encontrarme en{' '}
            <a href="https://github.com/dancoyd" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            o escribirme a <strong>dangertrudis@outlook.com</strong>
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Dan</p>
      </footer>
    </main>
  );
};

export default Portafolio;