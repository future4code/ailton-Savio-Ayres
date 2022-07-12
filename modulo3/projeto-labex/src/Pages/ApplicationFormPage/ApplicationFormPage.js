import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ApplicationFormPage = () => {
  const navigate = useNavigate()

  const goToListTrips = () => {
    navigate('/trips/list')
  }

  return (
    <div>
      <button onClick={goToListTrips}>Voltar</button>
      <button>Enviar</button>
    </div>
  )
}
