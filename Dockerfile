# Esse arquivo de imagem, serve pra gente em ambiente de produção
## Pra usarmos em tempo de desenvolvimento, usamos o docker-compose.yml
## Se usarmos somente esse arquivo, toda vez que fizermos uma alteração, 
## teriamos que gerar um novo build, mas com o docker compose, mapeamos nossas pastas do projeto com as do container

## Instala as dependências somente quando necessário
## Nesse primeiro stage, o docker instala as dependências e as mantem em cache
## se nada mudar, ele usa o cache

FROM node:alpine AS deps
## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
## Comando obrigatório
## o AS é só pra definir um alias

WORKDIR /app
## Define (cria) o local onde o app vai ficar no disco do container
## Pode ser o nome que você quiser
## Os comandos RUN, COPY, etc., são executados aqui

COPY package*.json ./
## Copia tudo que começa com package e termina com .json e o yarn.lock para dentro da pasta /app
COPY prisma ./prisma/
## Pra gerar o Prisma Client, é necessário o schema.prisma, além disso, para o caso de serem necessárias as migrations, copiamos a pasta toda

RUN yarn install 
## Executa yarn install para instalar as dependências


## Refazer o build somente quando necessário
## Esse stage é pra gerar o build e usa o cache gerado pelo stage anterior
## só será executado novamente se houver mudanças no stage anterior

FROM node:alpine AS builder
WORKDIR /app
COPY . .
## COPY . . Copia tudo que está no diretório onde o arquivo Dockerfile está para dentro da pasta /app do container, menos o que estiver em .dockerignore
COPY --from=deps /app/node_modules ./node_modules
## COPY --from=deps copia as dependencias cacheadas e instaladas do stage que nomeamos como deps
RUN yarn build

## Criando uma imagem pra Prod. Copiar todos os arquivos e rodar o next
FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# Preciso confirmar se o build do next gera uma pasta build tbm e se eu devo copiar

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs
## Não sei o que esses 3 comandos acima fazem

## Container ficará ouvindo os acessos na porta 3000
## Expondo a porta 3000, porque é a padrão do Next
EXPOSE 3000

CMD ["yarn", "start"]

# Comandos no terminal

## docker build -t meuUserName/next-pokemon .
## a flag -t é só pra dar um nome pra imagem e facilitar na hora de se referir a ela

## docker run -p 3000:3000 --env-file .env -d <your username>/nest-api 
## a flag -p é pra fazer o mapeamento das portas, quando acessar a 3000 normal, estarei acessando a 3000 do container
## a flag --env-file com valor .env é pra acessar as variáveis de ambiente do projeto
## a flag -d (detach) é pra que essa execução da imagem não fique ocupando o terminal 