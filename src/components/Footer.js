import React from 'react'
import Layout from './Layout'
import footer from './Footer.js'

const Footer = () => {
  return (
    <footer>
      <Layout>
        <span>Right</span>
        <Link href='/'>Yen</Link>
        <Link href='/'>Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer
