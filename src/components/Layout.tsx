import Link from 'next/link'
import siteConfig from 'site-config'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

const Header = () => (
  <header className="text-gray-200 bg-black">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/">
        <a className="flex font-medium items-center mb-4 md:mb-0">
          <span className="text-xl">{siteConfig.title}</span>
        </a>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/">
          <a className="mr-5 hover:text-teal-500 transition-colors duration-75 ease-out">Home</a>
        </Link>
        <Link href="/about">
          <a className="mr-5 hover:text-teal-500 transition-colors duration-75 ease-out">About</a>
        </Link>
      </nav>
      <button
        className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-teal-500 rounded text-base mt-4 md:mt-0 transition-colors duration-75 ease-out"
        type="button"
      >
        <a href="https://github.com/kalwabed/nextwind">Github</a>
      </button>
    </div>
  </header>
)

export default Layout
