import groq from 'groq'
import { ImageQuery } from './Image.query'
const videoObject = groq`
videoObject {
  ...,
  video {
    asset->{
      _id,
      url,
      _type,
      altText,
      description,
      title,
    }
  },
  image {
    ${ImageQuery},
  }
}

`
