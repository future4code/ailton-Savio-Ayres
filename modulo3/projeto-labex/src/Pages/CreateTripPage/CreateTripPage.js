import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import useForm from '../../Hooks/useForm'

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
  // const [name, setName] = useState('')
  // const [planet, setPlanet] = useState('')
  // const [date, setDate] = useState('')
  // const [description, setDescription] = useState('')
  // const [duration, setDuration] = useState('')

  // const onChangeName = (event) => {
  //   setName(event.target.value)
  // }

  // const onChangePlanet = (event) => {
  //   setPlanet(event.target.value)
  // }

  // const onChangeDate = (event) => {
  //   setDate(event.target.value)
  // }
  // const onChangeDescription = (event) => {
  //   setDescription(event.target.value)
  // }

  // const onChangeDuration = (event) => {
  //   setDuration(event.target.value)
  // }
  const navigate = useNavigate()

  const goToAdminHome = () => {
    navigate('/adminHome')
  }

  const createTrip = (event) => {
    console.log(form)
    event.preventDefault()
    cleanFields()
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/savio-ayres-ailton/trips`,
        form,
        {
          headers: {
            auth: localStorage.getItem('token')
          }
        }
      )
      .then((response) => {
        alert('Viagem criada!')
        console.log(response.data)
      })
      .catch((error) => {
        console.log('Erro encontrado', error.response)
      })
  }

  return (
    <ContainerGeral>
      <CardCriar>
        <Titulo>Criar Viagem</Titulo>
        <form onSubmit={createTrip}>
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
