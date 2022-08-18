import express, { Express, Request, response, Response } from 'express'
import cors from 'cors'

const app: Express = express()
app.use(express.json())
app.use(cors())

enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL'
}

type user = {
  id: number
  name: string
  email: string
  type: UserType
  age: number
}

let users: user[] = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@email.com',
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@email.com',
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: 'Coragem',
    email: 'coragem@email.com',
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: 'Dory',
    email: 'dory@email.com',
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: 'Elsa',
    email: 'elsa@email.com',
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: 'Fred',
    email: 'fred@email.com',
    type: UserType.ADMIN,
    age: 60
  }
]

//EXERCÍCIO 1
app.get('/users', (req: Request, res: Response) => {
  res.send(users)
})

//A) get

//B) /users
//---------------------------------------------------------------
//EXERCÍCIO 2

// app.get('/users', (req: Request, res: Response) => {
//   let errorCode = 400
//   try {
//     let type = req.query.type as string

//     if (type !== 'NORMAL' && type !== 'ADMIN') {
//       errorCode = 404

//       throw new Error('Esse tipo não existe')
//     }
//     const resultado = users.filter((user) => user.type === type)
//     res.status(200).send(resultado)
//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message })
//   }
// })
//---------------------------------------------------------------
//EXERCÍCIO 3

app.get('/users', (req: Request, resp: Response) => {
  let codeError: number = 400
  try {
    const name: string = req.query.name as string
    const user: user | undefined = users.find((user) => user.name === name)
    if (!user) {
      codeError = 404
      throw new Error('Usuário não encontrado')
    }
    resp.status(200).send(user)
  } catch (error: any) {
    resp.status(codeError).send({ message: error.message })
  }
})
//-----------------------------------------------------------------
//EXERCÍCIO 4
app.post('/users', (req: Request, resp: Response) => {
  let errorCode: number = 400
  try {
    const { id, name, email, type, age } = req.body
    if (!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error(
        'Por favor, verificar se os os campos estão prenchidos corretamente.'
      )
    }

    const newUser: user = {
      id,
      name,
      email,
      type,
      age
    }
    users.push(newUser)

    resp.status(201).send({ message: 'Usuário criado com sucesso' })
  } catch (error: any) {
    resp.status(errorCode).send({ message: error.message })
  }
})

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`)
})
