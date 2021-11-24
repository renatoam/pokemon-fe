import { InitialsService } from './services'
import { InitialsUseCases } from './useCases'

export const initialsUseCases = new InitialsUseCases({ InitialsService })
