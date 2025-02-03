'use client';
import { gsap } from 'gsap';
import Flip from 'gsap/Flip';
import Image from 'next/image';
import { urlFor } from '~/sanity/lib/sanity.image';
import Heading from './Heading';

gsap.registerPlugin(Flip);

function MusicalCaseCard({ data }) {

    return (
        <div className='relative col-start-2 -col-end-1' >
            <a href={`/work/musical/${data.slug.current}`} className='group'>
                <div className='w-11/12 ml-auto overflow-hidden'>
                    <Image
                        data-flip-id={data.slug.current} // Add a unique data attribute to link source and target
                        className="object-cover w-full h-full transition-all duration-150 ease-in-out group-hover:scale-110"
                        src={urlFor(data.image).dpr(2).url()}
                        alt={data.altText || 'Billede af ' + data.title}
                        width={1920}
                        height={1080}
                        placeholder="blur"
                        blurDataURL={urlFor(data.image).width(24).height(24).blur(10).url()}
                        sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              40vw"
                    />
                </div>
                <div className='absolute left-0 space-y-2 bottom-12'>
                    <Heading tag='h3' type='h3' spacing='none'>{data.client}</Heading>
                    <Heading className='ml-16' tag='h5' type='h5'>{data.title}</Heading>
                </div>
            </a>
        </div>
    );
}

export default MusicalCaseCard;
