import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getProfile } from '../Services/apis'
import styled from 'styled-components'

const ContainerPai = styled.div``

const Container = styled.div`
  border: 1px solid black;
  background-color: black;

  height: 80vh;
  width: 400px;
`
const Header = styled.div`
  display: flex;
  justify-content: center;
`
const BotaoLista = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Card = styled.div``

const Bio = styled.p``

const Name = styled.h3``

const Photo = styled.img``

const Age = styled.p``
function TelaPerfil(props) {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile(setProfile)
  }, [])

  return (
    <ContainerPai>
      <Container>
        <Header>
          <div>Astromatch</div>

          <BotaoLista
            onClick={() => {
              props.setCurrentScreen('list')
            }}
          >
            Lista de Matches
          </BotaoLista>
        </Header>
        <Card>
          <Name>{profile.name}</Name>
          <Photo src={profile.photo}></Photo>
          <Age>{profile.age} anos</Age>
          <Bio>{profile.bio}</Bio>
        </Card>
        <footer>
          <button>X</button>
          <button>V</button>
        </footer>
      </Container>
    </ContainerPai>
  )
}

export default TelaPerfil
