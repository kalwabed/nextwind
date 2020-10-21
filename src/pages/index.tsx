import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='app'>
      <NextSeo title='| home' />
      <h1 className='text-4xl'>Kalwabed Rizki</h1>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </div>
  )
}
