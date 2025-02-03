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

const before =
  'before:bg-gradient-to-b before:from-dark/0 before:to-dark/60 before:absolute before:inset-0 before:z-10 '
const Hero: React.FC<HeroProps> = ({ data, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const OpenModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Section
        {...props}
        variant="lys"
        paddingX="none"
        className={`h-screen relative place-content-center overflow-hidden ${before}`}
      >
        <ul className='col-span-full'>
          {data?.content?.map((item: any, index: number) => (
            <li key={index}>
                <Heading variant="h1" className="text-center">
                  {item.title}
                </Heading>
            </li>
          ))}
        </ul>

        
      </Section>
    </>
  )
}

export default Hero
