import '@/styles/nprogress.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import NProgress from 'nprogress'
import { GlobalStyles } from 'twin.macro'
import React from 'react'

import siteConfig from 'site-config'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  const { description, title, url } = siteConfig
  return (
    <>
      <GlobalStyles />
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
