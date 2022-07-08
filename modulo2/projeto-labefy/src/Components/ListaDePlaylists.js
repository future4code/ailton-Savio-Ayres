import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ListaPlaylist = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
  min-width: 600px;
  display: flex;
  justify-content: space-between;
`

export default class ListaDePlaylists extends React.Component {
  state = {
    listaPlayslist: [],
    detalhesPlayslist: [],
    addMusica: [],
    nomeDaMusica: '',
    artist: '',
    url: '',
    salvarMusicas: []
  }
  // >>>>>> destruting
  onChangeInput = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
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
          listaPlayslist: response.data.result.list
        })
        console.log(response.data.result.list)
      })
      .catch((error) => {
        alert('ocorreu um problema, volte mais tarde')
      })
  }

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    axios
      .delete(url, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then((response) => {
        alert('Usuário deletado com sucesso')
        this.pegarPlaylists()
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  detalhesPlaylist = (nome) => {
    console.log('chegooouuuu ')
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${nome}`
    axios
      .get(url, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then((response) => {
        this.setState({
          detalhesPlayslist: response.data.result.playlist
        })
        console.log(response.data.result.playlist)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  salvarMusica = (idPlaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`
    const body = {
      name: this.state.nomeDaMusica,
      artist: this.state.artist,
      url: this.state.url
    }
    axios
      .post(url, body, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then(() => {
        alert('Música adicionada com sucesso')
        this.setState({
          nome: ''
        })
        this.PegarMusicas(idPlaylist)
      })
      .catch((error) => {
        alert('Ops! Essa música já foi cadastrada')
      })
  }
  pegarMusicas = (idMusic) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idMusic}/tracks`
    axios
      .get(url, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then((response) => {
        this.setState({
          salvarMusicas: response.data.result.tracks
        })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.salvarMusicas)
    const mostrarMusicaNaTela = this.state.salvarMusicas?.map((music) => {
      return (
        <section>
          <h4>Artista:{music.name}</h4>
          <h4>Música:{music.artist}</h4>
          <h4>Url:{music.url}</h4>
        </section>
      )
    })
    // console.log(this.state.listaPlaylist)
    const listaPlaylistUsuario = this.state.listaPlayslist?.map((playlist) => {
      return (
        <ListaPlaylist key={playlist.id}>
          {playlist.name}
          <button onClick={() => this.deletarUsuario(playlist.id)}>
            Deletar
          </button>
          <button onClick={() => this.pegarMusicas(playlist.id)}>
            Detalhes
          </button>
          <h3>Adicionar músicas:</h3>
          <input
            placeholder="Adicionar Música"
            value={this.state.nomeDaMusica}
            onChange={this.onChangeInput}
            name={'nomeDaMusica'}
          ></input>
          <input
            placeholder="Artista"
            value={this.state.artist}
            onChange={this.onChangeInput}
            name={'artist'}
          ></input>
          <input
            placeholder="Url"
            value={this.state.url}
            onChange={this.onChangeInput}
            name={'url'}
          ></input>
          {/* // onChange={(event) => this.setState({url:event.target.name})} >>>> não precisa do set.State na função acima
            // <<<<< Destruting/ Property accessors */}
          <button onClick={() => this.salvarMusica(playlist.id)}>salvar</button>
        </ListaPlaylist>
      )
    })

    const listaPlaylistDetalhes = this.state.detalhesPlayslist?.map(
      (playlist) => {
        return (
          <div>
            <a>{playlist.id}</a>
            <a key={playlist.id}>{playlist.name}</a>{' '}
          </div>
        )
      }
    )

    return (
      <div>
        <button onClick={this.props.irParaCriarPlaylist}>
          Voltar para playlists
        </button>
        <h2>Minhas Playlists</h2>
        {listaPlaylistUsuario}
        <h3>Detalhes da playlist:</h3>
        {listaPlaylistDetalhes}
        {mostrarMusicaNaTela}
      </div>
    )
  }
}
