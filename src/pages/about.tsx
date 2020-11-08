import { NextSeo } from 'next-seo'
import tw from 'twin.macro'
import React from 'react'

import Layout from '@/components/Layout'

const About = () => {
  const H1 = tw.h1`text-3xl mx-auto`
  return (
    <Layout>
      <NextSeo title="| About" />
      <H1>About page</H1>
    </Layout>
  )
}

export default About
