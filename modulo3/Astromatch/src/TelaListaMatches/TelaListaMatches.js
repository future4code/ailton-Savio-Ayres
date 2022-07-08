import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;

  height: 80vh;
  width: 400px;
`

function TelaListaMatches(props) {
  return (
    <Container>
      <div>
        <div>Lista</div>
        <button
          onClick={() => {
            props.setCurrentScreen('profile')
          }}
        >
          Voltar
        </button>
      </div>
    </Container>
  )
}

export default TelaListaMatches
