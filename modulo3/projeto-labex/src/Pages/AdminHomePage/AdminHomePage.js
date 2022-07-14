import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const CardTrips = styled.div`
  color: white;
`

export const AdminHomePage = () => {
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

  const goToLoginPage = () => {
    navigate('/loginPage')
  }

  const goToCreateTrip = () => {
    navigate('/admin/createTrip')
  }

  const goToTripDetails = (id) => {
    navigate(`/admin/tripDetails/${id}`)
  }

  const tripsCards = trips?.map((item) => {
    return (
      <div>
        <CardTrips onClick={() => goToTripDetails(item.id)}>
          <p>{item.name}</p>
        </CardTrips>
      </div>
    )
  })
  return (
    <div>
      <button onClick={goToHomePage}>voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToLoginPage}>Logout</button>

      {tripsCards}
    </div>
  )
}
