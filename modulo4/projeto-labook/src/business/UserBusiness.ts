import { UserDatabase } from '../database/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

import {
  ISignupInputDTO,
  ISignupOutputDTO,
  ITokenPayLoad,
  User,
  USER_ROLES
} from '../models/User'

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO): Promise<any> => {
    // ocorre um erro na promise, "ISignupOutputDTO", coloquei "any"
    const { name, email, password } = input

    if (name.length < 3) {
      throw new Error(
        'Dados inválidos, é necessário ter no mínimo 3 caractéres'
      )
    }
    if (password.length < 6) {
      throw new Error('Dados inválidos, deve possuir no nínimo 6 caractéres')
    }

    // if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)) {
    //   throw new Error('formato do email inválido')
    // }
    const isEmailAlreadyExist = await this.userDatabase.findByEmail(email)

    if (isEmailAlreadyExist) {
      throw new Error('Email já está cadastrado')
    }
    const id = this.idGenerator.generate()
    const hashPassword = await this.hashManager.hash(password)

    const user = new User(id, name, email, hashPassword, USER_ROLES.NORMAL)

    await this.userDatabase.createUser(user)

    const payload: ITokenPayLoad = {
      id: user.getId(),
      role: user.getRole()
    }

    const token = this.authenticator.generateToken(payload)

    const response = {
      message: `Usuário " ${user.getName()} " cadastro realizado com sucesso`,
      token
    }
  }
}
