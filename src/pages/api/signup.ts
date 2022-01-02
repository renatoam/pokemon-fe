import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt'

type User = {
  name: string
  password: string
  confirmPassword: string
}

const users = []

export default async function signup(request: NextApiRequest, response: NextApiResponse) {
  try {
    const newUser = request.body as User
    const name = newUser.name
    const password = await bcrypt.hash(newUser.password, 10)

    if (newUser.password !== newUser.confirmPassword) {
      return response.status(401).send("Password doesn't match with the confirmation!")
    }

    users.push({ name, password })

    return response.status(201).send(`User ${newUser} has been created!`)
  } catch (error) {
    return response.status(500).send({ error })
  }
}
