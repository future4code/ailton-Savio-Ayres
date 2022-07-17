import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { labexApi } from '../../Api'

const ContainerPai = styled.div`
  width: 100vw;

  height: 100vh;
  overflow: auto;
  display: flex;

  justify-content: center;
  align-items: center;
`

const ContainerButtons = styled.div`
  width: 100vw;

  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardTrips = styled.div`
  color: white;
  padding: 50px;
  width: 30%;
  height: 4%;

  gap: 0 70px;
  background-color: #003153;
  display: flex;

  align-items: center;
`

const ButtonBack = styled.button``
const ButtonCreateTrip = styled.button``

export const AdminHomePage = () => {
  const [trips, setTrips] = useState([])

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToLoginPage = () => {
    navigate('/loginPage')
  }

  const goToCreateTrip = () => {
    navigate('/admin/createTrip')
  }

  const goToTripDetails = (id) => {
    navigate(`/admin/tripDetails/${id}`)
  }

  useEffect(() => {
    labexApi

      .get(`/trips`)
      .then((response) => {
        setTrips(response.data.trips)
      })
      .catch((error) => {
        console.error(error.data)
      })
  }, [])

  const tripsCards = trips?.map((item) => {
    return (
      <ContainerPai>
        <CardTrips onClick={() => goToTripDetails(item.id)}>
          <p>{item.name}</p>
        </CardTrips>
      </ContainerPai>
    )
  })
  return (
    <ContainerButtons>
      <ButtonBack onClick={goToHomePage}>voltar</ButtonBack>
      <ButtonCreateTrip onClick={goToCreateTrip}>Criar Viagem</ButtonCreateTrip>
      <button onClick={goToLoginPage}>Logout</button>
      {tripsCards}
    </ContainerButtons>
  )
}
