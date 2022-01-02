import { Google, Facebook, Twitter } from '@public/index'
import {
  Main,
  Wrapper,
  Article,
  Title,
  Description,
  Input,
  FormGroup,
  PrimaryButton,
  SecondaryButton,
  OrDivider,
} from '@styles/pages/login'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  async function testLogin() {
    try {
      const response = await axios.post('/api/signin', { email, password })

      if (response.status !== 201 && response.status !== 200) {
        return alert('Something went wrong!')
      }

      setIsAuthenticated(true)

      localStorage.setItem('user', response.data.email)
    } catch (error) {
      setIsAuthenticated(false)
      return new Error(`[Auth Error]: ${JSON.stringify(error)}`)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated])

  return (
    <Main>
      <Wrapper>
        <Article>
          <Title>Welcome!</Title>
          <Description>Join us, play with other people, earn rewards and much more...</Description>
          <FormGroup column>
            <Input placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          </FormGroup>
          <FormGroup>
            <PrimaryButton onClick={testLogin}>Sign In</PrimaryButton>
            <SecondaryButton>
              <Link href="/signup">Sign Up</Link>
            </SecondaryButton>
          </FormGroup>
          <FormGroup>
            <OrDivider>Or</OrDivider>
          </FormGroup>
          <FormGroup style={{ width: '60%', margin: '1rem auto' }}>
            <Google />
            <Facebook />
            <Twitter />
          </FormGroup>
        </Article>
      </Wrapper>
    </Main>
  )
}

// page background-color: 0B0526
// form background-color: 4A3B8A
// primary color (purple): 7D5FFF
// secondary color (yellow): FFBB4E
