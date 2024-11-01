import groq from 'groq'
import { ImageQuery } from '../atoms/Image.query'
import { videoObject } from '../atoms/VideoObject.query'
import { vimeoObject } from '../atoms/VimeoObject.query'

export const MediaObjectQuery = groq`
MediaObject {
  media {
    ...,
    select,
    imageObject {
      image{
      ${ImageQuery}
      },
    },
    ${videoObject},
    ${vimeoObject}
  }
}

  `