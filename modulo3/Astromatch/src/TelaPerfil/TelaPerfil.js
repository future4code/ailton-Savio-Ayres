import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getProfile } from '../Services/apis'
import { choiceProfile } from '../Services/apis'
import { clear } from '../Services/apis'
import styled from 'styled-components'

const ContainerPai = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  border: 1px solid black;
  background-color: darkgrey;

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
        {profile && (
          <Card>
            <Name>{profile.name}</Name>
            <Photo src={profile.photo}></Photo>
            <Age>{profile.age} anos</Age>
            <Bio>{profile.bio}</Bio>
          </Card>
        )}
        <footer>
          <button onClick={() => choiceProfile(profile.id, false, setProfile)}>
            X
          </button>
          <button onClick={() => choiceProfile(profile.id, true, setProfile)}>
            V
          </button>
          <button onClick={clear}>Clear all Matches</button>
        </footer>
      </Container>
    </ContainerPai>
  )
}

export default TelaPerfil
