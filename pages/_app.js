import '../styles/globals.css'
import Layout from '../components/Layout'
import "@fontsource/plus-jakarta-sans/latin.css";
import "@fontsource/inter/latin.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}