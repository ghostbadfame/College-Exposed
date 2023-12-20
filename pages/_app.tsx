import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../components/collegeList/college.scss'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}: AppProps) {
  return (
  
      <SessionProvider session={pageProps.session}>
      <Component {...pageProps}/>
    </SessionProvider>
      
    
  )
}
