import React from 'react'
import InnerBlocks from '@/components/molecules/InnerBlocks'
import ArticlesSection from '@/components/sections/ArticlesSection'
import CallToActionSection from '@/components/sections/CallToActionSection'
import CallToActionSection2 from './sections/CallToActionSection2'
import EventSection from '@/components/sections/EventSection'
import GallerySection from '@/components/sections/GallerySection'
import Hero from '@/components/sections/HeroSection'
import Media from '@/components/sections/MediaSection'
import TextWithIllustration from '@/components/sections/TextWithIllustration'
import EmployeesSection from './sections/EmployeesSection'
import Breadcrumbs from './molecules/Breadcrumbs'
import TextContainer from './sections/textContainer'
import Hero2 from './sections/Hero2Section'
import Hero3 from './sections/Hero3Section'
import LogoGallery from './sections/LogoGallery'
import LogoGallery2 from './sections/LogoGallery2'
import ContactFormSection from './sections/ContactFormSection'
import Watch from '@/components/sections/Watch'
import Images from './sections/Images'

const PageBuilder = ({ sections }) => {
  return (
    <React.Fragment>
      {sections?.map((section, index) => {
        switch (section?._type) {
          case 'WatchType':
            return <Watch key={index} data={section} />
          case 'hero':
            return (
              <Hero data={section} />
            )
          case 'ImagesType':
            return <Images key={index} data={section} />
          default:
            return null
        }
      })}
    </React.Fragment>
  )
}

export default PageBuilder
