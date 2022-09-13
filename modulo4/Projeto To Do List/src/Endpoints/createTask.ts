import { Request, Response } from 'express'
import insertTask from '../data/insertTask'

export default async function createTask(req: Request, res: Response) {
  try {
    if (
      !req.body.tittle ||
      !req.body.description ||
      !req.body.deadline ||
      !req.body.authorId
    ) {
      res.status(400).send({
        message: 'Preencha os campos obrigatórios'
      })
    }
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    })
  }
  const id: string = Date.now() + Math.random().toString()
  await insertTask(
    id,
    req.body.tittle,
    req.body.description,
    req.body.deadline,
    req.body.authorId
  )
  res.status(200).send({
    message: 'Tarefa criada com sucesso',
    id
  })
}
