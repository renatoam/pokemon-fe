import { createGlobalStyle } from 'styled-components'

import { theme } from './themes'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  :root {
    /* Cores */
    --primary: #f3123c;
    --secondary: #2e2d37;
    --alternative: #696977;
    --primary-hover: #ec506d;
    --secondary-hover: #696977;
    --alternative-hover: #aeaeba;
    --background-primary: #F3F5F8;
    --background-dark: #2e2d37;
    --background-light: #ffffff;
    --text-primary: #ffffff;
    --text-secondary: #2e2d37;
    --text-alternative: #696977;
    
    /* Breakpoints */
    --xs: 0;
    --sm: 600px;
    --md: 900px;
    --lg: 1200px;
    --xl: 1440px;
    --xxl: 1920px;
    --xxxl: 2560px;
    
    /* Border Size */
    --b-xs: 0.063rem;
    --b-sm: 0.125rem;
    --b-md: 0.188rem;
    --b-lg: 0.313rem;
    --b-xl: 0.625rem;
    
    /* Font Size */
    --font-xs: 0.5rem;
    --font-sm: 0.7rem;
    --font-md: 1rem;
    --font-lg: 1.2rem;
    --font-xl: 1.5rem;
    --font-xxl: 1.7rem;
    --font-xxxl: 2rem;

    /* 8pt grid values (8pt = 10.66px) */
    --hbase: 0.667rem;
    --hbase-md: var(---hbase);
    --hbase-sm: calc(0.667rem / 2);
    --hbase-xs: calc(0.667rem / 3);
    --hbase-lg: calc(0.667rem * 2);
    --hbase-xl: calc(0.667rem * 3);

    /* Sizing */
    --s-xs: 0.25rem;
    --s-sm: 0.5rem;
    --s-md: 1rem;
    --s-lg: 1.5rem;
    --s-xl: 2rem;
    
    /* Spacing */
    --sp-xs: var(--hbase-xs);
    --sp-sm: var(--hbase-sm);
    --sp-md: var(--hbase);
    --sp-lg: var(--hbase-lg);
    --sp-xl: var(--hbase-xl);
    
    /* Values */
    --v-xs: 0.25;
    --v-sm: 0.5;
    --v-md: 1;
    --v-lg: 1.5;
    --v-xl: 2;

    /* Position */
    --center: translate(-50%, -50%);

    /* Transition */
    --trs: all 0.4s ease-in-out;
  }

  /* Solução paliativa antes de ter um styleguide é definir os tamanhos certos 
  de títulos, body, etc, e usar o media query no html apenas, pra alterar o rem */

  html {
    font-size: 16px;
    font-family: 'Poppins', 'Roboto', sans-serif;
    font-weight: 400;
  }

  body {
    background-color: ${theme.colors.backgroundDark};
  }

  a {
    color: inherit;
  }

  [poke-type="bug"] {
    background-color: ${theme.types.bug};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="dragon"] {
    background-color: ${theme.types.dragon};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="fairy"] {
    background-color: ${theme.types.fairy};
    color: ${theme.colors.textAlternative};
  }

  [poke-type="fire"] {
    background-color: ${theme.types.fire};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="ghost"] {
    background-color: ${theme.types.ghost};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="ground"] {
    background-color: ${theme.types.ground};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="normal"] {
    background-color: ${theme.types.normal};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="psych"] {
    background-color: ${theme.types.psych};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="steel"] {
    background-color: ${theme.types.steel};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="dark"] {
    background-color: ${theme.types.dark};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="electric"] {
    background-color: ${theme.types.electric};
    color: ${theme.colors.textAlternative};
  }

  [poke-type="fight"] {
    background-color: ${theme.types.fight};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="flying"] {
    background-color: ${theme.types.flying};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="grass"] {
    background-color: ${theme.types.grass};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="ice"] {
    background-color: ${theme.types.ice};
    color: ${theme.colors.textAlternative};
  }

  [poke-type="poison"] {
    background-color: ${theme.types.poison};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="rock"] {
    background-color: ${theme.types.rock};
    color: ${theme.colors.textPrimary};
  }

  [poke-type="water"] {
    background-color: ${theme.types.water};
    color: ${theme.colors.textPrimary};
  }

  /**
    Temporário
  */

header {
  align-items: center;
  background-color: #ef3e38;
  box-shadow: 0 1px 5px 1px #555;
  display: flex;
  height: 80px;
}

header .header {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 0 auto;
  width: 1200px;
}

@media screen and (max-width: 768px) {
  header .header {
    grid-template-columns: 1fr 3fr 1.2fr;
    width: 100vw;
  }
}

header .logo {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  header .logo {
    justify-content: center;
  }
}

header .logo .logo__imagem {
  width: 150px;
}

@media screen and (max-width: 768px) {
  header .logo .logo__imagem {
    width: 10vw;
  }
}

header .logo .logo__imagem img {
  width: 100%;
}

header .busca {
  align-items: center;
  display: flex;
  justify-content: flex-start;
}

header .busca input {
  border: none;
  border-radius: 10px;
  height: 30px;
  padding: 0 15px;
  width: 400px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}

@media screen and (max-width: 768px) {
  header .busca input {
    border-radius: 2vw;
    height: 8vw;
    padding: 0 3vw;
    width: 45vw;
  }
}

header .busca input:active,
header .busca input:focus {
  outline: none;
}

header .busca .busca__imagem {
  cursor: pointer;
  margin-left: 10px;
  margin-top: 7px;
  width: 20px;
}

header .busca .busca__imagem img {
  filter: invert(1);
  transform: rotate(-90deg);
  width: 100%;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -webkit-filter: invert(1);
}

header .login {
  align-items: center;
  cursor: pointer;
  display: flex;
}

header .login .login__imagem {
  width: 20px;
}

header .login .login__imagem img {
  filter: invert(1);
  width: 100%;
  -webkit-filter: invert(1);
}

header .login p {
  color: #ffffff;
  margin-left: 10px;
}

header .login__modal {
  display: none;
}

header .login__modal--container {
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  left: 50%;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  z-index: 1;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}

header .login__modal--overlay {
  background-color: #000;
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100%;
}

.iniciais {
  margin: 0 auto;
  max-width: 1200px;
}

.iniciais__titulo {
  margin: 30px;
  text-align: center;
}

.iniciais__wrapper {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .iniciais__wrapper {
    justify-content: center;
    flex-wrap: wrap;
  }
}

.iniciais__item {
  align-items: center;
  background-color: #f5f6fa;
  border-radius: 20px;
  box-shadow: 0 0 5px 0px #dcdde1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-around;
  transition: all 0.4s ease-in-out;
  width: 320px;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
}

@media screen and (max-width: 768px) {
  .iniciais__item {
    width: 80vw;
  }
}

.iniciais__item:hover {
  transform: scale(1.1);
}

.iniciais__item:hover .iniciais__imagem img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.iniciais__item[data-type*='grass']:hover {
  background-color: #7bed9f;
}

.iniciais__item[data-type*='grass'] button {
  background-color: #2ed573;
}

.iniciais__item[data-type*='water']:hover {
  background-color: #70a1ff;
}

.iniciais__item[data-type*='water'] button {
  background-color: #1e90ff;
}

.iniciais__item[data-type*='fire']:hover {
  background-color: #ff6b81;
}

.iniciais__item[data-type*='fire'] button {
  background-color: #ff4757;
}

.iniciais__imagem {
  width: 50%;
}

.iniciais__imagem img {
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
}

.iniciais__descricao {
  font-size: 0.9rem;
  text-align: center;
  width: 75%;
}

.iniciais__botao {
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  transition: all 0.4s ease-in-out;
}

.iniciais__botao:hover {
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.4);
}

.iniciais__modal {
  opacity: 0;
  position: relative;
  transition: all 0.4s ease-in-out;
  z-index: -1;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
}

.iniciais__modal.show {
  opacity: 1;
  z-index: 0;
}

.iniciais__modal--overlay {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

.iniciais__modal--wrapper {
  border-radius: 0.8rem;
  left: 50%;
  max-width: 400px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
}

.iniciais__modal--wrapper[data-type*='grass'] {
  background-color: #7bed9f;
}

.iniciais__modal--wrapper[data-type*='water'] {
  background-color: #70a1ff;
}

.iniciais__modal--wrapper[data-type*='fire'] {
  background-color: #ff6b81;
}

.iniciais__modal--wrapper::before {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  opacity: 0.2;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.iniciais__modal--wrapper[data-type*='grass']::before {
  background-image: url(./../assets/leaf.svg);
}

.iniciais__modal--wrapper[data-type*='water']::before {
  background-image: url(./../assets/water.svg);
}

.iniciais__modal--wrapper[data-type*='fire']::before {
  background-image: url(./../assets/fire.svg);
}

.iniciais__modal--item:not(:first-child) {
  display: none;
}

.iniciais__modal--item {
  color: #33363a;
  max-height: 85vh;
  padding: 3rem 2rem 3rem;
  position: relative;
}

.iniciais__modal--fechar {
  align-items: center;
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  height: 2vw;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
  width: 2vw;
  z-index: 1;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
}

.iniciais__modal--fechar[data-type*='grass'] {
  background-color: #218c74;
}

.iniciais__modal--fechar[data-type*='water'] {
  background-color: #227093;
}

.iniciais__modal--fechar[data-type*='fire'] {
  background-color: #b33939;
}

.iniciais__modal--item .imagem {
  cursor: pointer;
  margin: 0 auto;
  max-width: 145px;
  left: 70%;
  position: absolute;
  top: -8%;
  transition: all 0.4s ease-in-out;
  width: 55%;
}

.iniciais__modal--item .imagem:hover {
  transform: rotate(10deg);
}

.iniciais__modal--item .basico .identificacao span {
  display: block;
  font-size: 1.3rem;
  font-weight: bold;
}

.iniciais__modal--item .basico .identificacao h2 {
  font-size: 2rem;
  margin-bottom: 0.8rem;
}

.iniciais__modal--item .basico .descricao {
  font-size: 0.7rem;
}

.iniciais__modal--item .anatomia {
  background-color: #fff;
  border-radius: 1.1rem;
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
  padding: 0.8rem;
}

.iniciais__modal--item .anatomia .item {
  text-align: center;
}

.iniciais__modal--item .anatomia .item h3,
.iniciais__modal--item .anatomia .item p {
  font-size: 0.7rem;
}

.iniciais__modal--item .batalha {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}

.iniciais__modal--item .batalha .caracteristicas {
  border-right: 0.05rem solid rgba(0, 0, 0, 0.3);
  width: 35%;
}

.iniciais__modal--item .batalha .caracteristicas .tipo__wrapper {
  display: flex;
}

.iniciais__modal--item .batalha .caracteristicas .fraqueza__wrapper {
  display: flex;
  flex-wrap: wrap;
}

.iniciais__modal--item .batalha .caracteristicas > section h4 {
  font-size: 0.8rem;
}

.iniciais__modal--item .batalha .caracteristicas > section div {
  background-color: aquamarine;
  border-radius: 0.8rem;
  font-size: 0.6rem;
  font-variant: all-petite-caps;
  margin: 5px 0;
  margin-left: 5px;
  padding: 2px 5px;
}

.iniciais__modal--item .batalha .habilidades {
  width: 60%;
}

.iniciais__modal--item .batalha .habilidades > section {
  align-items: baseline;
  display: flex;
  margin-bottom: 0;
  justify-content: space-between;
}

.iniciais__modal--item .batalha .habilidades > section h4 {
  font-size: 0.55rem;
  text-transform: uppercase;
}

.iniciais__modal--item .batalha .habilidades > section .nivel span {
  background-color: #fff;
  border-radius: 100%;
  display: inline-block;
  height: 0.5vw;
  margin-left: 5px;
  width: 0.5vw;
}

.iniciais__modal--item .evolucoes {
  position: relative;
}

.iniciais__modal--item .evolucoes h3 {
  border-radius: 0.8rem;
  color: #fff;
  font-size: 0.5rem;
  left: 50%;
  padding: 0.3vw;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  width: 30%;
}

.iniciais__modal--item .evolucoes h3[data-type*='grass'] {
  background-color: #218c74;
}

.iniciais__modal--item .evolucoes h3[data-type*='water'] {
  background-color: #227093;
}

.iniciais__modal--item .evolucoes h3[data-type*='fire'] {
  background-color: #b33939;
}

.iniciais__modal--item .evolucoes .evolucoes__wrapper {
  background-color: #fff;
  border-radius: 1vw;
  display: flex;
  justify-content: space-around;
  padding: 1vw;
}

.iniciais__modal--item .evolucoes .evolucoes__wrapper .forma {
  text-align: center;
  width: 80px;
}

.iniciais__modal--item .evolucoes .evolucoes__wrapper .forma img {
  cursor: pointer;
  object-fit: none;
  transition: transform 0.4s ease-in-out;
  width: 100%;
  -webkit-transition: transform 0.4s ease-in-out;
  -moz-transition: transform 0.4s ease-in-out;
  -ms-transition: transform 0.4s ease-in-out;
  -o-transition: transform 0.4s ease-in-out;
}

.iniciais__modal--item .evolucoes .evolucoes__wrapper .forma img:hover {
  transform: translateY(-20%);
  -webkit-transform: translateY(-20%);
  -moz-transform: translateY(-20%);
  -ms-transform: translateY(-20%);
  -o-transform: translateY(-20%);
}

.iniciais__modal--item .evolucoes .evolucoes__wrapper .forma .forma__nome {
  font-size: 0.8rem;
}

.iniciais__modal--item .evolucoes .evolucoes__wrapper .forma .tipo {
  font-size: 0.6rem;
}

.iniciais__modal--item .btn-escolher {
  bottom: 0;
  cursor: pointer;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  width: 3.5vw;
  -webkit-transform: translate(-50%, 50%);
  -moz-transform: translate(-50%, 50%);
  -ms-transform: translate(-50%, 50%);
  -o-transform: translate(-50%, 50%);
}

.iniciais__modal--item .btn-escolher::before {
  border-radius: 1rem;
  bottom: 95%;
  color: #fff;
  content: 'Eu escolho você!';
  display: block;
  font-size: 0.6rem;
  left: 50%;
  opacity: 0;
  padding: 0.4rem 0.8rem;
  position: absolute;
  transition: opacity 0.4s ease-in-out;
  transform: translate(-50%, -50%);
  width: 5rem;
  -webkit-transition: opacity 0.4s ease-in-out;
  -moz-transition: opacity 0.4s ease-in-out;
  -ms-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}

.iniciais__modal--item .btn-escolher[data-type*='grass']::before {
  background-color: #218c74;
}

.iniciais__modal--item .btn-escolher[data-type*='water']::before {
  background-color: #227093;
}

.iniciais__modal--item .btn-escolher[data-type*='fire']::before {
  background-color: #b33939;
}

.iniciais__modal--item .btn-escolher:hover::before {
  opacity: 1;
}

.iniciais__modal--item .btn-escolher:hover img {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
}

.iniciais__modal--item .btn-escolher img {
  transition: transform 0.4s ease-in-out;
  width: 100%;
  -webkit-transition: transform 0.4s ease-in-out;
  -moz-transition: transform 0.4s ease-in-out;
  -ms-transition: transform 0.4s ease-in-out;
  -o-transition: transform 0.4s ease-in-out;
}
`
