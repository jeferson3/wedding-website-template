import { Footer } from './Footer.tsx'
import React from 'react'
import { Header } from './Header.tsx'

interface ILayout {
   children: React.ReactNode
}
export const Layout = ({ children }: ILayout) => {
   return (
      <>
         <Header />
         <main>{children}</main>
         <Footer />
      </>
   )
}
