import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaEmMetros = altura / 100;
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="app">
      <h1>Calcular IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <div>
            <label>
              Altura (cm):
              <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Peso (kg):
              <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Calcular IMC</button>
        </div>
      </form>
      <p>Seu IMC é: {imc}</p>
      <p>Classificação: {classificacao}</p>
    </div>
  );
}

export default App;