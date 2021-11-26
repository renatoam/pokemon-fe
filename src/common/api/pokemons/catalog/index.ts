import { CatalogService } from './services'
import { CatalogUseCases } from './useCases'

export const catalogUseCases = new CatalogUseCases({ CatalogService })
