import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { system } from '@/theme'
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en') {
      i18n.changeLanguage('en')
    }
  }, [])

  return (
    <ChakraProvider value={system}>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ChakraProvider>
  )
}
