import express, { Express, Request, Response } from 'express'
import cors from 'cors'

const app: Express = express()
app.use(express.json())
app.use(cors())

type Transation = {
  value: number
  date: Date
  description: string
}

type Account = {
  name: string
  age: number
  cpf: string
  dateBirth: Date
  balance: number
  statement: Array<Transation>
}

const accounts: Account[] = []

app.get('/users/allUsers', (req: Request, res: Response) => {
  try {
    if (!accounts.length) {
      res.statusCode = 404
      throw new Error('Nada encontrado')
    }
    res.status(200).send(accounts)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

app.post('/user/create', (req: Request, res: Response) => {
  try {
    const { name, cpf, age, dateBirthWithString } = req.body

    const [day, mouth, year] = dateBirthWithString.split('/')

    const dateBirth: Date = new Date(`${year}-${mouth}-${day}`)

    //------

    const ageConversion: number = Date.now() - dateBirth.getTime()

    const checkAge: number = ageConversion / 100 / 60 / 60 / 24 / 365

    if (age < 18) {
      res.statusCode = 404
      throw new Error('O usuário precisa ser maior de idade')
    }
    accounts.push({
      name,
      age,
      cpf,
      dateBirth,
      balance: 0,
      statement: []
    })

    res.status(201).send('Conta criada com sucesso')
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`)
})
