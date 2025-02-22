import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Heading from '@/components/atoms/Heading'
import Paragraph from '@/components/atoms/Paragraph'
import { resolveHref } from '@/sanity/lib/sanity.links'
import { formatDate } from '@/utils/date'

/**
 *
 * @returns: En artikel card, der viser information om en artikel.
 * @example: <ArticleCard />
 * @alias: ArticleCard
 * @summary: Denne komponent bruges til at vise information om en artikel.
 * @version: 1.0.0
 * @property: [article]
 * @author: Kasper Buchholtz
 **/

const ArticleCard = ({ article }) => {
  return (
    <>
      <div
          key={article?._key}
          className="relative overflow-hidden shadow-md col-span-full xs:col-span-2 sm:col-span-4 xl:col-span-6 group rounded-xl bg-superego-light-base text-superego-dark"
        >
          {article?.slug && (
            <Link 
              className="absolute inset-0 z-10 w-full h-full "
              href={resolveHref(article._type, article.slug)}
            >
              
            </Link>
          )}
          {article?.image && (
            <div className="relative object-cover w-full overflow-hidden aspect-w-4 aspect-h-3">
              <Image
                src={article.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                width={article.imageWidth || 800}
                height={article.imageHeight || 600}
                alt={article.image || 'Default image description'}
                className="object-cover w-full h-full transition-transform ease-out group-hover:scale-110"
              />
            </div>
          )}
          <div className="flex flex-col justify-between p-8 space-y-10 xs:p-10 min-h-40 ">
            <Heading text="wrap" type="h4" tag="h4" spacing="none" clamp={3}>
              {article?.title}
            </Heading>
            {article?.date && (
              <div className='text-superego-green'>
                <Paragraph>{formatDate(article.date)}</Paragraph>
              </div>
            )}
          </div>
        </div>
    </>
  )
}

export default ArticleCard
