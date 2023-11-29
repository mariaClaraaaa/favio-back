import { test } from '@japa/runner'

test('display welcome page', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({ app: 'favio-back' })
})

// test('nome do app', async({client})=> {
//   const resposta = await client.get('/')
//   resposta.assertStatus(200)
//   resposta.assertBodyContains({app:'favio-back'})
// })