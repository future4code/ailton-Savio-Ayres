import { Request, Response } from 'express'
import insertUser from '../data/insertUser'

export default async function createUser(req: Request, res: Response) {
  try {
    if (!req.body.name || !req.body.nickname || !req.body.email) {
      res.status(400).send({ message: 'Preencha os campos corretamente' })
    }

    await insertUser(req.body.name, req.body.nickname, req.body.email)

    res.status(200).send({ message: 'Usuário criado com sucesso!!!' })
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    })
  }
}
