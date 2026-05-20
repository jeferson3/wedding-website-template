import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site.ts'

export const Header = () => {
   const { pathname } = useLocation()
   const isHome = pathname === '/'
   const homePath = isHome ? '' : '/'
   const [isScrolled, setIsScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 24)
      }

      handleScroll()
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <header
         className={`site-header ${isHome ? 'site-header--home' : 'site-header--page'} ${
            isScrolled ? 'site-header--fixed' : ''
         }`}
      >
         <div className="site-header__inner">
            <a href={`${homePath}#topo`} className="site-logo">
               <img
                  src={
                     isHome && !isScrolled
                        ? '/assets/brand_white.png'
                        : '/assets/brand_original.png'
                  }
                  alt={siteConfig.coupleDisplayName}
               />
            </a>

            <nav className="site-nav" aria-label="Menu principal">
               <a href={`${homePath}#topo`}>Início</a>
               <a href={`${homePath}#detalhes`}>Detalhes</a>
               <a href={`${homePath}#presentes`}>Presentes</a>
               <a href={`${homePath}#informacoes`}>Informações</a>
            </nav>
         </div>
      </header>
   )
}
