import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface ITranslate {
  text: string
  casing?: 'uppercase' | 'lowercase' | 'default'
  renderText?: () => string | ReactNode
}

const Translate = (props: ITranslate) => {
  const { text, casing = 'default', renderText } = props

  const { t } = useTranslation()

  const translated = {
    uppercase: t(text).toUpperCase(),
    lowercase: t(text).toLowerCase(),
    default: t(text)
  }

  const string = translated[casing]

  return <>{renderText ? renderText() : string}</>
}

export default Translate
