//import Erro404 from './img/Erro404.svg'
import React from "react";
import "./reset.css";
import "../src/style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="tituloPrincipal">JAMES WEBB</h1>
          <button className="btn-link-nav">Fotos</button>
        </div>
        <main className="container-conteudo">
          <section className="materia-principal">
            <span className="conteudo-texto">
              James webb foi lançado, e está a caminho do ponto de lagrange 2. Durante essa viagem ele estara se preparando para começar sua operação. Enquanto isso veja como ele estava na na sala limpa do espaçoporto europeu. 
            </span>
            <img className="conteudo-img" src="https://blogs.nasa.gov/webb/wp-content/uploads/sites/326/2021/12/Webb-clean-room-FG-768x1023.jpg"alt="James Webb na sala limpa do espaçoporto europeu. Crédito: NASA / Chris Gunn" />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
