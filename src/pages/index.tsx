import Link from 'next/link'

export default function Home() {
  return (
    <div className='app'>
      <h1 className='text-4xl'>Kalwabed Rizki</h1>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </div>
  )
}
