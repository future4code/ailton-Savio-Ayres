import React from 'react'
import axios from 'axios'

import PaginaCadastro from './components/PaginaCadastro'
import PaginaListaUsuarios from './components/PaginaListaUsuarios'
import PaginaDetalhesUsuario from './components/PaginaDetalhesUsuario'

export default class App extends React.Component {
  state = {
    telaAtual: 'cadastro',
    idDetalhes: '',
    detalhes: ''
  }

  escolherPagina = () => {
    switch (this.state.telaAtual) {
      case 'cadastro':
        return <PaginaCadastro irParaListaUsuarios={this.irParaListaUsuarios} />
      case 'lista':
        return (
          <PaginaListaUsuarios
            irParaCadastro={this.irParaCadastro}
            irParaDetalhes={this.irParaDetalhes}
          />
        )
      case 'detalhes':
        return (
          <PaginaDetalhesUsuario
            detalhes={this.state.detalhes}
            irParaListaUsuarios={this.irParaListaUsuarios}
          />
        )
      default:
        return <div>Ops! O que você procura não está aqui</div>
    }
  }

  irParaCadastro = () => {
    this.setState({
      telaAtual: 'cadastro'
    })
  }

  irParaListaUsuarios = () => {
    this.setState({
      telaAtual: 'lista'
    })
  }
  irParaDetalhes = (id) => {
    this.setState({
      telaAtual: 'detalhes'
      // idDetalhes: id
    })
    this.detalhesNaTela(id)
  }
  detalhesNaTela = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios
      .get(url, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then((response) => {
        console.log(response)
        this.setState({
          detalhes: response.data
        })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  render() {
    return (
      <section>
        <div>{this.escolherPagina()}</div>
      </section>
    )
  }
}
