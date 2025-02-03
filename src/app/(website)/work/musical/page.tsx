import 'swiper/css'
import React from 'react'
import { loadPage } from '@/sanity/queries/loadPage'
import PageBuilder from '~/components/PageBuilder'
import PageContainer from '@/components/PageContainer'
import { groq } from 'next-sanity'
import { client } from '~/sanity/lib/sanity.client'
import Section from '~/components/sections/Section'
import { ImageQuery } from '@/sanity/queries/atoms/Image.query'
import { stegaClean } from "@sanity/client/stega";
import MusicalCaseCard from '@/components/atoms/MusicalCaseCard'

export default async function IndexRoute({
    params,
}: {
    params: { locale: string }
}) {
    const page = await loadPage('work/musical', 'da')
    const FetchMusicalType = groq`
  *[_type =="case" && caseType=="musical"]{
    ...,
    ${ImageQuery}
    }
  `
    const MusicalType = stegaClean(await client.fetch(FetchMusicalType))
    return (
        <PageContainer>
            <Section>
                {MusicalType?.map((data, index) => (
                    <MusicalCaseCard key={index} data={data} />
                ))}
            </Section>
            <PageBuilder sections={page.pageBuilder} />
        </PageContainer>
    )
}
