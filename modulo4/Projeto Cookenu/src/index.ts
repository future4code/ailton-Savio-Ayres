import { app } from './app'
import { BaseDataBase } from './data/BaseDataBase'

app.get('/teste', async (req, res) => {
  const result = await new BaseDataBase().getConnection().raw('SHOW TABLES')
  res.send({ result })
})
