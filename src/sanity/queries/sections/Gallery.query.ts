import groq from 'groq'
import { ImageQuery } from '../atoms/Image.query'
export const GalleryQuery = groq`
    _type == 'Gallery' => {
    ...,
    images[]{
      _key,
      ${ImageQuery},
      alt,
    },
  }`
