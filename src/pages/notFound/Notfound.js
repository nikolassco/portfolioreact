import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      <h1>ERROR 404</h1>
      <p>Página não encontrada</p>
      <Link to="/">Voltar ao Inicio</Link>
    </div>
  )
}

export default Notfound;
