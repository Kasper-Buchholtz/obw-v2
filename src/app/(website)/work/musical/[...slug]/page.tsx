import 'swiper/css';
import React, { useEffect } from 'react';
import { loadPage } from '@/sanity/queries/loadPage';
import PageBuilder from '~/components/PageBuilder';
import PageContainer from '@/components/PageContainer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { groq } from 'next-sanity';
import { ImageQuery } from '@/sanity/queries/atoms/Image.query';
import { urlFor } from '~/sanity/lib/sanity.image';
import Image from 'next/image';
import { gsap } from 'gsap';
import Flip from 'gsap/Flip';
import Heading from '@/components/atoms/Heading';
import Section from '@/components/sections/Section';

gsap.registerPlugin(Flip);

const caseType = groq`
*[_type =="case" && caseType=="musical" && slug.current == $slug][0]{
  ...,
  ${ImageQuery}
}
`;

export default async function DynamicRoute({
    params: { slug: slugArray, locale },
}: {
    params: { slug: string[]; locale: string }
}) {
    const slug = `${slugArray.join('/')}`;
    const page = await loadPage(slug, 'da', caseType);

    if (!page) {
        notFound();
    }

    // Trigger the Flip animation on page load
    return (
        <PageContainer>
            <Section paddingBottom={'none'} paddingTop={'none'} paddingX='none' className='h-screen'>
                <div className='relative col-span-full'>
                    <Image
                        data-flip-id={page.slug.current}
                        className="object-cover w-full h-full transition-all duration-500 ease-in-out select-none group-hover:scale-110"
                        src={urlFor(page.image).dpr(2).url()}
                        alt={page.altText || 'Billede af ' + page.title}
                        width={1920}
                        height={1080}
                        placeholder="blur"
                        blurDataURL={urlFor(page.image).width(24).height(24).blur(10).url()}
                        sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    40vw"
                    />
                    <Section paddingBottom={'none'} paddingTop={'none'} className='col-span-full'>
                        <div className='absolute bottom-0 pb-6'>
                            <Heading>
                                {page.title}
                            </Heading>
                        </div>
                    </Section>
                </div>
                <Section className='pt-20 col-span-full' paddingTop={'none'}>
                    {page.musicalObject && (
                        <>
                            <div className='col-span-12 space-y-2'>
                                <Heading spacing='none' tag='p' type='p'>
                                    Produktion
                                </Heading>
                                <Heading spacing='none' fontFamily='serif' tag='h2' type='h2' >
                                    {page.musicalObject.production}
                                </Heading>
                            </div>
                            <div className='col-span-12 space-y-2'>
                                <Heading spacing='none' tag='p' type='p'>
                                    Produktion
                                </Heading>
                                <Heading spacing='none' fontFamily='serif' tag='h2' type='h2' >
                                    {page.musicalObject.artist}
                                </Heading>
                            </div>
                        </>
                    )}
                </Section>
            </Section>
            {page.pageBuilder && <PageBuilder sections={page.pageBuilder} />}
        </PageContainer>
    );
}
