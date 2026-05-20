import { siteConfig } from '../config/site.ts'

export const Footer = () => {
   return (
      <footer className="site-footer" data-snap-section>
         <div className="site-footer__inner">
            <div>
               <p>Convite de casamento da {siteConfig.footerCoupleName}</p>
               <p>Todos os direitos reservados {new Date().getFullYear()}</p>
            </div>

            <p>
               Desenvolvido por{' '}
               <a
                  href="https://www.instagram.com/jeferson_gomes3"
                  target="_blank"
                  rel="noreferrer"
               >
                  Jeferson DEV
               </a>
            </p>
         </div>
      </footer>
   )
}
