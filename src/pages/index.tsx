import { NextSeo } from 'next-seo'

import Hero from '~components/home/hero'

export default function Home() {
  return (
    <>
      <NextSeo title="| Home" />
      <Hero />
    </>
  )
}
