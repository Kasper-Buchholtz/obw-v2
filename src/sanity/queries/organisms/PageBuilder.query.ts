import groq from 'groq'
import { Watch_Query } from '../sections/WatchType.query'
import { ContactFormTypeQuery } from '../sections/ContactFormType.query'
import { ImagesQuery } from '../sections/Images.query'
import { heroQuery } from '../sections/Hero.query'

export const pageBuilderQuery = groq`
  pageBuilder[] {
    ${Watch_Query},
    ${ImagesQuery},
    ${heroQuery}
  }
`
