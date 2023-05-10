import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../lib/analytics';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    router.events.on('routeChangeComplete', logPageView);
    return () => {
      router.events.off('routeChangeComplete', logPageView);
    }
  }, [router.events])

  <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LERWW2ZVSY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LERWW2ZVSY');
        `}
      </Script>

  return <Component {...pageProps} />
}

export default MyApp;