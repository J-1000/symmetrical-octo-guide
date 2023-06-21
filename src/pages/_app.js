import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "@/styles/globals.css";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Fishing Place</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
          /* rel="stylesheet" */
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          /* rel="stylesheet" */
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js" />
      <SessionProvider session={session}>
        <SWRConfig
          value={{
            fetcher: async (...args) => {
              const response = await fetch(...args);
              if (!response.ok) {
                throw new Error(`Request with ${JSON.stringify(args)} failed.`);
              }
              return await response.json();
            },
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
