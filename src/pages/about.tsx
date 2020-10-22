import Layout from '@/components/Layout'
import { NextSeo } from 'next-seo'

const About = () => {
  return (
    <div>
      <NextSeo title="| about" />
      <Layout>
        <h1 className="text-3xl mx-auto">About page</h1>
      </Layout>
    </div>
  )
}

export default About
