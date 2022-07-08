import React from 'react'
import axios from 'axios'

export default class PaginaCadastro extends React.Component {
  state = {
    nome: '',
    email: ''
  }

  inputNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  inputEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  criarCadastro = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const body = {
      name: this.state.nome,
      email: this.state.email
    }
    axios
      .post(url, body, {
        headers: {
          Authorization: 'savio-ayres-ailton'
        }
      })
      .then((response) => {
        alert('Usuário cadastrado com sucesso')

        this.setState({
          nome: '',
          email: ''
        })
      })
      .catch((error) => {
        alert('Página não encontrada')
        // console.log(error.response.data)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.props.irParaListaUsuarios}>
          Ir para lista de usuários
        </button>
        <h2>PaginaCadastro</h2>
        <input
          placeholder={'nome'}
          onChange={this.inputNome}
          value={this.state.nome}
        />
        <input
          placeholder={'email'}
          value={this.state.email}
          onChange={this.inputEmail}
        />
        <button onClick={this.criarCadastro}>Cadastrar</button>
      </div>
    )
  }
}
