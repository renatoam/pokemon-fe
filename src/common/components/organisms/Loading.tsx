import styled from 'styled-components'

const LoadingScreen = styled.section`
  background-color: #e51515;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;

  img {
    height: 80px;
    width: 80px;
  }
`

export default function Loading () {
  return (
    <>
      <LoadingScreen>
        <img src="/icons/pokebola.svg" alt="Loading..." />
        <p>Loading...</p>
      </LoadingScreen>
    </>
  )
}
