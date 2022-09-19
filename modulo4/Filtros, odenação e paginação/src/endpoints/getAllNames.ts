import { Request, Response } from 'express'
import { connection } from '../data/connection'

export async function getUserAllNames(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let name = req.query.name

    if (!name) {
      name = ''
    }
    const result = await connection('aula48_exercicio').where(
      'name',
      'like',
      `${name}`
    )

    const users = result.map((usuario: any) => {
      const type = {
        id: usuario.id,
        name: usuario.name,
        email: usuario.email,
        type: usuario.type
      }
      return type
    })

    res.status(200).send(users)
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
}
