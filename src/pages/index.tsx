import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="app">
      <NextSeo title="| home" />
      <h1 className="text-4xl">Kalwabed Rizki</h1>
      <div className="font-normal">normal</div>
      <div className="font-medium">Ini medium</div>
      <div className="font-light">light</div>
      <div className="font-semibold">semibold</div>
      <div className="font-bold">bold</div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
