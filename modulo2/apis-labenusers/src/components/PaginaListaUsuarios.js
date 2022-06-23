import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`

export default class PaginaListaDeUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarListaUsuario()
  }

  pegarListaUsuario = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    axios
      .get(url, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then((response) => {
        this.setState({
          usuarios: response.data
        })
      })
      .catch((error) => {
        alert('Ocorreu um problema.Volte mais tarde.')
      })
  }

  apagarUsuario = (id) => {
    if (window.confirm('Tem certeza?')) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
      axios
        .delete(url, {
          headers: {
            Authorization: 'savio-ayres-ailton'
          }
        })
        .then((response) => {
          alert('Usuário deletado')
          this.pegarListaUsuario()
        })
        .catch((error) => {
          alert('Ocorreu um erro, tente mais tarde')
        })
    } else {
    }
  }

  render() {
    const listaUsuario = this.state.usuarios.map((user) => {
      return (
        <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.apagarUsuario(user.id)}>Delete</button>
          <button onClick={() => this.props.irParaDetalhes(user.id)}>
            Ver detalhes
          </button>
        </CardUsuario>
      )
    })

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>

        <h1>Cadastro do usuário</h1>

        {listaUsuario}
      </div>
    )
  }
}
