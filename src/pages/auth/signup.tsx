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
import { useRef } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function SignUp() {
  const email = useRef(null)
  const password = useRef(null)

  function testSignUp() {
    axios.post('/api/signup', {
      name: 'Renato',
      password: '123456',
      confirmPassword: '123456',
    })
  }

  return (
    <Main>
      <Wrapper>
        <Article>
          <Title>Welcome!</Title>
          <Description>Join us, play with other people, earn rewards and much more...</Description>
          <FormGroup column>
            <Input placeholder="Email" ref={email} />
            <Input placeholder="Password" ref={password} />
            <Input placeholder="Confirm Password" />
          </FormGroup>
          <FormGroup>
            <PrimaryButton onClick={testSignUp}>Create Account</PrimaryButton>
            <SecondaryButton>
              <Link href="/signin">Already have an account?</Link>
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
