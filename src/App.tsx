import React from 'react';
import Erro404 from './img/Erro404.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Erro404} alt="Erro404" className='App-logo' />
        <p>
          <code>Fotos do James Web</code><br />
          <code>Aqui vão aparecer as fotos do James Webb, previsto para lançamento dia 24/12/2021</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
