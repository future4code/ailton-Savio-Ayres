import React from 'react'
import ListaDePlaylists from './Components/ListaDePlaylists'
import TelaCriarPlaylist from './Components/TelaCriarPlaylist'

export default class App extends React.Component {
  state = {
    telaAtual: 'playlist'
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'playlist':
        return (
          <TelaCriarPlaylist
            irParaListaDePlaylist={this.irParaListaDePlaylist}
          />
        )
      case 'lista':
        return (
          <ListaDePlaylists irParaCriarPlaylist={this.irParaCriarPlaylist} />
        )
      default:
        return <div>Erro!!! Página não encontrada</div>
    }
  }

  irParaCriarPlaylist = () => {
    this.setState({
      telaAtual: 'playlist'
    })
  }

  irParaListaDePlaylist = () => {
    this.setState({
      telaAtual: 'lista'
    })
  }
  render() {
    return <div>{this.escolheTela()}</div>
  }
}
