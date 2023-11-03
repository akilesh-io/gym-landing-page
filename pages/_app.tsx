import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '../constant/constants';

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>

         <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
         <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
         </Script>

         <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            themes={['dark']}
            value={{
               dark: darkTheme.className,
            }}
         >
            <NextUIProvider>
               <Component {...pageProps} />
            </NextUIProvider>
         </NextThemesProvider>
      </>
   );
}

export default MyApp;
