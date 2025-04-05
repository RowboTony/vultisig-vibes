import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/sections/Hero'
import FeatureGrid from '../components/FeatureGrid'
import RespawnRestore from '../components/sections/RespawnRestore'
import SecureExistingWallet from '../components/sections/SecureExistingWallet'
import ProgrammableSovereignty from '../components/sections/ProgrammableSovereignty'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vultisig | Seedless. Sovereign. Secure.</title>
        <meta name="description" content="Vultisig is a next-gen seedless wallet powered by TSS cryptography. Secure your assets with sovereign control and modern UX." />
      </Head>
      <Layout>
        <Hero />
        <FeatureGrid />
        <RespawnRestore />
        <SecureExistingWallet />
        <ProgrammableSovereignty />
        {/* Add other sections here as you build them */}
      </Layout>
    </>
  )
}
