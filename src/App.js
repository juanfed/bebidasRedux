import React from 'react';
import { Provider } from 'react-redux';
import Formulario from './components/Formulario';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Recetas de Bebidas</h1>
        <Formulario />
      </div>
    </Provider>
  );
}

export default App;
