import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import dotenv from 'dotenv'
import createUser from './Endpoints/createUser'
import getUserById from './Endpoints/getUserById'
import editUser from './Endpoints/editUser'
import createTask from './Endpoints/createTask'

const app = express()

app.use(express.json())
app.use(cors())

app.put('/user', createUser)
app.get('/user/:id', getUserById)
app.post('/user/edit/:id', editUser)
app.put('/task', createTask)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

export default app
