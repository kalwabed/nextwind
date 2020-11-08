import siteConfig from 'site-config'
import React from 'react'
import tw from 'twin.macro'

const ContentWrapper = tw.div`container mx-auto flex px-5 py-24 items-center justify-center flex-col`
const Title = tw.h1`text-4xl mb-4 font-medium text-gray-900 md:text-3xl`
const ButtonDoc = tw.button`inline-flex text-white bg-teal-500 border-0 py-2 px-6 rounded text-lg transition-colors ease-out duration-75 focus:outline-none hover:(bg-gray-600 shadow-xl)`

const Hero = () => (
  <section tw="text-gray-700">
    <ContentWrapper>
      <div tw="text-center w-full">
        <Title>{siteConfig.title}</Title>
        <p tw="leading-relaxed mb-8">{siteConfig.description}</p>
        <div tw="flex justify-center">
          <ButtonDoc type="button">
            <a href="https://github.com/kalwabed/nextwind">Documentation</a>
          </ButtonDoc>
        </div>
      </div>
    </ContentWrapper>
  </section>
)

export default Hero
