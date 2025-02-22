'use client'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import { Lenis } from '~/components/Lenis'

/**
 *
 * @returns: En container, der indeholder header, footer og børnekomponenter.
 * @example: <PageContainer />
 * @alias: PageContainer
 * @summary: Denne komponent bruges til at vise en container, der indeholder header, footer og børnekomponenter.
 * @version: 1.0.0
 * @property: [children]
 * @author: Kasper Buchholtz
 *
 **/


export default function PageContainer({
  lenis = {
    lerp: 0.1,
    duration: 1.2,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), 
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 2,

  },
  children,
}: {
  lenis?: {
    lerp: number,
    duration: number,
    smoothTouch: boolean,
    smooth: boolean,
    easing: (t: number) => number,
    orientation: string,
    gestureOrientation: string,
    smoothWheel: boolean,
    touchMultiplier: number,
  },
  children: React.ReactNode,

}) {
  return (
    <>
      <Header />
      <Lenis options={lenis} root={typeof document !== 'undefined' ? document.documentElement : null} />
      <main className={` text-lights-0 min-h-screen bg-darks-900`}>
        {children}
      </main>
      {/*  <!-- Google Tag Manager (noscript) -->   */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5KGNKC3B"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/*  <!-- End Google Tag Manager (noscript) -->   */}{' '}
    </>
  )
}
