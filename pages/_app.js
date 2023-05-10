import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {



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