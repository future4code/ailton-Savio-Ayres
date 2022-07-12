import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ContainerPai = styled.div``

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: black;
  color: white;
`

export const HomePage = () => {
  const navigate = useNavigate()

  const goToListTrips = () => {
    navigate('/trips/list')
  }

  const goToLoginPage = () => {
    navigate('/loginPage')
  }

  return (
    <div>
      <ContainerHeader>
        <p>LabeX</p>
        <button onClick={goToListTrips}>Ver Viagens</button>
        <button onClick={goToLoginPage}>Área do Admin</button>
      </ContainerHeader>
    </div>
  )
}
