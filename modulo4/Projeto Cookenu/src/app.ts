import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

export const app: Express = express()

app.use(cors())

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(process.env.PORT)
    console.log(`Server is running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})
