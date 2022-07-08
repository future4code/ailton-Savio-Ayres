import axios from 'axios'

import React, { Component } from 'react'

export default class PaginaDetalhesUsuario extends Component {
  //   detalhesNaTela = (id) => {
  //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  //     axios
  //       .get(url, {
  //         headers: {
  //           Authorization: 'savio-ayres-ailton'
  //         }
  //       })
  //       .then((response) => {
  //         console.log(response)
  //         this.setState({
  //           detalhes: response.data
  //         })
  //       })
  //       .catch((error) => {
  //         console.log(error.message)
  //       })
  //   }

  state = {
    detalhes: ''
  }
  render() {
    return (
      <div>
        <button onClick={this.props.irParaListaUsuarios}>Voltar</button>
        <p>{this.props.detalhes.name}</p>
        <p>{this.props.detalhes.email}</p>
      </div>
    )
  }
}
