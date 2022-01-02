import { Pokemon } from 'pokenode-ts'
import axios from '@api/axios'

export type InitialsServiceType = {
  getInitials: () => Promise<[Pokemon, Pokemon, Pokemon]>
}

export const InitialsService: InitialsServiceType = {
  async getInitials() {
    const response = await axios.get('/initials')

    return response.data
  }
}
