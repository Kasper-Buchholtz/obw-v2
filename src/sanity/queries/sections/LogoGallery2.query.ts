import groq from 'groq'
import { ImageQuery } from '../atoms/Image.query'
export const LogoGallery2Query = groq`
    _type == 'LogoGallery2' => {
    ...,
    images[]{
      ${ImageQuery}
    },
  }`
