import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f4f7f6',
      color: '#333'
    },
    nav: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px'
    },
    link: {
      padding: '15px 25px',
      backgroundColor: '#007bff',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Naveguemos</h1>
      <p style={{ color: '#666' }}>Selecciona la sección que deseas visitar:</p>
      
      <nav style={styles.nav}>
        <Link to="/form" style={styles.link}>Formulario de Registro</Link>
        <Link to="/usuarios" style={{ ...styles.link, backgroundColor: '#28a745' }}>Usuarios</Link>
      </nav>
    </div>
  );
}

export default Home;