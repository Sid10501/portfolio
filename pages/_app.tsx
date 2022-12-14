import { useEffect } from 'react'
import App, { AppProps } from 'next/app'
import { ChakraProvider, Box } from '@chakra-ui/react'
import AppLayout from 'components/layouts/appLayout'
import { PrismGlobal } from 'components/theme/prism'
import { useRouter } from 'next/router'
import * as gtag from 'lib/gtag'
import { AnimatePresence } from 'framer-motion'
import { theme } from 'components/theme'
import { AccentGlobal } from 'components/theme/Accent'
import { FontsGlobal } from 'components/theme/fonts'
import '../styles/app.css'
import "../styles/section-divider.css";
import "../styles/home.css";
import "../styles/bottom-bar.css";
import Blur from 'components/shared/blur'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <FontsGlobal />
      <AccentGlobal />
      <PrismGlobal />
      <AppLayout>
      <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
          zIndex={-2}
        />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Box key={router.route}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
export default MyApp
