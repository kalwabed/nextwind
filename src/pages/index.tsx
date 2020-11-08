import { NextSeo } from 'next-seo'
import React from 'react'
import 'twin.macro'

import Hero from '@/components/home/hero'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="| Home" />
      <Hero />
    </Layout>
  )
}
