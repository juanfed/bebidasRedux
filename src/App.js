import React from 'react';
import { Provider } from 'react-redux';
import Formulario from './components/Formulario';
import './App.css';

function App() {
  return (

    <div className="App">
      <h1>Recetas de Bebidas</h1>
      <Formulario />
    </div>
  );
}

export default App;
