import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getMatches } from '../Services/apis'
import { clear } from '../Services/apis'

const ContainerPai = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  button {
    display: flex;
    justify-content: end;
    margin-left: 10px;
    bottom: 5px;
  }
`

const Container = styled.div`
  border: 1px solid black;
  background: linear-gradient(45deg, #fd267a, #ff6036);
  border-radius: 10px;
  height: 96vh;
  width: 30vw;
  margin-top: 20px;
`
const Header = styled.div`
  font-family: 'Edu TAS Beginner', cursive;
  font-size: 30px;
  color: white;
  display: flex;

  justify-content: space-between;
  padding: 10px;
`
const BotaoVoltar = styled.button`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  color: #ffffff;
  font-family: Brush Script MT;
  font-size: 25px;
  font-weight: 50px;
  padding: 5px;
  background: linear-gradient(45deg, #fd267a, #ff6036);
  -webkit-box-shadow: 1px 1px 20px 0 #000000;
  -moz-box-shadow: 1px 1px 20px 0 #000000;
  box-shadow: 1px 1px 20px 0 #000000;
  text-shadow: 1px 1px 20px #ffffff;
  border: solid #337fed 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;

  :hover {
    background: darkmagenta;
    border: solid white 1px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-decoration: none;
  }
`

const Card = styled.div`
  width: auto;
  height: auto;
  position: relative;
  height: 70px;
  padding: 10px;
  display: flex;
  list-style: none;
  width: 100%;
  transition: all 0.2s ease 0s;
  cursor: pointer;
`

const Name = styled.h3`
  font-family: Roboto, sans-serif;
  color: white;
  display: flex;
  text-align: center;
  margin-left: 20px;
`
const Photo = styled.img`
  height: 90%;
  width: 55px;
  margin-right: 20px;
  border-radius: 45%;
  display: block;
  box-sizing: border-box;

  align-items: center;
`

function TelaListaMatches(props) {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches(setMatches)
  }, [])

  const listaMatches = matches.map((itens) => {
    return (
      <Card>
        <Photo src={itens.photo} />
        <Name>{itens.name}</Name>
      </Card>
    )
  })
  return (
    <ContainerPai>
      <Container>
        <Header>
          <div>Matches</div>

          <BotaoVoltar
            onClick={() => {
              props.setCurrentScreen('profile')
            }}
          >
            Voltar
          </BotaoVoltar>
        </Header>
        <hr />
        {listaMatches}
      </Container>
      <button onClick={clear}>Clear all Matches</button>
    </ContainerPai>
  )
}

export default TelaListaMatches
