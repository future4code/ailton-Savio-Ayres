import React from 'react'
import Router from './Routes/Router.js'
import styled from 'styled-components'
import Background from './Image/Background.gif'

const ContainerPai = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

const App = () => {
  return (
    <ContainerPai>
      <Router />
    </ContainerPai>
  )
}
export default App
