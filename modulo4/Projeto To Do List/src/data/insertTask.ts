import connection from '../connection'

export default async function insertTask(
  id: string,
  tittle: string,
  description: string,
  deadline: string,
  authorId: string
) {
  await connection('to_do_list_tasks').insert({
    id,
    tittle,
    description,
    deadline,
    author_Id: authorId
  })
}
