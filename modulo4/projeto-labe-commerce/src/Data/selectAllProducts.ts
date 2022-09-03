import { productsData } from '../Types/typesProducts'
import { connection } from './baseDataBase'

const productsType = (product: any) => {
  const typeProducts: productsData = {
    id: product.id,
    name: product.name,
    price: product.price,
    image_url: product.image_url
  }
  return typeProducts
}

export default async function selectAllProducts(): Promise<
  productsData[] | undefined
> {
  const result = await connection('labecommerce_products')

  const allProductType = result.map((product) => {
    return productsType(product)
  })
  return allProductType
}
