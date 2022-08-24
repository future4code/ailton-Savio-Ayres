import React, { useEffect, useState } from 'react'
import { HomePage } from '../HomePage/HomePage'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { labexApi } from '../../Api'

const ContainerGeral = styled.div`
  padding: 0px;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContainerCards = styled.div`
  margin: 0 20px;
  padding: 20px;
`

const Titulo = styled.h1`
  color: white;
  display: flex;
  text-align: center;
`
const CardTrips = styled.div`
  color: white;
  padding: 25px;

  gap: 0 250px;
  background-color: #003153;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const ButtonBack = styled.button`
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

const ButtonSignup = styled.button`
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

export const ListTripsPage = () => {
  const [trips, setTrips] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    labexApi

      .get(`/trips`)
      .then((response) => {
        setTrips(response.data.trips)
      })
      .catch((error) => {
        console.error(error.data)
      })
  }, [counter])

  const deleteTrip = (id) => {
    labexApi
      .delete(`/trips/${id}`)
      .then((response) => {
        console.log(response)
        setCounter(counter + 1)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToForm = (id) => {
    navigate(`/trips/applicationForm`)
  }

  const tripsCards = trips?.map((item) => {
    return (
      <div>
        <CardTrips onClick={() => item.id}>
          <p>{item.name}</p>

          <button onClick={() => deleteTrip(item.id)}>Delete</button>
        </CardTrips>
      </div>
    )
  })

  return (
    <ContainerGeral>
      <Titulo>Lista de Viagens</Titulo>
      <ContainerCards>
        {tripsCards}
        <ButtonBack onClick={goToHomePage}>Voltar</ButtonBack>
        <ButtonSignup onClick={goToForm}>Inscrever-se</ButtonSignup>
      </ContainerCards>
    </ContainerGeral>
  )
}
