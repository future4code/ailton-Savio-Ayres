import React, { Component } from 'react'

export default class Etapa3 extends Component {
  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>7. Porque você não terminou o curso de graduação?</p>

        <input type="text" placeholder="Insira sua resposta"></input>

        <p>8. Você fez algum curso complementar? </p>

        <select name="select">
          <option value="Nemhum">nada</option>
          <option value="Curso técnico">técnico</option>
          <option value="Curso de Inglês">inglês</option>
        </select>
      </div>
    )
  }
}
