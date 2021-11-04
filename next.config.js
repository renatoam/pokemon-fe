const withImages = require('next-images')

// Colocar no array "domains" todos os dominios externos que serão usados no projeto
module.exports = withImages({
  esModule: true,
  images: {
    domains: ['thumbs.buscape.com.br']
  }
})
