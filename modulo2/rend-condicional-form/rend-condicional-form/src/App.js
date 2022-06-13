// import React from 'react'
import React, { Component } from 'react'
import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'

export default class App extends Component {
  state = {
    etapa: 1
    // prosseguir: true
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />

      case 2:
        return <Etapa2 />

      case 3:
        return <Etapa3 />

      case 4:
        return <Final />
    }
  }

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {
    // let sumirBotao
    // if (this.state.prosseguir === true) {
    //   sumirBotao = (
    //     <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
    //   )
    // }
    // if (this.state.etapa >= 3) {
    //   this.state.prosseguir = false
    // }
    return (
      <div>
        {/* {this.irParaProximaEtapa()} */}
        {this.renderizaEtapa()}
        {this.state.etapa === 4 || (
          <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        )}
        {/* {sumirBotao} */}
      </div>
    )
  }
}
