import express, { Express } from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import axios from 'axios'
import { BASE_URL } from './url'
import { AddressInfo } from 'net'

dotenv.config()

export const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

// EXERCÍCIO 1

// A) Método GET

// B)Utilizando a promisse<any[]>

// C)
// async function getSubscribers(): Promise<any[]> {
//   const response = await axios.get(`${BASE_URL}/subscribers`)
//   return response.data
// }

// EXERCÍCIO 2
// A)
// B)
// const getSubscribers = async (): Promise<any[]> => {
//     const response = await axios.get(`${BASE_URL}/subscribers`);
//     return response.data;
//   };

//   EXERCÍCIO 3
// A)
type user = {
  id: string
  name: string
  email: string
}
const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${BASE_URL}/subscribers`)
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email
    }
  })
}

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})
