import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'

const projects = () => {
  return (
    <>
      <Head>
        <title>Yen | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main>
        <Layout>
          <AnimatedText text='Imagination Trumps Knowledge!' />
        </Layout>
      </main>
    </>
  )
}

export default projects
