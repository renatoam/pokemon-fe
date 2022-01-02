import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

type User = {
  email: string
  password: string
}

const users: User[] = []

// remove when there is database
async function initMockUser() {
  const password = await bcrypt.hash('123456', 10)
  const mockUser = {
    email: 'renatoalves92@gmail.com',
    password
  }

  users.push(mockUser)
}

function getUser(email: string) {
  const userFinding = users.find(usr => usr.email === email)

  return userFinding
}

export default async function signin(request: NextApiRequest, response: NextApiResponse) {
  await initMockUser() // remove later
  const { email, password } = request.body as User
  const dbUser = getUser(email)

  if (!dbUser) {
    // return response.writeHead(307, { location: 'http://localhost:3000/auth/signup' }).end()
    // return response.redirect('/auth/signup')
    return response.status(401).send({ message: 'There is no user with this email!' })
  }

  const result = await bcrypt.compare(password, dbUser.password)
  if (!result) return response.status(401).send('Login failed! Wrong password.')

  // secret key encriptada com https://www.md5hashgenerator.com/
  const secretKey = process.env.JWTKEY || ''
  const token = jwt.sign({ email }, secretKey, { expiresIn: 3600 })

  // Usando cookie, no middleware das rotas (back-end) não pegamos o cookie mais de request.headers.authorization, agora pegamos de request.cookies.token (token é o nome que eu dei pro cookie)
  response.setHeader('Set-Cookie', cookie.serialize('token', token, {
    httpOnly: true, // if true, we cannot get the cookie via js. For example, we cannot access this cookie via document.cookie, js-cookie, universal-cookie or any library we have.
    secure: process.env.NODE_ENV !== 'development', // true in prod
    sameSite: 'strict',
    maxAge: 3600,
    path: '/'
  }))

  // Por que não envio o token por response? Porque se colocamos httpOnly pra evitar que o token seja acessado via JS, não tem sentido enviá-lo na resposta da requisição
  return response.status(201).send({ email, message: 'Login successful!' })
}
