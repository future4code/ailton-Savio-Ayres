import { BaseError } from './BaseError'

export class MissingFields extends BaseError {
  constructor() {
    super('Faltam parâmetros', 404)
  }
}
