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
  background-color: black;

  button {
    display: flex;
    justify-content: end;
    margin-left: 10px;
    bottom: 5px;
  }
`

const Container = styled.div`
  border: 1px solid white;
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
const BotaoMatches = styled.button`
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
`

const Bio = styled.p`
  font-family: 'Edu TAS Beginner', cursive;
  font-size: 14px;
  display: flex;
  text-align: center;
`

const Name = styled.h3`
  font-family: Roboto, sans-serif;
  color: black;
  display: flex;
  text-align: center;
  margin-left: 20px;
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  box-shadow: 1px 1px 5px 5px white;
  border-radius: 10px;
  margin: 20px;
  display: block;
  align-items: center;

  object-fit: contain;
`

const Age = styled.h3`
  display: flex;
  text-align: center;
  margin-left: 10px;
`

const BotaoX = styled.button`
  border-radius: 50px;
  background-color: red;
  border: 1px solid white;

  color: white;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 55px;
  cursor: pointer;
  margin: 5px;
  :hover {
    opacity: 1;
    right: 0;
    background-color: white;
    color: red;
  }
`
const BotaoV = styled.button`
  border-radius: 50px;

  background-color: green;
  border: 1px solid white;

  color: white;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 55px;
  cursor: pointer;
  margin: 5px;
  :hover {
    opacity: 1;
    right: 0;
    background-color: white;
    color: green;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
`

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

          <BotaoMatches
            onClick={() => {
              props.setCurrentScreen('list')
            }}
          >
            Lista de Matches
          </BotaoMatches>
        </Header>
        <hr />
        {profile && (
          <Card>
            <Name>{profile.name}</Name> <Age>{profile.age} anos</Age>
            <Photo src={profile.photo}></Photo>
            <Bio>{profile.bio}</Bio>
          </Card>
        )}
        <Footer>
          <BotaoX onClick={() => choiceProfile(profile.id, false, setProfile)}>
            X
          </BotaoX>
          <BotaoV onClick={() => choiceProfile(profile.id, true, setProfile)}>
            V
          </BotaoV>
        </Footer>
      </Container>
      <button onClick={clear}>Clear all Matches</button>
    </ContainerPai>
  )
}

export default TelaPerfil
