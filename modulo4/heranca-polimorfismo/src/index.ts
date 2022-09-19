// no index.ts:

import express, { Express } from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
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

class User {
  private id: string
  private email: string
  private name: string
  private password: string

  constructor(id: string, email: string, name: string, password: string) {
    console.log('Chamando o construtor da classe User')
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }
}

//EXERCÍCIO 1

//A) Não, ela não foi chamada. Teria que ser public e criar uma funcão por exemplo "getpassword"
//B) 3 vezes

class Customer extends User {
  public purchaseTotal: number = 0
  private creditCard: string

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password)
    console.log('Chamando o construtor da classe Customer')
    this.creditCard = creditCard
  }

  public getCreditCard(): string {
    return this.creditCard
  }
}

//EXERCÍCIO 2

//A)


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})
