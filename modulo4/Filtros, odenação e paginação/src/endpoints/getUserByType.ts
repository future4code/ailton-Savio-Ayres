import { Request, Response } from 'express'
import { connection } from '../data/connection'

export async function getUserByType(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const tipo = req.params.type
    console.log(tipo)

    const result = await connection('aula48_exercicio').where(
      'type',
      'like',
      `%${tipo}%`
    )

    const typesMap = result.map((item) => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        type: item.type
      }
    })
    res.status(200).send(typesMap)
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
}
