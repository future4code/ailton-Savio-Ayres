import axios from 'axios'
import React from 'react'

export default class TelaCriarPlaylist extends React.Component {
  state = {
    nome: ''
  }

  onChangeNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  salvarPlaylist = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {
      name: this.state.nome
    }
    axios
      .post(url, body, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then((response) => {
        alert('Playlist criada com sucesso')
        this.setState({
          nome: ''
        })
      })
      .catch((error) => {
        alert('Ops! Essa playlist já foi cadastrada')
      })
  }

  render() {
    return (
      <div>
        <h1>SpotyLab</h1>
        <button onClick={this.props.irParaListaDePlaylist}>
          Minhas Playlists
        </button>
        <h2>Criar playlist</h2>
        <input
          placeholder="Crie sua playlist"
          value={this.state.nome}
          onChange={this.onChangeNome}
        ></input>
        <button onClick={this.salvarPlaylist}>Salvar</button>
      </div>
    )
  }
}
