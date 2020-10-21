import { NextSeo } from 'next-seo'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <NextSeo title="| about" />
      <h2 className="text-3xl">Rizki</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default About
