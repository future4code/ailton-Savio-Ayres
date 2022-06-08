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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'Sávio Ayres'}
          fotoUsuario={'https://observatoriodegames.uol.com.br/wp-content/uploads/2022/02/Resident-Evil-4-HD-Project.jpg'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'Tatiana'}
          fotoUsuario={'https://observatoriodegames.uol.com.br/wp-content/uploads/2022/02/Resident-Evil-4-HD-Project.jpg'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
      
    );
  }
}



export default App;



