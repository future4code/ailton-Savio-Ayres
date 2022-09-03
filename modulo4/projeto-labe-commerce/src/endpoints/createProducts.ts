import { productsData, productsInser } from '../Types/typesProducts'
import { Request, Response } from 'express'
import insertProduct from '../Data/insertProduct'

export default async function createProducts(req: Request, res: Response) {
  try {
    const { name, price, image_url }: productsInser = req.body

    if (!name || !price || !image_url) {
      throw new Error('Passe os valores corretamente')
    }
    const productsData: productsData = {
      id: Date.now().toString(),
      name,
      price,
      image_url
    }
    const anwser = await insertProduct(productsData)
    res.status(201).send({ message: anwser })
  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
}
