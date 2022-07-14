import React from 'react'
import { HomePage } from '../HomePage/HomePage'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ContainerGeral = styled.div`
  padding: 0px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Titulo = styled.h1`
  color: white;
`

export const ListTripsPage = () => {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToForm = () => {
    navigate('/trips/applicationForm')
  }

  return (
    <ContainerGeral>
      <div>
        <Titulo>Lista de Viagens</Titulo>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToForm}>Inscrever-se</button>
      </div>
    </ContainerGeral>
  )
}
