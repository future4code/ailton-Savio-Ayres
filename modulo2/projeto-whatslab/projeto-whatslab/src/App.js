import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 500px;
  height: 100vh;
  background-color: white;
  margin: 0 auto;
  border: 1px solid black;
`;
const Titulo = styled.div`
  height: 90%;
`;

export default class App extends React.Component {
  state = {
    InputUsuario: "",
    InputMensagem: "",
    ListaDeMensagens: [],
  };
  ReceberUsuario = (event) => {
    this.setState({
      InputUsuario: event.target.value,
    });
  };
  ReceberMensagem = (event) => {
    this.setState({
      InputMensagem: event.target.value,
    });
  };

  ReceberResultado = () => {
    let armazenarInfo = [
      { usuario: this.state.InputUsuario, mensagem: this.state.InputMensagem },
    ]; this.setState({
      ListaDeMensagens: armazenarInfo
    })
  };

  render() {
    console.log(this.state.InputUsuario);
    return (
      <Container>
        <Titulo>Whatslab</Titulo>
        <footer>
          <input onChange={this.ReceberUsuario} placeholder="Usuário"></input>
          <input onChange={this.ReceberMensagem} placeholder="Mensagem"></input>
          <button onClick={this.ReceberResultado}>Enviar</button>
        </footer>
      </Container>
    );
  }
}
