import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'

import siteConfig from 'site-config'

const Layout = ({ children }) => {
  return (
    <div tw="font-inter">
      <Header />
      {children}
    </div>
  )
}

const HeaderWrapper = tw.div`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center`
const Nav = tw.nav`md:ml-auto flex flex-wrap items-center text-base justify-center`
const NavLink = tw.a`mr-5 hover:(text-teal-500 cursor-pointer) transition-colors duration-75 ease-out`
const Button = tw.button`inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-teal-500 rounded text-base mt-4 md:mt-0 transition-colors duration-75 ease-out`

const Header = () => (
  <header tw="text-gray-200 bg-black">
    <HeaderWrapper>
      <Link href="/">
        <a tw="flex font-medium items-center mb-4 md:mb-0 cursor-pointer">
          <span tw="text-xl">{siteConfig.title}</span>
        </a>
      </Link>
      <Nav>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/about">
          <NavLink>About</NavLink>
        </Link>
      </Nav>
      <Button type="button">
        <a href="https://github.com/kalwabed/nextwind">Github</a>
      </Button>
    </HeaderWrapper>
  </header>
)

export default Layout
