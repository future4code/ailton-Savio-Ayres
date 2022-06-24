import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ListaPlaylist = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`

export default class ListaDePlaylists extends React.Component {
  state = {
    listaPlayslist: []
  }
  componentDidMount() {
    this.pegarPlaylists()
  }

  pegarPlaylists = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios
      .get(url, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then((response) => {
        this.setState({
          listaPlayslist: response.data
        })
      })
      .catch((error) => {
        alert('ocorreu um problema, volte mais tarde')
      })
  }

  render() {
    const listaPlaylistUsuario = this.state.listaPlayslist.map((user) => {
      return <ListaPlaylist>{user.name}</ListaPlaylist>
    })
    return (
      <div>
        <button onClick={this.props.irParaCriarPlaylist}>
          Voltar para playlists
        </button>
        <h2>Minhas Playlists</h2>
        {listaPlaylistUsuario}
      </div>
    )
  }
}
