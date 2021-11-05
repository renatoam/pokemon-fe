import Translate from '@components/configuration/Translate'

import { ButtonWrapper, StyledButton } from './styles'

interface ButtonProps {
  text: string
  variant?: 'primary' | 'alternative'
  disabled?: boolean
  handleClick: () => void
}

export default function Button (props: ButtonProps) {
  const { text, variant = 'primary', handleClick, disabled = false } = props

  return (
    <ButtonWrapper>
      <StyledButton disabled={disabled} variant={variant} onClick={handleClick}>
        <Translate text={text} />
      </StyledButton>
    </ButtonWrapper>
  )
}
