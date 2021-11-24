import Axios, { AxiosError } from 'axios'

import { BASE_URL } from '@modules/home/constants/api'

const axios = Axios.create({
  baseURL: BASE_URL
})

axios.interceptors.request.use(
  function (request) {
    if (request.method === 'GET') console.log('[Fetching data...]')
    if (request.method === 'POST') console.log('[Sending data...]')

    const xsrfProtectConfig = {
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN'
    }

    const handledRequest = {
      ...request,
      ...xsrfProtectConfig
    }

    return handledRequest
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    // configurações de notificações baseadas no status code aqui
    return response
  },
  function (error: AxiosError) {
    if (error?.response?.status === 401 || error?.response?.data.message === '401 Unauthorized') {
      // fazer alguma checagem pra ver se os dados de login do usuário expiraram ou não
      console.log({ error })
    }

    return Promise.reject(error)
  }
)

export default axios
