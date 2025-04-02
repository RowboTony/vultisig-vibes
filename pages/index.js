import { BuilderComponent, builder } from '@builder.io/react'
import FeatureGrid from '../components/FeatureGrid'
import HeroSection from '../components/HeroSection' // Import the HeroSection component

builder.init('ba252d5412c242bca4d6218689ca1df4')

export async function getStaticProps() {
  const content = await builder.get('page', { url: '/' }).toPromise()
  return {
    props: {
      content: content || null,
    },
    revalidate: 5,
  }
}

export default function Home({ content }) {
  return (
    <>
      {content ? (
        <BuilderComponent model="page" content={content} />
      ) : (
        <>
          <HeroSection /> {/* Add the HeroSection component */}
          <div className="min-h-screen flex items-center justify-center bg-oxford text-white">
            <h1 className="text-4xl font-bold text-turquoise">
              Vultisig Landing Page Starter
            </h1>
          </div>
          <FeatureGrid />
        </>
      )}
    </>
  )
}