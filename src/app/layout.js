import './globals.css'
import Headers from './header/Header.js'
import { Prov } from '../provide'


export const metadata = {
  title: 'LNCT Notes-webApp',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body>
      <Prov>
      <header><Headers /></header>
      
    {/* <ChakraProvider> */}
      {children}
      {/* </ChakraProvider> */}
      </Prov>
      </body>
     
    </html>
  
  )
}
