import groq from 'groq'
import { ButtonQuery } from '../atoms/Button.query'
import { InnerBlocksQuery } from '../molecules/InnerBlocks.query'

export const textContainerQuery = groq`
    _type == "textContainer" => {
      ...,
    ${InnerBlocksQuery}
    }

`