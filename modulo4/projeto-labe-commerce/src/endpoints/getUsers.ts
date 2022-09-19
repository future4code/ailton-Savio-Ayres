import { Request, Response } from 'express'
import selectUsers from '../Data/selectUsers'

export default async function getUsers(req: Request, res: Response) {
  try {
    const allUsers = await selectUsers()

    if (!allUsers?.length) {
      throw new Error('Não há usuário cadastrado')
    }

    res.status(200).send(allUsers)
  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
}
