import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
InputNomeDoUsuario: "",
InputPFP: "",
InputFotoPost: "",
ComponentePost: [
{nomeUsuario:'paulinha', fotoUsuario:'https://picsum.photos/50', fotoPost:'https://picsum.photos/200/150'},
{nomeUsuario:'Sávio Ayres', fotoUsuario:'https://observatoriodegames.uol.com.br/wp-content/uploads/2022/02/Resident-Evil-4-HD-Project.jpg', fotoPost:'https://picsum.photos/200/150'},
{nomeUsuario:'Tatiana', fotoUsuario:'https://observatoriodegames.uol.com.br/wp-content/uploads/2022/02/Resident-Evil-4-HD-Project.jpg', fotoPost:'https://picsum.photos/200/150'}
]

  }

  adicionaPost = () => {
    const novoPost = {nomeUsuario: this.state.InputNomeDoUsuario, fotoUsuario: 'https://picsum.photos/id' + this.state.InputPFP + '/50/50',
  fotoPost:'https://picsum.photos/id' + this.state.InputFotoPost + '/200/200'} 
  const novoPosts = [...this.state.InputFotoPost + '/200/200']
this.setState({ComponentePost: novoPost});
this.setState({InputNomeDoUsuario: ""});
this.setState({InputPFP: ""});
this.setState({InputFotoPost: ""});
  } 

  onChangeNome = (event) => {
    this.setState({InputNomeDoUsuario: event.target.value})
  }
    onChangeFotoUsuario = (event) => {
      this.setState({InputPFP: event.target.value})
    }
    onChangeFotoPost = (event) => {
      this.setState({InputFotoPost: event.target.value})
    }
  

  render() {
const postFormata = this.state.ComponentePost.map((dados, index)=>{
return <Post key={index} nomeUsuario={dados.nomeUsuario} fotoUsuario={dados.fotoUsuario} fotoPost={dados.fotoPost}/>
})

    return (
    
    <MainContainer>
     {postFormata}
     <input value={this.state.InputPFP} onChange={this.onChangeFotoUsuario} type="number" placeholder='Sua Foto'></input>
     <input value={this.state.InputNomeDoUsuario} onChange={this.onChangeNome} placeholder='Seu usuário'></input>
     <input value={this.state.InputFotoPost} onChange={this.onChangeFotoPost} type="number" placeholder='Foto Post'></input>
     <button onClick={this.adicionaPost}>Aperte</button>
    </MainContainer>
      
    );
  }
}



export default App;



