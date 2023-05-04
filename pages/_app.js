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

  return <Component {...pageProps} />
}

export default MyApp;