import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <h1>Naveguemos</h1>
    <p>Selecciona la sección que deseas visitar:</p>
    <nav>
        
        <Link to="/form">Formulario de Registro</Link>
        <Link to="/usuarios">Usuarios</Link>
    </nav>
    </div>
  );
}

export default Home;