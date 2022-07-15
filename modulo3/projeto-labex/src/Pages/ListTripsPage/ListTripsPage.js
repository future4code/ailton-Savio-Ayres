import React from 'react'
import { HomePage } from '../HomePage/HomePage'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import { axios } from 'react'

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
const CardTrips = styled.div``

export const ListTripsPage = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/savio-ayres-ailton/trips`
      )
      .then((response) => {
        setTrips(response.data.trips)
      })
      .catch((error) => {
        console.log(error.data)
      })
  })

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToForm = (id) => {
    navigate(`/trips/list/${id}`)
  }

  const tripsCards = trips?.map((item) => {
    return (
      <div>
        <CardTrips onClick={() => goToForm(item.id)}>
          <p>{item.name}</p>
        </CardTrips>
      </div>
    )
  })

  return (
    <ContainerGeral>
      <div>
        <Titulo>Lista de Viagens</Titulo>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToForm}>Inscrever-se</button>
      </div>
      {tripsCards}
    </ContainerGeral>
  )
}
