import '~styles/tailwind.css'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

import siteConfig from 'site-config'
import Page from '~components/layout/page'

function MyApp({ Component, pageProps }: AppProps) {
  const { description, title, url } = siteConfig
  return (
    <>
      <DefaultSeo
        titleTemplate={`${title} %s`}
        description={description}
        canonical={url}
        openGraph={{
          site_name: 'Nextwind template',
          url,
          title,
          type: 'website',
          description
        }}
      />

      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

export default MyApp
