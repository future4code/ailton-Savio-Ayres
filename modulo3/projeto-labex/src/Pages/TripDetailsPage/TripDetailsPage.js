import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ContainerPai = styled.div``
const CardTrips = styled.div`
  color: white;
`

export const TripDetailsPage = () => {
  const [tripDetail, setTripDetail] = useState([])

  const params = useParams()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${params.id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        setTripDetail(response.data.trip)
        console.log(response)
      })
      .catch((error) => {
        console.log(error.data)
      })
  }, [])

  const candidates = tripDetail.candidates?.map((item) => {
    return (
      <div>
        <p>{item.name}</p>
      </div>
    )
  })
  return (
    <ContainerPai>
      <CardTrips>
        <div>
          <p>{tripDetail.planet}</p>
          <p>{tripDetail.durationInDays}</p>
          <p>{tripDetail.date}</p>
          <p>{tripDetail.name}</p>
          <p>{tripDetail.description}</p>
          {candidates}
        </div>
      </CardTrips>
    </ContainerPai>
  )
}
