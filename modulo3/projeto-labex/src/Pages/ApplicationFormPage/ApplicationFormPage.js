import React from 'react'
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

const ContainerRegistro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
`

const Titulo = styled.h1`
  color: white;
`

export const ApplicationFormPage = () => {
  const navigate = useNavigate()

  const goToListTrips = () => {
    navigate('/trips/list')
  }

  return (
    <ContainerGeral>
      <ContainerRegistro>
        <Titulo>Inscreva-se para uma viagem</Titulo>
        <select name={'Select'}>
          <option value="" disable="" selected="">
            Escolha um planeta
          </option>
          <option value={'Baixa Prioridade'}>Baixa Prioridade</option>
          <option value={'Vamos para Marte?'}>Vamos para Marte?</option>
          <option value={'aaaaaaa'}>Aaaaaaa</option>
          <option value={'Viagem fria para Plutão'}>
            Viagem fria para Plutão
          </option>
          <option value={'Grande prioridade'}>Grande prioridade</option>
          <option value={'Namekusei'}>Namekusei</option>
        </select>
        <input placeholder="Nome" name="name" required=""></input>
        <input
          placeholder="Idade"
          type="number"
          name="age"
          required=""
          min="18"
        ></input>
        <input
          placeholder="Texto de Candidatura"
          name="applicationText"
        ></input>
        <input placeholder="Profissão" name="profession"></input>
        <select placeholder="País" name="country" required="">
          <option value="" disable="">
            Escolha um País
          </option>
          <option value="Brasil">Brasil</option>
        </select>

        <button onClick={goToListTrips}>Voltar</button>
        <button>Enviar</button>
      </ContainerRegistro>
    </ContainerGeral>
  )
}
