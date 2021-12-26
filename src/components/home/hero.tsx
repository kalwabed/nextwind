import siteConfig from 'site-config'

const Hero = () => (
  <section className="text-gray-700">
    <div className="mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="text-center w-full">
        <h1 className="text-4xl mb-4 font-medium text-gray-900">{siteConfig.title}</h1>
        <p className="leading-relaxed mb-8">{siteConfig.description}</p>
        <div className="flex justify-center">
          <button
            className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 rounded text-lg transition outline-none hover:bg-gray-600 shadow-lg"
            type="button"
          >
            <a href="https://github.com/kalwabed/nextwind">Documentation</a>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
