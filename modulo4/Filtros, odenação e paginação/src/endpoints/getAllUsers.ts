import { Request, Response } from 'express'
import { connection } from '../data/connection'

export async function getAllUsers(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection('aula48_exercicio')

    const recipes = result.map((item) => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        type: item.type
      }
    })

    if (!recipes.length) {
      res.statusCode = 404
      throw new Error('Erro')
    }

    res.status(200).send(recipes)
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}
