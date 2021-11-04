import styled from 'styled-components';

export const LogoWrapper = styled.figure`
  display: flex;
  align-items: center;
  width: 2rem;

  > a {
    display: block;

    div {
      position: unset !important;
    }
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`
