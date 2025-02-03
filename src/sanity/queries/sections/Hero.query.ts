import groq from 'groq'

import { ButtonQuery } from '../atoms/Button.query'
export const heroQuery = groq`
_type == "hero" => {
  ...,
  content[] {
    title,
    ${ButtonQuery}
  },
  _type
}
`
