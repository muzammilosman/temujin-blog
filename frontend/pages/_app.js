import App from "next/app"
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/style.scss"
import "../assets/css/_style.scss"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import Link from "next/link"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global, homepage } = pageProps

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <div className="container">
          <div className="hero-title text-center py-5">
            <Link href="/">
              <h1 className="title-header">{homepage.attributes.hero.title}</h1>
            </Link>
          </div>
          <Component {...pageProps} />
        </div>
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  })

  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      hero: "*",
      seo: { populate: "*" },
    }
  });

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data, homepage: homepageRes.data } }
}

export default MyApp
