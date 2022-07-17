import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import useForm from '../../Hooks/useForm'
import { labexApi } from '../../Api'

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
  const { form, onChange, cleanFields } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: 0
  })

  const createTrip = (body) => {
    console.log(body)
    labexApi
      .post(`/trips`, form)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.data)
      })
  }
  const navigate = useNavigate()

  const goToAdminHome = () => {
    navigate('/adminHome')
  }

  return (
    <ContainerGeral>
      <CardCriar>
        <Titulo>Criar Viagem</Titulo>
        <form
          onSubmit={(event) => {
            createTrip(form)
            event.preventDefault()
          }}
        >
          <InputNome
            name={'name'}
            value={form.name}
            onChange={onChange}
            placeholder={'Nome'}
            required
          ></InputNome>

          <SelectPlanet name={'planet'} value={form.planet} onChange={onChange}>
            <option disable="" selected={undefined}>
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
            name={'date'}
            value={form.date}
            onChange={onChange}
            placeholder="Data"
            type="Date"
            required=""
            min="2022-07-14"
          ></InputData>
          <InputDescricao
            name={'description'}
            value={form.description}
            onChange={onChange}
            placeholder="Descrição"
            required
          ></InputDescricao>
          <InputDuracao
            name={'durationInDays'}
            value={form.durationInDays}
            onChange={onChange}
            placeholder="Duração em dias"
            type="number"
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
