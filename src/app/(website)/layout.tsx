import '@/styles/global.css'
import '@/styles/lenis.css'
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'
import AdminBar from '@/components/sanity/AdminBar'
import { client } from '~/sanity/lib/sanity.client'
import Head from 'next/head'
import { SITE_SETTINGS_QUERY } from '~/sanity/lib/sanity.queries'
import { SanityLive } from '~/sanity/lib/sanity.live'

const settings = await client.fetch(SITE_SETTINGS_QUERY)

export default async function Root({ children }: { children: React.ReactNode }) {
  const isDraftModeEnabled = (await draftMode()).isEnabled;


  return (
    <html lang="da">
      <Head>
        <script
          id="CookieConsent"
          src="https://policy.app.cookieinformation.com/uc.js"
          data-culture="DA"
          data-gcm-version="2.0"
          type="text/javascript"
        ></script>
        {settings?.headScripts && <script dangerouslySetInnerHTML={{ __html: settings.headScripts }} />}
      </Head>
      <body
        className={`selection:text-darks-900 text-lights-0 selection:bg-lights-0 ${isDraftModeEnabled ? 'debug-screens' : ''}`}
      >
        {children}
        <SanityLive />
        
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <SanityLive />
            <AdminBar />
          </>
        )}
        {settings?.footerScripts && <div style={{ visibility: 'hidden', display: 'none', position: 'absolute', width: '0', height: '0' }} dangerouslySetInnerHTML={{ __html: settings.footerScripts }} />}
      </body>
    </html>
  )
}

