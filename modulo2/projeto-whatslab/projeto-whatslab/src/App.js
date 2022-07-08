import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100vh;
  background-color: #fdb300;
  margin: 0 auto;
  border: 1px solid orange;
  box-shadow: 3px 2px orange;
  footer {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background-color: #f75245;
      border: none;
      height: 30px;
      color: yellow;
      margin: 2%;
      padding: 2%;
      align-items: center;
    }
  }
`
const MensagemInput = styled.input`
  width: 300px;
  height: 18%;
  border: none;
  border-bottom: 1px solid orange;
  outline: none;
  position: relative;
  padding: 2% 2%;
  overflow: auto;
`
const Caixausuario = styled.input`
  height: 48%;
  width: 150px;
  border: none;
  outline: none;
  margin-right: 10px;
  overflow: auto;
`
const Titulo = styled.div`
  background-color: orange;
  height: 100px;
  text-align: center;
  align-items: center;
  font-size: 40px;
  color: orangered;
  font-family: 'Times New Roman', Times, serif;
`

const Imagem = styled.img`
  height: 100px;
  width: 500px;
`
const Teste = styled.div`
  height: 100%;
  overflow: auto;
`

const Paragrafo = styled.div`
  border-radius: 20px;
  border-width: 10px;
  background-color: #f58725;
  height: fit-content;
  width: fit-content;
  padding: 4px;
  margin: 6px;
  font-size: large;
  font: bolder;
  color: white;
  word-break: break-all;
  word-wrap: break-word;
`

export default class App extends React.Component {
  state = {
    InputUsuario: '',
    InputMensagem: '',
    listaDeMensagens: []
  }
  ReceberUsuario = (event) => {
    this.setState({
      InputUsuario: event.target.value
    })
  }
  ReceberMensagem = (event) => {
    this.setState({
      InputMensagem: event.target.value
    })
  }

  ReceberResultado = () => {
    let armazenarInfo = {
      usuario: this.state.InputUsuario,
      mensagem: this.state.InputMensagem
    }
    const copiaState = [...this.state.listaDeMensagens, armazenarInfo]
    this.setState({
      listaDeMensagens: copiaState,
      InputMensagem: '',
      InputUsuario: ''
    })
  }

  render() {
    const { listaDeMensagens } = this.state

    return (
      <Container>
        <Imagem src="https://bp.imguol.com/logo/logo.png" alt="imagem" />
        <Titulo>Chat UOL</Titulo>
        <Teste>
          <div>
            {listaDeMensagens.map((value, index) => {
              console.log(value)
              return (
                <Paragrafo key={index}>
                  {value.usuario}: {value.mensagem}
                </Paragrafo>
              )
            })}
          </div>
        </Teste>

        <footer>
          <Caixausuario
            value={this.state.InputUsuario}
            onChange={this.ReceberUsuario}
            placeholder="Usuário"
          ></Caixausuario>
          <MensagemInput
            value={this.state.InputMensagem}
            onChange={this.ReceberMensagem}
            placeholder="Mensagem"
          ></MensagemInput>
          <button onClick={this.ReceberResultado}>Enviar</button>
        </footer>
      </Container>
    )
  }
}
