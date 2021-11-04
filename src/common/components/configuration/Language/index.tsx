import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('pt')

  function handleLanguage(event: any) {
    const { id } = event.target
    const newLanguage = id === 'pt' ? 'en' : 'pt'

    i18n.changeLanguage(id)
    setLanguage(newLanguage)
  }

  return <button id={language} onClick={handleLanguage}></button>
}
