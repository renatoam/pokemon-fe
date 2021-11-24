# Pokedex - Gerenciamento de catalogo e equipe pokemon

Estudos e análises sobre arquitetura, banco de dados e outras tecnologias para estudar aplicando tanto nesse projeto em si (POkedex), quanto nos demais projetos, como o Alohomora.

## Arquitetura 


## Créditos

Type Icons on background by [Ilaria Bernareggi from the Noun Project](https://thenounproject.com/term/pokemon/)

Vector Icons by [The Artificial](https://github.com/TheArtificial)

---

Aplicação criada como teste para o processo seletivo da Novatics. A aplicação é desenvolvida com React, utilizando o NextJS como framework.

## Executando a aplicação

- Instalar as dependências com **yarn** ou **npm install**
- Iniciar o ambiente de desenvolvimento com **yarn dev** ou **npm run dev**

Para commitar, executar **git commit** e seguir o wizard

## Principais ferramentas de desenvolvimento

As ferramentas de desenvolvimento iniciais instaladas são os linters e styled components. Para extensão da quantidade de ícones, caso necessário, será usado o Font Awesome.

### Linters

- ESLint + Prettier: o ESLint serve para ajudar no desenvolvimento, destacando erros de sintaxe, concordância ou pequenos erros. Também é usado o Prettier que ajuda na identação do código. Apesar de ter algumas regras já estabelecidas pelos pacotes instalados, foram adicionadas algumas outras regras.

- Commitlint + Commitzen: o Commitlint é uma ferramenta que avalia a mensagem de commit definida pelo dev, baseada nos padrões do Conventional Commit. O Commitzen serve como um "wizard", que fornece opções para escolher baseando-se também no Conventional Commit e no final gera uma mensagem coesa e padronizada (que é aprovada pelo Commitlint).

\*: as mensagens de commit são baseadas no [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)

### Styled Components

O Styled Components é uma ferramenta para utilização de CSS-in-JS. A síntaxe usada no Styled Components é a do Sass (Scss) e também permite trabalhar com SSR.

## Outras ferramentas

### Editor Config

Para todos os colaboradores ficarem na mesma página no que tange a indentação, configurações do editor, etc., o projeto possui um arquivo (.editorconfig) com um padrão para as configurações do editor, que padroniza as opções independente do editor escolhido.

\*: Se você usa o Code, o arquivo .editorconfig pode ser gerado pela extensão "EditorConfig for VS Code".

### Next Image + Inline React SVG

Com o next-image, podemos importar e utilizar imagens dentro do nosso código, independente de onde salvamos as imagens. Sem ele, só é possível usar imagens que venham da pasta /public, que não permite muitas otimizações.

Quanto ao Inline React SVG (babel-plugin-inline-react-svg), ele permite importar um arquivo com extensão .svg como se fosse um componente e ao utilizá-lo na página, transforma o svg em um código html de svg propriamente dito. Isso ajuda na performance e na flexibilidade para manipular arquivos SVG.

## Estrutura de pastas

[TODO]
https://unlyed.github.io/next-right-now/reference/folder-structure

## Estratégias

### Filtragem, ordenação e paginação

Por ser uma aplicação simples, o normal seria gerenciar essas estratégias pelo Front-End, trazendo todos os dados de uma vez e trabalhando em cima deles com Redux, React Query, etc. Porém, como um dos objetivos dessa aplicação é trabalhar com o Prisma no Back-End, eu decidi fazer tudo por lá, enviando parâmetros nas requisições.

## Styleguide

[TODO]

---

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
