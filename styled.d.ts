import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      alternative: string;
      primaryHover: string;
      secondaryHover: string;
      alternativeHover: string;
      backgroundPrimary: string;
      backgroundDark: string;
      backgroundLight: string;
      textPrimary: string;
      textSecondary: string;
      textAlternative: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    borders: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fonts: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    hgrid: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    values: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    utils: {
      position: {
        center: string;
      };
      transition: string;
    };
    images: {
      logo: {
        main: string;
      };
      logotype: {
        main: string;
        alternative: string;
      };
    };
    types: {
      bug: string;
      dragon: string;
      fairy: string;
      fire: string;
      ghost: string;
      ground: string;
      normal: string;
      psych: string;
      steel: string;
      dark: string;
      electric: string;
      fight: string;
      flying: string;
      grass: string;
      ice: string;
      poison: string;
      rock: string;
      water: string;
    };
  }
}
