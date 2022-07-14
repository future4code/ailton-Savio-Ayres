import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'

const ContainerGeral = styled.div`
  padding: 0px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardCriar = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  width: 500px;
`

const Titulo = styled.h1`
  color: white;
`

const InputNome = styled.input`
  width: 97%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`

const SelectPlanet = styled.select`
  width: 518px;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
`
const InputData = styled.input`
  width: 97%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`
const InputDuracao = styled.input`
  width: 97%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`
const InputDescricao = styled.input`
  width: 97%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`

export const CreateTripPage = () => {
  const [name, setName] = useState('')
  const [planet, setPlanet] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangePlanet = (event) => {
    setPlanet(event.target.value)
  }

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }
  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const onChangeDuration = (event) => {
    setDuration(event.target.value)
  }
  const navigate = useNavigate()

  const goToAdminHome = () => {
    navigate('/adminHome')
  }

  return (
    <ContainerGeral>
      <CardCriar>
        <Titulo>Criar Viagem</Titulo>
        <form>
          <InputNome
            onChange={onChangeName}
            placeholder={'Nome'}
            required
          ></InputNome>

          <SelectPlanet name={'Select'}>
            <option onChange={onChangePlanet} value="" disable="" selected="">
              Escolha um Planeta
            </option>
            <option value={'Mercúrio'}>Mercúrio</option>
            <option value={'Vênus'}>Vênus</option>
            <option value={'Terra'}>Terra</option>
            <option value={'Marte'}>Marte</option>
            <option value={'Jupiter'}>Jupiter</option>
            <option value={'Saturno'}>Saturno</option>
            <option value={'Urano'}>Urano</option>
            <option value={'Netuno'}>Netuno</option>
            <option value={'Plutão'}>Plutão</option>
          </SelectPlanet>
          <InputData
            onChange={onChangeDate}
            placeholder="Data"
            type="Date"
            name="date"
            required=""
            min="2022-07-14"
          ></InputData>
          <InputDescricao
            onChange={onChangeDescription}
            placeholder="Descrição"
            required
          ></InputDescricao>
          <InputDuracao
            onChange={onChangeDuration}
            placeholder="Duração em dias"
            type="number"
            name="durationInDays"
            required=""
            min="50"
          ></InputDuracao>
          <button onClick={goToAdminHome}>Voltar</button>
          <button>Criar</button>
        </form>
      </CardCriar>
    </ContainerGeral>
  )
}
