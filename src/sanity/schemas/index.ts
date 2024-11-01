import { SchemaTypeDefinition } from 'sanity'
import { IconPicker } from '@/sanity/schemas/sections/atoms/IconPickerInput.schema'
import blockContent from '@/sanity/schemas/blockContent.schema'
import { reusable } from '@/sanity/schemas/reusable.schema'
import category from '@/sanity/schemas/management/category.schema'
import employee from '@/sanity/schemas/management/employee.schema'
import position from '@/sanity/schemas/management/position.schema'
import article from '@/sanity/schemas/documents/article.schema'
import event from '@/sanity/schemas/documents/event.schema'
import page from '@/sanity/schemas/documents/page-document.schema'
import { ArticlesType } from '@/sanity/schemas/sections/ArticlesType.schema'
import { accordionType } from '@/sanity/schemas/sections/atoms/accordionType.schema'
import { buttonType } from '@/sanity/schemas/sections/atoms/ButtonType.schema'
import { figureType } from '@/sanity/schemas/sections/atoms/figureType.schema'
import { headingType } from '@/sanity/schemas/sections/atoms/headingType.schema'
import { textType } from '@/sanity/schemas/sections/atoms/textType.schema'
import { CallToAction } from '@/sanity/schemas/sections/callToAction.schema'
import { CallToAction2 } from '@/sanity/schemas/sections/CallToAction2.schema'
import { contactFormType } from '@/sanity/schemas/sections/contactForm.schema'
import { EmployeesType } from '@/sanity/schemas/sections/EmployeesType.schema'
import { EventType } from '@/sanity/schemas/sections/EventsType.schema'
import { formType } from '@/sanity/schemas/sections/formType.schema'
import { Gallery } from '@/sanity/schemas/sections/GalleryType.schema'
import { LogoGallery } from '@/sanity/schemas/sections/LogoGalleryType.schema'
import { LogoGallery2 } from '@/sanity/schemas/sections/LogoGallery2Type.schema'
import { ReusableSectionType } from '@/sanity/schemas/sections/ReusableSection.schema'
import { innerBlocks } from '@/sanity/schemas/sections/innerBlocks.schema'
import { MediaType } from '@/sanity/schemas/sections/MediaType.schema'
import { pageBuilder } from '@/sanity/schemas/sections/pageBuilder.schema'
import { Color } from '@/sanity/schemas/sections/settings/Color.schema'
import { Design } from '@/sanity/schemas/sections/settings/Design.schema'
import { Media } from '@/sanity/schemas/sections/settings/Media.schema'
import { Padding } from '@/sanity/schemas/sections/settings/Padding.schema'
import { SectionSettings } from '@/sanity/schemas/sections/settings/SectionSettings.schema'
import { Seo } from '@/sanity/schemas/sections/settings/Seo.schema'
import { textContainerType } from '@/sanity/schemas/sections/textContainerType.schema'
import { textWithIllustration } from '@/sanity/schemas/sections/textWithIllustration.schema'
import { videoType } from '@/sanity/schemas/sections/videoType.schema'
import footer from '@/sanity/schemas/settings/footer.schema'
import navigation from '@/sanity/schemas/settings/navigation.schema'
import settings from '@/sanity/schemas/settings/settings.schema'
import redirects from './settings/redirects.schema'
import { heroType } from '@/sanity/schemas/sections/herotype.schema'
import { Hero2Type } from './sections/Hero2Type.schema'
import { Hero3Type } from './sections/Hero3Type.schema'
import { MediaObject } from './sections/atoms/MediaObject.schema'

export const schemaTypes = [
  heroType,
  Hero2Type,
  Hero3Type,
  textWithIllustration,
  formType,
  videoType,
  textContainerType,
  EmployeesType,
  blockContent,
  contactFormType,
  EventType,
  ArticlesType,
  Gallery,
  LogoGallery,
  LogoGallery2,
  MediaType,
  CallToAction,
  CallToAction2,
  IconPicker,
  ReusableSectionType,
  // atoms
  figureType,
  headingType,
  accordionType,
  MediaObject,
  textType,
  buttonType,
  // Settings Sections
  Design,
  Media,
  pageBuilder,
  innerBlocks,
  Padding,
  Color,
  Seo,
  SectionSettings,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Pages
    reusable,
    page,
    event,
    article,
    // Management
    settings,
    redirects,
    footer,
    navigation,
    position,
    heroType,
    Hero2Type,
    Hero3Type,
    employee,
    category,
    // Objects
    blockContent,
    Gallery,
    LogoGallery,
    LogoGallery2,
    CallToAction,
    CallToAction2,
    ArticlesType,
    IconPicker,
    textWithIllustration,
    formType,
    videoType,
    textContainerType,
    EmployeesType,
    contactFormType,
    EventType,
    MediaType,
    ReusableSectionType,
    // Atoms
    figureType,
    headingType,
    accordionType,
    MediaObject,
    textType,
    buttonType,
    /*  */
    pageBuilder,
    Design,
    Seo,
    Media,
    Padding,
    Color,
    innerBlocks,
    SectionSettings,
  ],
}
