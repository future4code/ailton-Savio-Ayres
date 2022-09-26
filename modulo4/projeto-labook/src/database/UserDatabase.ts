import { BaseDatabase } from './BaseDatabase'
import { IUserDB, User } from '../models/User'

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = 'Labook_Users'

  private userModelDB = (user: User): IUserDB => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    }
    return userDB
  }

  public findByEmail = async (email: string) => {
    const result = await BaseDatabase.connection('Labook_Users')
      .select('*')
      .where({ email })

    return result[0]
  }
  public createUser = async (user: User) => {
    console.log('user', user)

    const userDB = this.userModelDB(user)
    console.log('User modelado', userDB)

    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB)
  }
}
