import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import { resolveHref } from '@/sanity/lib/sanity.links'
import { formatDate } from '@/utils/date'
import { urlFor } from '~/sanity/lib/sanity.image'
import Photo from '../atoms/Photo'

/**
 *
 * @returns: En event card, der viser information om en begivenhed.
 * @example: <EventCard />
 * @alias: EventCard
 * @summary: Denne komponent bruges til at vise information om en begivenhed.
 * @version: 1.0.0
 * @property: [event]
 * @author: Kasper Buchholtz
 **/

const EventCard = ({ event }) => {
  return (
    <>
      <div
        key={event?._key}
        className="relative overflow-hidden shadow-md h-fit col-span-full xs:col-span-2 sm:col-span-4 xl:col-span-6 group rounded-xl bg-superego-light-base text-superego-dark"
      >
        <Link className="" href={resolveHref(event._type, event.slug) || '#'}>
          <EventCard.Portrait event={event} />
          <EventCard.Content event={event} />
        </Link>
      </div>
    </>
  )
}

export default EventCard

EventCard.Portrait = Portrait
EventCard.Content = Content

function Portrait({ event }) {
  return (
    <div className="aspect-w-4 aspect-h-5">
      {event.image && (
        <Photo image={event.image} />
      )}
    </div>
  )
}

function Content({ event }) {
  return (
    <div className="flex flex-col justify-between p-8 space-y-10 xs:p-10 min-h-40 ">
      <Heading text="wrap" type="h4" tag="h4" spacing="none" clamp={3}>
        {event?.title}
      </Heading>
      {event?.date && (
        <div className="text-superego-green">
          <Paragraph>{formatDate(event.date)}</Paragraph>
        </div>
      )}
    </div>
  )
}
