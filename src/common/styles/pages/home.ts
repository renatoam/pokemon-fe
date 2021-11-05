import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 12rem);
  grid-gap: 1rem;
  justify-content: center;
  margin: 2rem auto;
  padding: var(--sp-lg);
  width: 40%;
`

export const Card = styled.section`
  display: flex;
  flex-direction: column;

  small {
    color: ${(props) => props.theme.colors.textAlternative};
    font-weight: bold;
  }

  span {
    align-items: center;
    border-radius: 0.2rem;
    display: inline-flex;
    height: 1.1rem;
    justify-content: center;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    width: 4rem;
  }
`

export const Figure = styled.figure`
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 10rem;
  width: 100%;

  img {
    width: 60%;
  }
`
