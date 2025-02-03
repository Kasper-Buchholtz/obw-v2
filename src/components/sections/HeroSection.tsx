'use client'
import React from 'react'
import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import Media from '@/components/organisms/Media'
import Section from '@/components/sections/Section'
import Modal from '../molecules/Modal'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

/**
 *
 * @returns: En sektion med en hero.
 * @example: <Hero />
 * @alias: Hero
 * @summary: Denne komponent bruges til at vise en hero.
 * @version: 1.0.0
 * @property: [title, image, video, altText, text, data]
 * @author: Kasper Buchholtz
 *
 **/

interface HeroProps {
  data?: any
}

const Hero: React.FC<HeroProps> = ({ data, ...props }) => {
  return (
    <Section
      {...props}
      variant="lys"
      paddingX="none"
      className="relative h-screen overflow-hidden "
    >
      <ul className='col-span-full'>
        {data?.content?.map((item: any, index: number) => (
          <li key={index}>
            <Heading tag='h2' type='h1' className="text-center">
              {item.link.label}
            </Heading>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Hero
