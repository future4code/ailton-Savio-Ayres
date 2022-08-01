import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import TelaPerfil from './TelaPerfil/TelaPerfil'
import TelaListaMatches from './TelaListaMatches/TelaListaMatches'

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

function App() {
  const [currentScreen, setCurrentScreen] = useState('profile')

  // const selectPage = () => {
  //   switch (currentScreen) {
  //     case 'profile':
  //       return <TelaPerfil />
  //     case 'list':
  //       return <TelaListaMatches />
  //     default:
  //       ;<TelaPerfil />
  //   }
  // }

  return (
    <div>
      {currentScreen === 'profile' && (
        <TelaPerfil setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === 'list' && (
        <TelaListaMatches setCurrentScreen={setCurrentScreen} />
      )}
      {/* <Container>{selectPage()}</Container> */}
    </div>
  )
}

export default App
