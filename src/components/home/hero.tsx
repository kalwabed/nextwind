import siteConfig from 'site-config'
import styled from './hero.module.css'

const Hero = () => (
  <section className={styled.wrapper}>
    <div className={`container ${styled.contentWrapper}`}>
      <div className={styled.content}>
        <h1 className={styled.title}>{siteConfig.title}</h1>
        <p className={styled.subtitle}>{siteConfig.description}</p>
        <div className="flex justify-center">
          <button className={styled.btnDocumentation} type="button">
            <a href="https://github.com/kalwabed/nextwind">Documentation</a>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
