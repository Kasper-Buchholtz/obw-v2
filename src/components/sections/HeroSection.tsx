'use client'
import React from 'react'
import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import Media from '@/components/organisms/Media'
import Section from '@/components/sections/Section'
import Modal from '../molecules/Modal'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Button } from '../atoms/Button'

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
      className="relative h-screen overflow-hidden "
    >
      <ul className='mt-auto space-y-12 col-span-full'>
        {data?.content?.map((item: any, index: number) => (
          <li key={index} className=''>
            <div className=''>
              <Button variant='none' link={item.link}>
                <Heading tag='h2' type='h2' fontFamily='serif'>
                  <span className='text-darks-900 group-hover:text-lights-0 group-hover:text-shadow-none text-shadow-0'>
                  {item.link.label}
                  </span>
                </Heading>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Hero
