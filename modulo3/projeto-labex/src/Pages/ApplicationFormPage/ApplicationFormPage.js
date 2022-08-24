import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { labexApi } from '../../Api'
import useForm from '../../Hooks/useForm'
import { useEffect, useState } from 'react'

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
const CardTrip = styled.div``

const InputName = styled.input`
  width: 97%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`
const SelectPlanet = styled.select`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
`

const InputIdade = styled.input`
  width: 97%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`

const InputCandidatura = styled.input`
  width: 97%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`

const InputProfissao = styled.input`
  width: 485px;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
`

const SelectPais = styled.select`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
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
const ButtonSend = styled.button`
  background-color: #14145a;
  border-radius: 0 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  margin: 0px 30px;
`

export const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([])
  const { form, onChange, cleanFields } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
    trip: ''
  })

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    labexApi
      .post(`/trips/${form.id}/apply`, form)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const selectTrip = () => {
      labexApi
        .get(`/trips`, form)
        .then((response) => {
          setTrips(response.data.trips)
          console.log(trips)
        })
        .catch((error) => {
          console.error(error.data)
        })
    }
    selectTrip()
  }, [])

  const navigate = useNavigate()

  const goToListTrips = () => {
    navigate('/trips/list')
  }

  const tripForm = trips?.map((item) => {
    return (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    )
  })

  return (
    <ContainerGeral>
      <ContainerRegistro>
        <form onSubmit={onSubmit}>
          <Titulo>Inscreva-se para uma viagem</Titulo>
          <SelectPlanet onChange={onChange} name={'trip'}>
            <option
              disable=""
              selected={undefined}
              label=" Escolha uma viagem"
            />
            {tripForm}
          </SelectPlanet>
          <InputName
            onChange={onChange}
            placeholder="Nome"
            name="name"
            required=""
          ></InputName>
          <InputIdade
            onChange={onChange}
            placeholder="Idade"
            type="number"
            name="age"
            required=""
            min="18"
          ></InputIdade>
          <InputCandidatura
            onChange={onChange}
            placeholder="Texto de Candidatura"
            name="applicationText"
          ></InputCandidatura>
          <InputProfissao
            onChange={onChange}
            placeholder="Profissão"
            name="profession"
          ></InputProfissao>
          <SelectPais
            onChange={onChange}
            placeholder="País"
            name="country"
            required=""
          >
            <option value="" disable="">
              Escolha um País
            </option>
            <option value="Brasil">Brasil</option>
          </SelectPais>

          <ButtonBack onClick={goToListTrips}>Voltar</ButtonBack>
          <ButtonSend>Enviar</ButtonSend>
        </form>
      </ContainerRegistro>
    </ContainerGeral>
  )
}
