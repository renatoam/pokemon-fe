import styled from 'styled-components';

type ButtonProps = {
  variant: 'primary' | 'alternative'
}

export const ButtonWrapper = styled.section`
  display: flex;
  width: 100%;
`

export const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ variant }) => (variant === 'primary' ? 'var(--primary)' : 'transparent')};
  border: none;
  color: ${({ variant }) => (variant === 'primary' ? 'var(--text-primary)' : 'var(--text-secondary)')};
  cursor: pointer;
  display: flex;
  font-size: var(--font-md);
  height: var(--s-lg);
  justify-content: center;
  padding: var(--sp-lg);
  text-transform: uppercase;
  width: 100%;

  &:disabled {
    background-color: var(--primary-hover);
    cursor: not-allowed;
    pointer-events: none;
  }
`
