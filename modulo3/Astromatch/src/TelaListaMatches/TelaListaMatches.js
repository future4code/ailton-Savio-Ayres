import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getMatches } from '../Services/apis'

const Card = styled.div`
  border: 1px solid black;
  background-color: darkgrey;

  height: 80vh;
  width: 400px;
`

const Container = styled.div`
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
`

function TelaListaMatches(props) {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches(setMatches)
  }, [])

  const listaMatches = matches.map((itens) => {
    return (
      <Card>
        <p>{itens.name}</p>
        <img src={itens.photo} />
      </Card>
    )
  })
  return (
    <Container>
      <div>
        <div>Matches</div>
        <button
          onClick={() => {
            props.setCurrentScreen('profile')
          }}
        >
          Voltar
        </button>
        {listaMatches}
      </div>
    </Container>
  )
}

export default TelaListaMatches
