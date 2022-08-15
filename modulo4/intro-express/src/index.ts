import express, { Request, response, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// ------------------------------------------------------
// EXERCÍCIO 1
app.get('/', (req: Request, res: Response) => {
  res.send('Foi o/')
})
//---------------------------------------------------------
//EXERCÍCIO 2

type usuario = {
  id: string
  name: string
  fone: number
  email: string
  website: string
}
// //---------------------------------------------------------
// EXERCÍCIO 3
type perfil = {
  nome: string
  nacionalidade: string
  idade: number
  redesocial: string
}

const perfis: perfil[] = [
  {
    nome: 'Sávio Ayres',
    nacionalidade: 'Brasileiro',
    idade: 27,
    redesocial: 'Orkut KKKK'
  },

  {
    nome: 'Tatiana Ayres',
    nacionalidade: 'Brasileira',
    idade: 32,
    redesocial: 'Facebook'
  },

  {
    nome: 'João Bosco',
    nacionalidade: 'Brasileiro',
    idade: 60,
    redesocial: 'Telegram'
  }
]
//------------------------------------------------------
// EXERCÍCIO 4

app.get('/perfis', (req: Request, res: Response) => {
  response.send(perfis)
})
//----------------------------------------------------------
// EXERCÍCIO 5
type post = {
  id: number
  title: string
  body: string
  userId: string | number
}
//-----------------------------------------------
// EXERCÍCIO 6
const posts: post[] = [
  {
    id: 1,
    title: 'que que há velhinho?',
    body: 'Testando0',
    userId: 'Pernalonga'
  },
  {
    id: 2,
    title: 'Não contava com minha astúcia',
    body: 'Testando1',
    userId: 'Chapolin'
  },
  {
    id: 3,
    title: 'bleeeebleeeelbueeee',
    body: 'Testando3',
    userId: 'taz mania'
  }
]
//------------------------------------------------------
// EXERCÍCIO 7
app.get('/posts', (req: Request, res: Response) => {
  response.send(posts)
})
//--------------------------------------------------------
// EXERCÍCIO 8 >>>. Revisar depois, não deu certo.
// app.get('/posts:id', (req: Request, resp: Response) => {
//   const id = req.params.id

//   const posts: post[] = posts.filter((post) => {
//     return post.userId === Number(id)
//   })
//   response.send(posts)
// })

app.listen(3003, () => {
  console.log('Server is running in http://localhost:3003')
})
