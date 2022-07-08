import React, { Component } from 'react'

export default class Etapa1 extends Component {
  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <p>1. Qual o seu nome?</p>

        <input type="text" placeholder="Digite seu nome"></input>

        <p>2. Qual sua idade?</p>

        <input type="text" placeholder="Digite sua idade"></input>

        <p>3. Qual seu email?</p>

        <input type="text" placeholder="digite seu email"></input>

        <p>4. Qual a sua escolaridade?</p>

        <select name="select">
          <option value="Ensino médio incompleto">Ensino M incompleto</option>
          <option value="Ensino médio completo">Ensino M completo</option>
          <option value="Ensino superior incompleto">
            Ensino S incompleto
          </option>
          <option value="Ensino superior completo">Ensino S completo</option>

          <button>Próxima Etapa</button>
        </select>
      </div>
    )
  }
}
