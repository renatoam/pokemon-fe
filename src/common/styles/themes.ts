import { DefaultTheme } from 'styled-components'

import { LOGO_PATH, LOGOTIPO_ALTERNATIVE_PATH, LOGOTIPO_PATH } from '@constants/global'

export const theme: DefaultTheme = {
  colors: {
    primary: '#f3123c',
    secondary: '#2e2d37',
    alternative: '#696977',
    primaryHover: '#ec506d',
    secondaryHover: '#696977',
    alternativeHover: '#aeaeba',
    backgroundPrimary: '#F3F5F8',
    backgroundDark: '#2e2d37',
    backgroundLight: '#ffffff',
    textPrimary: '#ffffff',
    textSecondary: '#2e2d37',
    textAlternative: '#696977'
  },
  breakpoints: {
    xs: '0',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1440px',
    xxl: '1920px',
    xxxl: '2560px'
  },
  borders: {
    xs: '0.063rem',
    sm: '0.125rem',
    md: '0.188rem',
    lg: '0.313rem',
    xl: '0.625rem'
  },
  fonts: {
    xs: '0.5rem',
    sm: '0.7rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.5rem'
  },
  hgrid: {
    xs: 'calc(0.667rem / 3)',
    sm: 'calc(0.667rem / 2)',
    md: '0.667rem',
    lg: 'calc(0.667rem * 2)',
    xl: 'calc(0.667rem * 3)'
  },
  sizes: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  spacing: {
    xs: 'calc(0.667rem / 3)',
    sm: 'calc(0.667rem / 2)',
    md: '0.667rem',
    lg: 'calc(0.667rem * 2)',
    xl: 'calc(0.667rem * 3)'
  },
  values: {
    xs: '0.25',
    sm: '0.5',
    md: '1',
    lg: '1.5',
    xl: '2'
  },
  utils: {
    position: {
      center: 'translate(-50%, -50%)'
    },
    transition: 'all 0.4s ease-in-out'
  },
  images: {
    logo: {
      main: LOGO_PATH
    },
    logotype: {
      main: LOGOTIPO_PATH,
      alternative: LOGOTIPO_ALTERNATIVE_PATH
    }
  },
  types: {
    bug: '#729F3F',
    dragon: '#53A4CF',
    fairy: '#fdb9e9',
    fire: '#fd7d24',
    ghost: '#7b62a3',
    ground: '#ab9842',
    normal: '#a4acaf',
    psych: '#f366b9',
    steel: '#9eb7b8',
    dark: '#707070',
    electric: '#eed535',
    fight: '#d56723',
    flying: '#3dc7ef',
    grass: '#9bcc50',
    ice: '#51c4e7',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4'
  }
}
