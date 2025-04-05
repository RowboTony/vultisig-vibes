// pages/index.js
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vultisig | Seedless. Sovereign. Secure.</title>
        <meta name="description" content="Vultisig is a next-gen seedless wallet powered by TSS cryptography. Secure your assets with sovereign control and modern UX." />
      </Head>
      {/* Sections are in Latout.tsx, no need to duplicate here */}
      <Layout />
    </>
  )
}
