import { getSprites } from '@helpers/getSprites'
import { InitialsServiceType } from './services'

export class InitialsUseCases {
  initialsService: InitialsServiceType

  constructor({ InitialsService }: { InitialsService: InitialsServiceType }) {
    this.initialsService = InitialsService
  }

  async getInitials() {
    const initials = await this.initialsService.getInitials()
    console.log({ initials })
    const mappedInitials = initials.map(initial => ({
      ...initial,
      image: getSprites(initial.id, 'vector', initial.name)
    }))

    return mappedInitials
  }
}
