import groq from 'groq'
import { MediaObjectQuery } from '~/sanity/queries/molecules/MediaObject.query'
import { InnerBlocksQuery } from '../molecules/InnerBlocks.query'

export const textWithIllustrationQuery = groq`
  _type == 'textWithIllustration' => {
    _type,
    _key,
    flip,
    ${MediaObjectQuery},
    design{...,},
    ${InnerBlocksQuery},
    SectionSettings{...,}
  }
`
