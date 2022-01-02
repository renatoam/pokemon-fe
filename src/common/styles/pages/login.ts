import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(/shapes/background-shape.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.section`
  width: 80%;
  height: 80%;
  background-color: #4A3B8A;
  background-image: url(/images/illustration.svg), url(/shapes/form-shape.svg);
  background-repeat: no-repeat;
  background-size: 50%, 70%;
  background-position: 10% center, -20% center;
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4.5rem;
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  width: 35%;
`

export const Title = styled.h1`
  font-size: clamp(2rem, 3vw, 4.5rem);
  color: #FFBB4E;
  text-transform: uppercase;
`

export const Description = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.7rem);
  color: #FFFFFF;
  text-align: right;
`

interface FormGroupProps {
  column?: boolean
}

export const FormGroup = styled.section<FormGroupProps>`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: space-between;
  margin: 1rem 0;
  width: 100%;
`

export const Input = styled.input`
  background-color: transparent;
  border: 2px solid #FFBB4E;
  border-radius: 8px;
  height: 50px;
  width: 100%;
  color: #FFBB4E;
  margin: .8rem 0;
  padding: 0 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  transition: all .4s ease-in-out;

  &::placeholder {
    color: #FFBB4E;
    opacity: .6
  }

  &:focus {
    border: 2px solid #9d89f3;
    outline: #7D5FFF;
    box-shadow: 0 0 8px 0 #7D5FFF;
  }
`

export const PrimaryButton = styled.button`
  border: none;
  width: 40%;
  height: 45px;
  background-color: #FFBB4E;
  border-radius: 8px;
  color: #4A3B8A;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all .4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #EDA126;
  }
`

export const SecondaryButton = styled.button`
  border: 2px solid #FFBB4E;
  width: 40%;
  height: 45px;
  background-color: transparent;
  border-radius: 8px;
  color: #FFBB4E;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all .4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #7D5FFF;
    border: 2px solid #7D5FFF;
  }
`

export const OrDivider = styled.p`
  text-transform: uppercase;
  color: #FFBB4E;
  font-size: 1.5rem;
  position: relative;
  text-align: center;
  width: 100%;

  &::before, &::after {
    content: '';
    display: block;
    background-color: #FFBB4E;
    width: 35%;
    height: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`
