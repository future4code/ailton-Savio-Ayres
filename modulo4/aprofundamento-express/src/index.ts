import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
//EXERCÍCIO 1
//------------------------------------------------
app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong! 🏓')
})
//EXERCÍCIO 2
type Task = {
  userId: number
  id: number
  tittle: string
  completed: boolean
}
//------------------------------------------------
//EXERCÍCIO 3
const task: Task[] = [
  {
    userId: 1,
    id: 1,
    tittle: 'Homi-Aranha',
    completed: true
  },
  {
    userId: 2,
    id: 2,
    tittle: 'Batima',
    completed: false
  },
  {
    userId: 3,
    id: 3,
    tittle: 'Guaxinin e amigos',
    completed: true
  },
  {
    userId: 4,
    id: 4,
    tittle: 'Saitama',
    completed: false
  }
]
//----------------------------------------------------
//EXERCÍCIO 4
app.get('/completed/:completed', (req: Request, resp: Response) => {
  const completed: boolean = req.params.completed === 'true' ? true : false
  const verdadeiro = task.filter((task) => {
    return task.completed === completed
  })
  resp.status(200).send(verdadeiro)
  console.log(req.params.completed)
})
//--------------------------------------------------------
//EXERCÍCIO 5
app.post('/createTasks', (req: Request, resp: Response) => {
  task.push(req.body)
  resp.send(task)
})
//---------------------------------------------------------
//EXERCÍCIO 6

//--------------------------------------------------------

//EXERCÍCIO 7
app.delete('/deleteTask/id', (req: Request, resp: Response) => {
  const id = Number(req.params.id)

  const delTask: Task[] = task.filter((task) => {
    return task.id !== id
  })
  resp.send(delTask)
})

app.listen(3003, () => {
  console.log('Server is running in http://localhost:3003')
})
