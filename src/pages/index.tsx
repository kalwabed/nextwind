import { NextSeo } from 'next-seo'

import Hero from '@/components/home/hero'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <div className="app">
      <Layout>
        <NextSeo title="| Home" />
        <Hero />
      </Layout>
    </div>
  )
}
