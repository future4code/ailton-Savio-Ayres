import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ContainerPai = styled.div`
  padding: 0px;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
  display: flex;

  justify-content: center;
  align-items: center;
`

const Titulo = styled.p`
  color: white;
  font-size: 600%;
`

const ButtonTrips = styled.button`
  background-color: #14145a;
  border-radius: 0 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  margin: 10px 20px;
`

const ButtonAdmin = styled.button`
  background-color: #14145a;
  border-radius: 0 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  margin: 10px 20px;
`

const ContainerFilho = styled.div``

export const HomePage = () => {
  const navigate = useNavigate()

  const goToListTrips = () => {
    navigate('/trips/list')
  }

  const goToLoginPage = () => {
    navigate('/loginPage')
  }

  return (
    <ContainerPai>
      <ContainerFilho>
        <Titulo>LabeX</Titulo>
        <ButtonTrips onClick={goToListTrips}>Ver Viagens</ButtonTrips>
        <ButtonAdmin onClick={goToLoginPage}>Área do Admin</ButtonAdmin>
      </ContainerFilho>
    </ContainerPai>
  )
}
