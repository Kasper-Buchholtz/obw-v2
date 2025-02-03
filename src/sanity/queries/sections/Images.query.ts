import { groq } from 'next-sanity'
import { ImageQuery } from '../atoms/Image.query'

export const ImagesQuery = groq`
_type == "ImagesType" => {
    _type,
    images[]{
        ${ImageQuery}
    }
}
`
